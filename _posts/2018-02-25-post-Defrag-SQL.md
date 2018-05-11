---
layout: single
title: "Defrag SQL"
permalink: 2018-02-25-post-Defrag-SQL.html
date: 2018-02-25 16:16:01 -0600
last_modified_at: 2018-03-01T12:42:38-04:00
search: true
author: Donald Boulton
author_profile: true
sidenav: true
adds: true
cookies: true
reviews: true
tags:
  - SQL Server
  - SQL Defragment
category:
  - Programing

toc: true
toc_label: "Contents"

read_time: true
comments: true
share: true

excerpt: "Defrag Sql 2008 to 2016. In any SQl database and one that updates through migrations like Orchard CMS get defragmented and I have notice over the years dealing with SQL server that it needs defraging occasionaly, keeping the performance optimized"
image:
  cover: true
  path: &image /assets/images/pages/defrag-sql-2014.png
  feature: *image
  thumbnail: /assets/images/pages/defrag-sql-2014-320.png
header:
  image: /assets/images/pages/defrag-sql-2014-1200.png
  teaser: /assets/images/pages/defrag-sql-2014-320.png

support: [adds, cookies]
folder: _posts
---

{% include octo-arm.html %}

{% include page-intro.html %}

# SQL Server 2008 - 2016

In any SQl database and one that updates through migrations like Orchard CMS get defragmented and I have notice over the years dealing with SQL server that it needs defraging occasionaly, keeping the performance optimized.

I have included this in my blog as a notice to pay attention and defrag your SQL database.

## Microsoft Post

