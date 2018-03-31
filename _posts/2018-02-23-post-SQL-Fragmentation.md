---
title: "SQL Fragmentation"
date: 2018-02-23 16:16:01 -0900
last_modified_at: 2018-03-01T12:42:38-04:00
search: true
author: Donald Boulton
author_profile: true
tags:
  - SQL
  - Fragmentation
  - Defrag

category:
  - Programing

toc: true
toc_label: "Contents"

read_time: true
comments: true
share: true
related: true

excerpt: Check SQL Server a specified database index fragmentation percentage (SQL)
header:
  image: /assets/images/pages/check_sql_fragmentation-1400.png
  teaser: /assets/images/pages/check_sql_fragmentation-1400.png

gallery:
  - url: /assets/images/pages/page-splitting.png
    image_path: /assets/images/pages/page-splitting-256.png
    alt: "Page Splitting"
  - url: /assets/images/pages/index_heatmap.jpeg
    image_path: /assets/images/pages/index_heatmap-256.png
    alt: "Index Heatmap"
  - url: /assets/images/pages/windows-xp-defragment-hard-drive.jpeg
    image_path: /assets/images/pages/windows-xp-defragment-hard-drive-256.jpeg
    alt: "Clusters"

---

{% include octo-arm.html %}

## Introduction

This T-SQL sample script illustrates how to check index fragmentation of a specified database in SQL Server.


From: [http://gallery.technet.microsoft.com/scriptcenter/Check-SQL-Server-a-a5758043#content](http://gallery.technet.microsoft.com/scriptcenter/Check-SQL-Server-a-a5758043#content)

A Dynamic CMS using SQL Server most always has fragmentation. When files or data are in the wrong place then SQL Server has to spend time looking for the missing data, slowing the whole process down and increasing load times for your site

### Scenarios

This script can be used for checking index fragmentation percentage of tables in SQL Server user databases. You can specify the database name and fragmentation percent, after you run the script, you will get the result.

### Script

The following steps use SQL Server 2008 R2 and AdventureWorks2008 sample database as example.

Step 1\. Open Microsoft SQL Server 2008 R2

Step 2\. Open Microsoft SQL Server Management Studio  
Start- All programs- Microsoft SQL Server 2008 R2- Microsoft SQL Server Management Studio  
<img class="text-left" src="https://donaldboulton.github.io/DWB/assets/images/pages/sql_management.png" />

Step 3\. Drag the script file to SQL Server Management Studio

Step 4\. Replace the following information with yours in the script

indexstats.avg_fragmentation_in_percent: In the script the  indexstats.avg_fragmentation_in_percent is greater than 30\. Please specify the percent.

Step 5\. Run the script

The below script selects AdventureWorks2008. 

After the script executing, we will get a result as the following figure shows:

<img class="text-left" src="/DWB/assets/images/pages/script-results.jpg" />

### Web Matrix is what I use to check Fragmentation.

Open Web Matrix select databases and logon to your database, Select new query and paste IndexDefrag query in workspace the execute.

<img class="text-left" src="/DWB/assets/images/pages/IndexFragmentation_WebMatrix.png" />

Here is my result on a database that is less than a month old. Media Library is 87% FRAGMENTED.

<img class="text-left" src="/DWB/assets/images/pages/IndexFragmentation_WebMatrix_Script_Results.png" />

Additional Resources

See My post on how to fix this at: [Defrag SQl](https://donaldboulton.gihub.io/DWB/Defrag-SQL)

[SQL query performance might decrease when the SQL Server Database instance has high index fragmentation](http://support.microsoft.com/kb/2755960)

### Download this script .zip file 
[Check Index Defragmentation](https://drive.google.com/open?id=1_BAytAHtcqp23dw-mOFSRjiIRzqPjmnX).

{% include gallery caption="Old XP Defragmentation, Page Splitting, Web Matrix Defrag." %}
