---
layout: single
title: "SQL Fragmentation"
permalink: /2018-02-23-post-SQL-Fragmentation/
date: 2018-02-23 16:16:01 -0900
search: true
author: Donald Boulton
author_profile: false
tags:
  - SQL
  - Fragmentation
  - Defrag

category:
  - Programing

toc: true
toc_label: "Page Contents"
toc_icon: "file"

read_time: true
comments: true
share: true
related: true

excerpt: "SQl Fragmentation is a issue for most all my other sites. Not for this Jekyll SIte though - Static."
header:
  image: //d3n8k0cqgcsxxu.cloudfront.net/pages/check_sql_fragmentation.png)](https//d3n8k0cqgcsxxu.cloudfront.net/pages/check_sql_fragmentation.png
  teaser: //d3n8k0cqgcsxxu.cloudfront.net/pages/check_sql_fragmentation.png)](https//d3n8k0cqgcsxxu.cloudfront.net/pages/check_sql_fragmentation.png
gallery:
  - url: /assets/images/gravtar-icon-600.jpg
    image_path: /assets/images/gravatar-icon-225.jpg
    alt: "Gravtar Image"
  - url: /assets/images/avatar-600.png
    image_path: /assets/images/avatar-225.png
    alt: "Gravtar Generic Image"
  - url: /assets/images/myLetterAvatar-600.png
    image_path: /assets/images/myLetterAvatar-225.png
    alt: "Letter Avatar"

excerpt: Check SQL Server a specified database index fragmentation percentage (SQL)
---
### Introduction

This T-SQL sample script illustrates how to check index fragmentation of a specified database in SQL Server.


From: [http://gallery.technet.microsoft.com/scriptcenter/Check-SQL-Server-a-a5758043#content](http://gallery.technet.microsoft.com/scriptcenter/Check-SQL-Server-a-a5758043#content)

A Dynamic CMS using SQL Server most always has fragmentation. When files or data are in the wrong place then SQL Server has to spend time looking for the missing data, slowing the whole process down and increasing load times for your site

### Scenarios

This script can be used for checking index fragmentation percentage of tables in SQL Server user databases. You can specify the database name and fragmentation percent, after you run the script, you will get the result.

## Script

The following steps use SQL Server 2008 R2 and AdventureWorks2008 sample database as example.

Step 1\. Open Microsoft SQL Server 2008 R2

Step 2\. Open Microsoft SQL Server Management Studio  
Start- All programs- Microsoft SQL Server 2008 R2- Microsoft SQL Server Management Studio  
![SQL Management](//d3n8k0cqgcsxxu.cloudfront.net/pages/sql_management.png)

Step 3\. Drag the script file to SQL Server Management Studio

Step 4\. Replace the following information with yours in the script

indexstats.avg_fragmentation_in_percent: In the script the  indexstats.avg_fragmentation_in_percent is greater than 30\. Please specify the percent.

Step 5\. Run the script

The below script selects AdventureWorks2008. 

After the script executing, we will get a result as the following figure shows:

![Script Results](https://d3n8k0cqgcsxxu.cloudfront.net/pages/script-results.jpg)

### Web Matrix is what I use to check Fragmentation.

Open Web Matrix select databases and logon to your database, Select new query and paste IndexDefrag query in workspace the execute.

![Index Fragmentation](https://d3n8k0cqgcsxxu.cloudfront.net/pages/IndexFragmentation_WebMatrix.png)

Here is my result on a database that is less than a month old. Media Library is 87% FRAGMENTED.

![SQL Management](https://d3n8k0cqgcsxxu.cloudfront.net/pages/IndexFragmentation_WebMatrix_Script_Results.png)

## Additional Resources

See my post on how to fix this at: [https://donaldboulton.gihub.io/DWB/SQl Defrag](https://donaldboulton.gihub.io/DWB/SQl-Defrag)

[SQL query performance might decrease when the SQL Server Database instance has high index fragmentation](http://support.microsoft.com/kb/2755960)

Download this script at [Check Index Defragmentation](https://d3n8k0cqgcsxxu.cloudfront.net/zip/IndexFragmentation.zip).


*   [ Favorite](https://twitter.com/intent/favorite?tweet_id=446055523948199936 "Favorite") [Reply](https://twitter.com/intent/tweet?in_reply_to=446055523948199936 "Reply") [ Retweet](https://twitter.com/intent/retweet?tweet_id=446055523948199936 "Retweet")

</div>