[Microsoft Docs](https://docs.microsoft.com/en-us/sql/t-sql/database-console-commands/dbcc-indexdefrag-transact-sql)

It’s been quite some time since my last index defrag script update. A big part of the reason for that is because I wanted to implement many of the suggestions I’ve received, but I just haven’t had the time. I still have those changes planned, but I’m not sure quite when I’ll get to it. Rather than continue to wait for a major release, I’m releasing a small update to my defrag that will take care of the most common complaints I receive.

Change Log

* Bug fix for databases containing spaces or special characters
* Support for case-sensitive databases
* Re-executable CREATE script (for those who want to re-run the whole script)
* Comma-delimited list of databases is now supported for the @database parameter

Feature List:

* Defrag a single database, a list of databases, or all databases (@database)
* Time Limitations: stop defragging after the specified amount of time has elapsed (@timeLimit). Please note, it will not kill a defrag that is currently in process, even if it exceeds the threshold.
* Optional stop-and-resume functionality: pick up where your defrag last left off without having to rescan sys.dm_db_index_physical_stats. (@forceRescan)
* Defrag scheduling: choose which days to defrag certain indexes, or exclude certain indexes altogether, by using the dbo.dba_indexDefragExclusion table.
* Defrag priority: choose whether to defrag indexes in ascending or descending order by range_scan_count (default), fragmentation, or page_count.
* Current partition exclusion: choose whether or not to exclude the right-most populated partition from the defrag process, common for sliding-window tables (@excludeMaxPartition)
* Commands-only mode: Choose to just log the current defrag status and print the defrag commands, rather than executing them, by using @executeSQL.
* And tons more! Please read the parameter list and notes section for details of all the options available.

FAQ:

I often receive the same questions about this script, so allow me to answer them here:

I keep running the script, but my index is still fragmented. Why?
This is most likely a very small index. Here’s what Microsoft has to say:

In general, fragmentation on small indexes is often not controllable. The pages of small indexes are stored on mixed extents. Mixed extents are shared by up to eight objects, so the fragmentation in a small index might not be reduced after reorganizing or rebuilding the index. For more information about mixed extents, see Understanding Pages and Extents.

What database should I create it in? or Can I create this in the MASTER database?
It’s up to you where you create it. You could technically create it in the MASTER database, but I recommend creating a utility database for your DBA administrative tasks.

Can I run this against a SharePoint database?
Yes, you can.

What are the minimum requirements to run this script? or Will this run on SQL Server 2000 instances?
You need to be on SQL Server 2005 SP2 or higher.

### SQL Server 2008 R2 or higher

```sql
/*Perform a 'USE <database name>' to select the database in which to run the script.*/
-- Declare variables
SET NOCOUNT ON;
DECLARE @tablename varchar(255);
DECLARE @execstr   varchar(400);
DECLARE @objectid  int;
DECLARE @indexid   int;
DECLARE @frag      decimal;
DECLARE @maxfrag   decimal;

-- Decide on the maximum fragmentation to allow for.
SELECT @maxfrag = 30.0;

-- Declare a cursor.
DECLARE tables CURSOR FOR
   SELECT TABLE_SCHEMA + '.' + TABLE_NAME
   FROM INFORMATION_SCHEMA.TABLES
   WHERE TABLE_TYPE = 'BASE TABLE';

-- Create the table.
CREATE TABLE #fraglist (
   ObjectName char(255),
   ObjectId int,
   IndexName char(255),
   IndexId int,
   Lvl int,
   CountPages int,
   CountRows int,
   MinRecSize int,
   MaxRecSize int,
   AvgRecSize int,
   ForRecCount int,
   Extents int,
   ExtentSwitches int,
   AvgFreeBytes int,
   AvgPageDensity int,
   ScanDensity decimal,
   BestCount int,
   ActualCount int,
   LogicalFrag decimal,
   ExtentFrag decimal);

-- Open the cursor.
OPEN tables;

-- Loop through all the tables in the database.
FETCH NEXT
   FROM tables
   INTO @tablename;

WHILE @@FETCH_STATUS = 0
BEGIN
-- Do the showcontig of all indexes of the table
   INSERT INTO #fraglist
   EXEC ('DBCC SHOWCONTIG (''' + @tablename + ''')
      WITH FAST, TABLERESULTS, ALL_INDEXES, NO_INFOMSGS')
   FETCH NEXT
      FROM tables
      INTO @tablename;
END;

-- Close and deallocate the cursor.
CLOSE tables;
DEALLOCATE tables;

-- Declare the cursor for the list of indexes to be defragged.
DECLARE indexes CURSOR FOR
   SELECT ObjectName, ObjectId, IndexId, LogicalFrag
   FROM #fraglist
   WHERE LogicalFrag >= @maxfrag
      AND INDEXPROPERTY (ObjectId, IndexName, 'IndexDepth') > 0;

-- Open the cursor.
OPEN indexes;

-- Loop through the indexes.
FETCH NEXT
   FROM indexes
   INTO @tablename, @objectid, @indexid, @frag;

WHILE @@FETCH_STATUS = 0
BEGIN
   PRINT 'Executing DBCC INDEXDEFRAG (0, ' + RTRIM(@tablename) + ',
      ' + RTRIM(@indexid) + ') - fragmentation currently '
       + RTRIM(CONVERT(varchar(15),@frag)) + '%';
   SELECT @execstr = 'DBCC INDEXDEFRAG (0, ' + RTRIM(@objectid) + ',
       ' + RTRIM(@indexid) + ')';
   EXEC (@execstr);

   FETCH NEXT
      FROM indexes
      INTO @tablename, @objectid, @indexid, @frag;
END;

-- Close and deallocate the cursor.
CLOSE indexes;
DEALLOCATE indexes;

-- Delete the temporary table.
DROP TABLE #fraglist;
GO
```

#### SQL 2005 - 2008 code

Originally created by Microsoft

[Error corrected by Pinal Dave](http://www.SQLAuthority.com)

### Check Fragmentation

```sql
DBCC INDEXDEFRAG
(
    { database_name | database_id | 0 }
    , { table_name | table_id | view_name | view_id }
    [ , { index_name | index_id } [ , { partition_number | 0 } ] ]
)
    [ WITH NO_INFOMSGS ]
```

#### SQL Server DBCC INDEXDEFRAG code

```sql
Perform a 'USE <database name>' to select the database in which to run the script.*/
-- Declare variables
SET NOCOUNT ON;
DECLARE @tablename varchar(255);
DECLARE @execstr   varchar(400);
DECLARE @objectid  int;
DECLARE @indexid   int;
DECLARE @frag      decimal;
DECLARE @maxfrag   decimal;

-- Decide on the maximum fragmentation to allow for.
SELECT @maxfrag = 30.0;

-- Declare a cursor.
DECLARE tables CURSOR FOR
   SELECT TABLE_SCHEMA + '.' + TABLE_NAME
   FROM INFORMATION_SCHEMA.TABLES
   WHERE TABLE_TYPE = 'BASE TABLE';

-- Create the table.
CREATE TABLE #fraglist (
   ObjectName char(255),
   ObjectId int,
   IndexName char(255),
   IndexId int,
   Lvl int,
   CountPages int,
   CountRows int,
   MinRecSize int,
   MaxRecSize int,
   AvgRecSize int,
   ForRecCount int,
   Extents int,
   ExtentSwitches int,
   AvgFreeBytes int,
   AvgPageDensity int,
   ScanDensity decimal,
   BestCount int,
   ActualCount int,
   LogicalFrag decimal,
   ExtentFrag decimal);

-- Open the cursor.
OPEN tables;

-- Loop through all the tables in the database.
FETCH NEXT
   FROM tables
   INTO @tablename;

WHILE @@FETCH_STATUS = 0
BEGIN
-- Do the showcontig of all indexes of the table
   INSERT INTO #fraglist
   EXEC ('DBCC SHOWCONTIG (''' + @tablename + ''')
      WITH FAST, TABLERESULTS, ALL_INDEXES, NO_INFOMSGS');
   FETCH NEXT
      FROM tables
      INTO @tablename;
END;

-- Close and deallocate the cursor.
CLOSE tables;
DEALLOCATE tables;

-- Declare the cursor for the list of indexes to be defragged.
DECLARE indexes CURSOR FOR
   SELECT ObjectName, ObjectId, IndexId, LogicalFrag
   FROM #fraglist
   WHERE LogicalFrag >= @maxfrag
      AND INDEXPROPERTY (ObjectId, IndexName, 'IndexDepth') > 0;

-- Open the cursor.
OPEN indexes;

-- Loop through the indexes.
FETCH NEXT
   FROM indexes
   INTO @tablename, @objectid, @indexid, @frag;

WHILE @@FETCH_STATUS = 0
BEGIN
   PRINT 'Executing DBCC INDEXDEFRAG (0, ' + RTRIM(@tablename) + ',
      ' + RTRIM(@indexid) + ') - fragmentation currently '
       + RTRIM(CONVERT(varchar(15),@frag)) + '%';
   SELECT @execstr = 'DBCC INDEXDEFRAG (0, ' + RTRIM(@objectid) + ',
       ' + RTRIM(@indexid) + ')';
   EXEC (@execstr);

   FETCH NEXT
      FROM indexes
      INTO @tablename, @objectid, @indexid, @frag;
END;

-- Close and deallocate the cursor.
CLOSE indexes;
DEALLOCATE indexes;

-- Delete the temporary table.
DROP TABLE #fraglist;
GO
```

DBCC INDEXDEFRAG defragments the leaf level of an index so that the physical order of the pages matches the left-to-right logical order of the leaf nodes, therefore improving index-scanning performance.

Note

When DBCC INDEXDEFRAG is run, index defragmentation occurs serially. This means that the operation on a single index is performed using a single thread. No parallelism occurs. Also, operations on multiple indexes from the same DBCC INDEXDEFRAG statement are performed on one index at a time.

DBCC INDEXDEFRAG also compacts the pages of an index, taking into consideration the fill factor specified when the index was created. Any empty pages created because of this compaction are removed. For more information, see [Specify Fill Factor for an Index](http://msdn.microsoft.com/en-us/library/ms177459.aspx).

If an index spans more than one file, DBCC INDEXDEFRAG defragments one file at a time. Pages do not migrate between files.

DBCC INDEXDEFRAG reports the estimated percentage completed every five minutes. DBCC INDEXDEFRAG can be stopped at any point in the process, and any completed work is retained.

Unlike DBCC DBREINDEX, or the index building operation generally, DBCC INDEXDEFRAG is an online operation. It does not hold locks long term. Therefore, DBCC INDEXDEFRAG does not block running queries or updates. Because the time to defragment is related to the level of fragmentation, a relatively unfragmented index can be defragmented faster than a new index can be built. A very fragmented index might take considerably longer to defragment than to rebuild.

The defragmentation is always fully logged, regardless of the database recovery model setting. For more information, see [ALTER DATABASE (Transact-SQL)](http://msdn.microsoft.com/en-us/library/ms174269.aspx)

The defragmentation of a very fragmented index can generate more log than a fully logged index creation. However, the defragmentation is performed as a series of short transactions, so a large log is unnecessary if log backups are taken frequently or if the recovery model setting is SIMPLE.

### Restrictions

DBCC INDEXDEFRAG shuffles index leaf pages in place. Therefore, if an index is interleaved with other indexes on disk, running DBCC INDEXDEFRAG against that index does not make all leaf pages in the index contiguous. To improve the clustering of pages, rebuild the index.

DBCC INDEXDEFRAG cannot be used to defragment the following indexes:

* A disabled index.

* An index with page locking set to OFF.

* A spatial index.

DBCC INDEXDEFRAG is not supported for use on system tables.

{% include links.html %}