---
title: "SQL Fragmentation"
permalink: /posts/2018-02-22-post-SQL-Fragmentation/
date: 2018-02-23 16:16:01 -0900
last_modified_at: 2018-03-01T12:42:38-04:00
search: true
author: Donald Boulton
author_profile: true
sidenav: true
adds: true
cookies: true
reviews: true
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
locations:
  - Idabel OKlahoma

excerpt: "Check SQL Server a specified database index fragmentation percentage (SQL). A Dynamic CMS using SQL Server most always has fragmentation. When files or data are in the wrong place then SQL Server has to spend time looking for the missing data, slowing the whole process down and increasing load times for your site."
image:
  cover: true
  path: &image /assets/images/pages/check_sql_fragmentation.png
  feature: *image
  thumbnail: /assets/images/pages/check_sql_fragmentation-320.png
header:
  image: /assets/images/pages/check_sql_fragmentation-1200.png
  teaser: /assets/images/pages/check_sql_fragmentation-320.png

support: [adds, cookies]
folder: mydoc 
---

{% include octo-arm.html %}

{% include page-intro.html %}

# Introduction

This T-SQL sample script illustrates how to check index fragmentation of a specified database in SQL Server.

From: [Technet Script Center](http://gallery.technet.microsoft.com/scriptcenter/Check-SQL-Server-a-a5758043#content)

A Dynamic CMS using SQL Server most always has fragmentation. When files or data are in the wrong place then SQL Server has to spend time looking for the missing data, slowing the whole process down and increasing load times for your site

## Scenarios

This script can be used for checking index fragmentation percentage of tables in SQL Server user databases. You can specify the database name and fragmentation percent, after you run the script, you will get the result.

### Script

The following steps use SQL Server 2008 R2 and AdventureWorks2008 sample database as example.

Step 1\. Open Microsoft SQL Server 2008 R2

Step 2\. Open Microsoft SQL Server Management Studio
Start- All programs- Microsoft SQL Server 2008 R2- Microsoft SQL Server Management Studio

![SQL Management](/assets/images/pages/sql_management.png){: .align-left}

Step 3\. Drag the script file to SQL Server Management Studio

Step 4\. Replace the following information with yours in the script

indexstats.avg_fragmentation_in_percent: In the script the  indexstats.avg_fragmentation_in_percent is greater than 30\. Please specify the percent.

Step 5\. Run the script

![Script Results](/assets/images/pages/script-results.jpg){: .align-left}

This script selects AdventureWorks2008.

After the script executing, we will get this result:

### Web Matrix is what I use to check Fragmentation

Open Web Matrix select databases and logon to your database, Select new query and paste IndexDefrag query in workspace the execute.

![Web Matrix](/assets/images/pages/IndexFragmentation_WebMatrix.png){: .align-left}

Here is my result on a database that is less than a month old. Media Library is 87% FRAGMENTED.

![Web Matrix Script Results](/assets/images/pages/IndexFragmentation_WebMatrix_Script_Results.png){: .align-left}

Additional Resources

See My post on how to fix this at: [Defrag SQl](https://donaldboulton.gihub.io/DWB/Defrag-SQL)

[SQL query performance might decrease when the SQL Server Database instance has high index fragmentation](http://support.microsoft.com/kb/2755960)

### Download this script .zip file

[Check Index Defragmentation](https://drive.google.com/open?id=1_BAytAHtcqp23dw-mOFSRjiIRzqPjmnX)