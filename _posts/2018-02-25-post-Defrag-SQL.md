---
layout: single
title: "Defrag SQL"
permalink: /2018-02-25-post-Defrag-SQL/
date: 2018-02-25 16:16:01 -0600
search: true
author: Donald Boulton
author_profile: true
tags:
  - SQL Server
  - SQL Defragment
category:
  - Programing

toc: true
toc_label: "Page Contents"
toc_icon: "file"

read_time: true
comments: true
share: true
related: true

excerpt: "Many of us got really tired of the Gravatar Service being down or slow and having multiple server calls to download the Gravatar. 
Alot of people do not even know about gravatar and your get a generic image for the User Avatar."
header:
  image: /assets/images/pages/letter-avatar-header.png
  teaser: /assets/images/pages/letter-avatar-header.png

gallery:
  - url: /assets/images/pages/gravatar-icon-600.jpg
    image_path: /assets/images/pages/gravatar-icon-225.jpg
    alt: "Gravtar Image"
  - url: /assets/images/pages/avatar-600.png
    image_path: /assets/images/pages/avatar-225.png
    alt: "Gravtar Generic Image"
  - url: /assets/images/pages/myLetterAvatar-600.png
    image_path: /assets/images/pages/myLetterAvatar-225.png
    alt: "Letter Avatar"
---

## Defragment SQL Server

<div class="post-image">[![](~/images/pages/svg/defrag-sql-2014.svg)](https://lh3.googleusercontent.com/proxy/OdYBSPJ0TSiTQ1juJClZa5OlnbWYhZ_Hobw-L6HRehnnnYBbgFsvVb6ghuCqfzy5HXE39QoBJ5kkt8-yE3Uc_XiA_WgL=w120-h120 "defrag SQL 2014")</div>

### [Index Defrag Script, v4.1](https://plus.google.com/u/0/b/107995112308214802482/107995112308214802482 "Google Plus +1 Posts.")

<div itemprop="description">Origionally Posting by <span>[Michelle Ufford](http://sqlfool.com/author/michelle/ "View all posts by Michelle Ufford")</span></div>

<div itemprop="mainContentOfPage">

In any SQl database and one that updates through migrations like Orchard CMS get defragmented and I have notice over the years dealing with SQL server that it needs defraging occasionaly, keeping the performance optimized.

<span>I have included this in my blog as a notice to pay attention and defrag your SQL database.</span>

#### Origional Post

New For SQL 2012[<span class="published"> **Posted on Jun16 2011**</span>](http://sqlfool.com/2011/06/index-defrag-script-v4-1/) <span class="author vcard">Written by **[Michelle Ufford](http://sqlfool.com/author/michelle/ "View all posts by Michelle Ufford")**</span> at:  [http://sqlfool.com/2011/06/index-defrag-script-v4-1/](http://sqlfool.com/2011/06/index-defrag-script-v4-1/ "Origional Post By Michelle Ufford")

<div class="entry-content article">

It’s been quite some time since my last index defrag script update. A big part of the reason for that is because I wanted to implement many of the suggestions I’ve received, but I just haven’t had the time. I still have those changes planned, but I’m not sure quite when I’ll get to it. Rather than continue to wait for a major release, I’m releasing a small update to my defrag that will take care of the most common complaints I receive.

**Change Log:**

*   Bug fix for databases containing spaces or special characters
*   Support for case-sensitive databases
*   Re-executable CREATE script (for those who want to re-run the whole script)
*   Comma-delimited list of databases is now supported for the @database parameter

**Feature List:**

*   Defrag a single database, a list of databases, or all databases (@database)
*   Time Limitations: stop defragging after the specified amount of time has elapsed (@timeLimit). Please note, it will not kill a defrag that is currently in process, even if it exceeds the threshold.
*   Optional stop-and-resume functionality: pick up where your defrag last left off without having to rescan sys.dm_db_index_physical_stats. (@forceRescan)
*   Defrag scheduling: choose which days to defrag certain indexes, or exclude certain indexes altogether, by using the dbo.dba_indexDefragExclusion table.
*   Defrag priority: choose whether to defrag indexes in ascending or descending order by range_scan_count (default), fragmentation, or page_count.
*   Current partition exclusion: choose whether or not to exclude the right-most populated partition from the defrag process, common for sliding-window tables (@excludeMaxPartition)
*   Commands-only mode: Choose to just log the current defrag status and print the defrag commands, rather than executing them, by using @executeSQL.
*   … and tons more! Please read the parameter list and notes section for details of all the options available.

**FAQ:**

I often receive the same questions about this script, so allow me to answer them here:

_“I keep running the script, but my index is still fragmented. Why?”_  
This is most likely a very small index. Here’s what Microsoft has to say:

“In general, fragmentation on small indexes is often not controllable. The pages of small indexes are stored on mixed extents. Mixed extents are shared by up to eight objects, so the fragmentation in a small index might not be reduced after reorganizing or rebuilding the index. For more information about mixed extents, see Understanding Pages and Extents.”

_“What database should I create it in?” or “Can I create this in the MASTER database?”_  
It’s up to you where you create it. You could technically create it in the MASTER database, but I recommend creating a utility database for your DBA administrative tasks.

_“Can I run this against a SharePoint database?”_  
Yes, you can.

_“What are the minimum requirements to run this script?” or “Will this run on SQL Server 2000 instances?”_  
You need to be on SQL Server 2005 SP2 or higher.

</div>

</div>

<div>[First Code block for SQL Server 2008 R2 or higher.](#profile1 "SQL Server 2008 R2 or higher")</div>

<div class="hidden" id="inline_profiles">

<div class="profilex" id="profile1">

<pre class="pre">SQL Server 2008 R2 or higher</pre>

<pre class="pre"><span style="color: #008080;">/*** Scroll down to the see important notes, disclaimers, and licensing information ***/</span>

<span style="color: #008080;">/* Let's create our parsing function... */</span>
<span style="color: #0000FF;">IF</span> <span style="color: #808080;">EXISTS</span> <span style="color: #808080;">(</span> <span style="color: #0000FF;">SELECT</span>  <span style="color: #808080;">[</span><span style="color: #FF00FF;">object_id</span><span style="color: #808080;">]</span>
            <span style="color: #0000FF;">FROM</span>    sys.<span style="color: #202020;">objects</span>
            <span style="color: #0000FF;">WHERE</span>   name <span style="color: #808080;">=</span> <span style="color: #FF0000;">'dba_parseString_udf'</span> <span style="color: #808080;">)</span>
    <span style="color: #0000FF;">DROP</span> <span style="color: #0000FF;">FUNCTION</span> dbo.<span style="color: #202020;">dba_parseString_udf</span>;
GO

<span style="color: #0000FF;">CREATE</span> <span style="color: #0000FF;">FUNCTION</span> dbo.<span style="color: #202020;">dba_parseString_udf</span>
<span style="color: #808080;">(</span>
          @stringToParse <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">8000</span><span style="color: #808080;">)</span>  
        , @delimiter     <span style="color: #0000FF;">CHAR</span><span style="color: #808080;">(</span><span style="color: #000;">1</span><span style="color: #808080;">)</span>
<span style="color: #808080;">)</span>
<span style="color: #0000FF;">RETURNS</span> @parsedString <span style="color: #0000FF;">TABLE</span> <span style="color: #808080;">(</span>stringValue <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">128</span><span style="color: #808080;">))</span>
<span style="color: #0000FF;">AS</span>
<span style="color: #008080;">/*********************************************************************************
    Name:       dba_parseString_udf

    Author:     Michelle Ufford, http://sqlfool.com

    Purpose:    This function parses string input using a variable delimiter.

    Notes:      Two common delimiter values are space (' ') and comma (',')

    Date        Initials    Description
    ----------------------------------------------------------------------------
    2011-05-20  MFU         Initial Release
*********************************************************************************
Usage: 		
    SELECT *
    FROM dba_parseString_udf(<string>, <delimiter>);

Test Cases:

    1\.  multiple strings separated by space
        SELECT * FROM dbo.dba_parseString_udf('  aaa  bbb  ccc ', ' ');

    2\.  multiple strings separated by comma
        SELECT * FROM dbo.dba_parseString_udf(',aaa,bbb,,,ccc,', ',');
*********************************************************************************/</span>
<span style="color: #0000FF;">BEGIN</span>

    <span style="color: #008080;">/* Declare variables */</span>
    <span style="color: #0000FF;">DECLARE</span> @trimmedString  <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">8000</span><span style="color: #808080;">)</span>;

    <span style="color: #008080;">/* We need to trim our string input in case the user entered extra spaces */</span>
    <span style="color: #0000FF;">SET</span> @trimmedString <span style="color: #808080;">=</span> <span style="color: #FF00FF;">LTRIM</span><span style="color: #808080;">(</span><span style="color: #FF00FF;">RTRIM</span><span style="color: #808080;">(</span>@stringToParse<span style="color: #808080;">))</span>;

    <span style="color: #008080;">/* Let's create a recursive CTE to break down our string for us */</span>
    <span style="color: #0000FF;">WITH</span> parseCTE <span style="color: #808080;">(</span>StartPos, EndPos<span style="color: #808080;">)</span>
    <span style="color: #0000FF;">AS</span>
    <span style="color: #808080;">(</span>
        <span style="color: #0000FF;">SELECT</span> <span style="color: #000;">1</span> <span style="color: #0000FF;">AS</span> StartPos
            , <span style="color: #FF00FF;">CHARINDEX</span><span style="color: #808080;">(</span>@delimiter, @trimmedString <span style="color: #808080;">+</span> @delimiter<span style="color: #808080;">)</span> <span style="color: #0000FF;">AS</span> EndPos
        <span style="color: #0000FF;">UNION</span> <span style="color: #808080;">ALL</span>
        <span style="color: #0000FF;">SELECT</span> EndPos <span style="color: #808080;">+</span> <span style="color: #000;">1</span> <span style="color: #0000FF;">AS</span> StartPos
            , <span style="color: #FF00FF;">CHARINDEX</span><span style="color: #808080;">(</span>@delimiter, @trimmedString <span style="color: #808080;">+</span> @delimiter , EndPos <span style="color: #808080;">+</span> <span style="color: #000;">1</span><span style="color: #808080;">)</span> <span style="color: #0000FF;">AS</span> EndPos
        <span style="color: #0000FF;">FROM</span> parseCTE
        <span style="color: #0000FF;">WHERE</span> <span style="color: #FF00FF;">CHARINDEX</span><span style="color: #808080;">(</span>@delimiter, @trimmedString <span style="color: #808080;">+</span> @delimiter, EndPos <span style="color: #808080;">+</span> <span style="color: #000;">1</span><span style="color: #808080;">)</span> <span style="color: #808080;"><></span> <span style="color: #000;">0</span>
    <span style="color: #808080;">)</span>

    <span style="color: #008080;">/* Let's take the results and stick it in a table */</span>  
    <span style="color: #0000FF;">INSERT</span> <span style="color: #0000FF;">INTO</span> @parsedString
    <span style="color: #0000FF;">SELECT</span> <span style="color: #FF00FF;">SUBSTRING</span><span style="color: #808080;">(</span>@trimmedString, StartPos, EndPos <span style="color: #808080;">-</span> StartPos<span style="color: #808080;">)</span>
    <span style="color: #0000FF;">FROM</span> parseCTE
    <span style="color: #0000FF;">WHERE</span> <span style="color: #FF00FF;">LEN</span><span style="color: #808080;">(</span><span style="color: #FF00FF;">LTRIM</span><span style="color: #808080;">(</span><span style="color: #FF00FF;">RTRIM</span><span style="color: #808080;">(</span><span style="color: #FF00FF;">SUBSTRING</span><span style="color: #808080;">(</span>@trimmedString, StartPos, EndPos <span style="color: #808080;">-</span> StartPos<span style="color: #808080;">))))</span> <span style="color: #808080;">></span> <span style="color: #000;">0</span>
    <span style="color: #0000FF;">OPTION</span> <span style="color: #808080;">(</span>MaxRecursion <span style="color: #000;">8000</span><span style="color: #808080;">)</span>;

    <span style="color: #0000FF;">RETURN</span>;   
<span style="color: #0000FF;">END</span>
GO

<span style="color: #008080;">/* First, we need to take care of schema updates, in case you have a legacy 
   version of the script installed */</span>
<span style="color: #0000FF;">DECLARE</span> @indexDefragLog_rename      <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">128</span><span style="color: #808080;">)</span>
  , @indexDefragExclusion_rename    <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">128</span><span style="color: #808080;">)</span>
  , @indexDefragStatus_rename       <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">128</span><span style="color: #808080;">)</span>;

<span style="color: #0000FF;">SELECT</span>  @indexDefragLog_rename <span style="color: #808080;">=</span> <span style="color: #FF0000;">'dba_indexDefragLog_obsolete_'</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CONVERT</span><span style="color: #808080;">(</span><span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">10</span><span style="color: #808080;">)</span>, <span style="color: #FF00FF;">GETDATE</span><span style="color: #808080;">()</span>, <span style="color: #000;">112</span><span style="color: #808080;">)</span>
      , @indexDefragExclusion_rename <span style="color: #808080;">=</span> <span style="color: #FF0000;">'dba_indexDefragExclusion_obsolete_'</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CONVERT</span><span style="color: #808080;">(</span><span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">10</span><span style="color: #808080;">)</span>, <span style="color: #FF00FF;">GETDATE</span><span style="color: #808080;">()</span>, <span style="color: #000;">112</span><span style="color: #808080;">)</span>;

<span style="color: #0000FF;">IF</span> <span style="color: #808080;">EXISTS</span> <span style="color: #808080;">(</span> <span style="color: #0000FF;">SELECT</span>  <span style="color: #808080;">[</span><span style="color: #FF00FF;">object_id</span><span style="color: #808080;">]</span>
            <span style="color: #0000FF;">FROM</span>    sys.<span style="color: #202020;">indexes</span>
            <span style="color: #0000FF;">WHERE</span>   name <span style="color: #808080;">=</span> <span style="color: #FF0000;">'PK_indexDefragLog'</span> <span style="color: #808080;">)</span> 
    <span style="color: #0000FF;">EXECUTE</span> <span style="color: #AF0000;">sp_rename</span> dba_indexDefragLog, @indexDefragLog_rename;

<span style="color: #0000FF;">IF</span> <span style="color: #808080;">EXISTS</span> <span style="color: #808080;">(</span> <span style="color: #0000FF;">SELECT</span>  <span style="color: #808080;">[</span><span style="color: #FF00FF;">object_id</span><span style="color: #808080;">]</span>
            <span style="color: #0000FF;">FROM</span>    sys.<span style="color: #202020;">indexes</span>
            <span style="color: #0000FF;">WHERE</span>   name <span style="color: #808080;">=</span> <span style="color: #FF0000;">'PK_indexDefragExclusion'</span> <span style="color: #808080;">)</span> 
    <span style="color: #0000FF;">EXECUTE</span> <span style="color: #AF0000;">sp_rename</span> dba_indexDefragExclusion, @indexDefragExclusion_rename;

<span style="color: #0000FF;">IF</span> <span style="color: #808080;">NOT</span> <span style="color: #808080;">EXISTS</span> <span style="color: #808080;">(</span> <span style="color: #0000FF;">SELECT</span>  <span style="color: #808080;">[</span><span style="color: #FF00FF;">object_id</span><span style="color: #808080;">]</span>
                <span style="color: #0000FF;">FROM</span>    sys.<span style="color: #202020;">indexes</span>
                <span style="color: #0000FF;">WHERE</span>   name <span style="color: #808080;">=</span> <span style="color: #FF0000;">'PK_indexDefragLog_v40'</span> <span style="color: #808080;">)</span>
<span style="color: #0000FF;">BEGIN</span>

    <span style="color: #0000FF;">CREATE</span> <span style="color: #0000FF;">TABLE</span> dbo.<span style="color: #202020;">dba_indexDefragLog</span>
    <span style="color: #808080;">(</span>
         indexDefrag_id     <span style="color: #0000FF;">INT</span> <span style="color: #0000FF;">IDENTITY</span><span style="color: #808080;">(</span><span style="color: #000;">1</span>, <span style="color: #000;">1</span><span style="color: #808080;">)</span>  <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
       , databaseID         <span style="color: #0000FF;">INT</span>                 <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
       , databaseName       <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">128</span><span style="color: #808080;">)</span>       <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
       , objectID           <span style="color: #0000FF;">INT</span>                 <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
       , objectName         <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">128</span><span style="color: #808080;">)</span>       <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
       , indexID            <span style="color: #0000FF;">INT</span>                 <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
       , indexName          <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">128</span><span style="color: #808080;">)</span>       <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
       , partitionNumber    <span style="color: #0000FF;">SMALLINT</span>            <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
       , fragmentation      <span style="color: #0000FF;">FLOAT</span>               <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
       , page_count         <span style="color: #0000FF;">INT</span>                 <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
       , dateTimeStart      <span style="color: #0000FF;">DATETIME</span>            <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
       , dateTimeEnd        <span style="color: #0000FF;">DATETIME</span>            <span style="color: #808080;">NULL</span>
       , durationSeconds    <span style="color: #0000FF;">INT</span>                 <span style="color: #808080;">NULL</span>
       , sqlStatement       <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">4000</span><span style="color: #808080;">)</span>       <span style="color: #808080;">NULL</span>
       , errorMessage       <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">1000</span><span style="color: #808080;">)</span>       <span style="color: #808080;">NULL</span> 

        <span style="color: #0000FF;">CONSTRAINT</span> PK_indexDefragLog_v40 
            <span style="color: #0000FF;">PRIMARY</span> <span style="color: #0000FF;">KEY</span> <span style="color: #0000FF;">CLUSTERED</span> <span style="color: #808080;">(</span>indexDefrag_id<span style="color: #808080;">)</span>
    <span style="color: #808080;">)</span>;

    <span style="color: #0000FF;">PRINT</span> <span style="color: #FF0000;">'dba_indexDefragLog Table Created'</span>;

<span style="color: #0000FF;">END</span>

<span style="color: #0000FF;">IF</span> <span style="color: #808080;">NOT</span> <span style="color: #808080;">EXISTS</span> <span style="color: #808080;">(</span> <span style="color: #0000FF;">SELECT</span>  <span style="color: #808080;">[</span><span style="color: #FF00FF;">object_id</span><span style="color: #808080;">]</span>
                <span style="color: #0000FF;">FROM</span>    sys.<span style="color: #202020;">indexes</span>
                <span style="color: #0000FF;">WHERE</span>   name <span style="color: #808080;">=</span> <span style="color: #FF0000;">'PK_indexDefragExclusion_v40'</span> <span style="color: #808080;">)</span>
<span style="color: #0000FF;">BEGIN</span>

    <span style="color: #0000FF;">CREATE</span> <span style="color: #0000FF;">TABLE</span> dbo.<span style="color: #202020;">dba_indexDefragExclusion</span>
    <span style="color: #808080;">(</span>
         databaseID         <span style="color: #0000FF;">INT</span>             <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
       , databaseName       <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">128</span><span style="color: #808080;">)</span>   <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
       , objectID           <span style="color: #0000FF;">INT</span>             <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
       , objectName         <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">128</span><span style="color: #808080;">)</span>   <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
       , indexID            <span style="color: #0000FF;">INT</span>             <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
       , indexName          <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">128</span><span style="color: #808080;">)</span>   <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
       , exclusionMask      <span style="color: #0000FF;">INT</span>             <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
            <span style="color: #008080;">/* 1=Sunday, 2=Monday, 4=Tuesday, 8=Wednesday, 16=Thursday, 32=Friday, 64=Saturday */</span>

         <span style="color: #0000FF;">CONSTRAINT</span> PK_indexDefragExclusion_v40 
            <span style="color: #0000FF;">PRIMARY</span> <span style="color: #0000FF;">KEY</span> <span style="color: #0000FF;">CLUSTERED</span> <span style="color: #808080;">(</span>databaseID, objectID, indexID<span style="color: #808080;">)</span>
    <span style="color: #808080;">)</span>;

    <span style="color: #0000FF;">PRINT</span> <span style="color: #FF0000;">'dba_indexDefragExclusion Table Created'</span>;

<span style="color: #0000FF;">END</span>

<span style="color: #0000FF;">IF</span> <span style="color: #808080;">NOT</span> <span style="color: #808080;">EXISTS</span> <span style="color: #808080;">(</span> <span style="color: #0000FF;">SELECT</span>  <span style="color: #808080;">[</span><span style="color: #FF00FF;">object_id</span><span style="color: #808080;">]</span>
                <span style="color: #0000FF;">FROM</span>    sys.<span style="color: #202020;">indexes</span>
                <span style="color: #0000FF;">WHERE</span>   name <span style="color: #808080;">=</span> <span style="color: #FF0000;">'PK_indexDefragStatus_v40'</span> <span style="color: #808080;">)</span>
<span style="color: #0000FF;">BEGIN</span>

    <span style="color: #0000FF;">CREATE</span> <span style="color: #0000FF;">TABLE</span> dbo.<span style="color: #202020;">dba_indexDefragStatus</span>
    <span style="color: #808080;">(</span>
         databaseID         <span style="color: #0000FF;">INT</span>             <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
       , databaseName       <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">128</span><span style="color: #808080;">)</span>   <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
       , objectID           <span style="color: #0000FF;">INT</span>             <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
       , indexID            <span style="color: #0000FF;">INT</span>             <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
       , partitionNumber    <span style="color: #0000FF;">SMALLINT</span>        <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
       , fragmentation      <span style="color: #0000FF;">FLOAT</span>           <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
       , page_count         <span style="color: #0000FF;">INT</span>             <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
       , range_scan_count   <span style="color: #0000FF;">BIGINT</span>          <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
       , schemaName         <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">128</span><span style="color: #808080;">)</span>   <span style="color: #808080;">NULL</span>
       , objectName         <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">128</span><span style="color: #808080;">)</span>   <span style="color: #808080;">NULL</span>
       , indexName          <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">128</span><span style="color: #808080;">)</span>   <span style="color: #808080;">NULL</span>
       , scanDate           <span style="color: #0000FF;">DATETIME</span>        <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
       , defragDate         <span style="color: #0000FF;">DATETIME</span>        <span style="color: #808080;">NULL</span>
       , printStatus        <span style="color: #0000FF;">BIT</span> <span style="color: #0000FF;">DEFAULT</span> <span style="color: #808080;">(</span><span style="color: #000;">0</span><span style="color: #808080;">)</span> <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>
       , exclusionMask      <span style="color: #0000FF;">INT</span> <span style="color: #0000FF;">DEFAULT</span> <span style="color: #808080;">(</span><span style="color: #000;">0</span><span style="color: #808080;">)</span> <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span>

        <span style="color: #0000FF;">CONSTRAINT</span> PK_indexDefragStatus_v40 
            <span style="color: #0000FF;">PRIMARY</span> <span style="color: #0000FF;">KEY</span> <span style="color: #0000FF;">CLUSTERED</span> <span style="color: #808080;">(</span>databaseID, objectID, indexID, partitionNumber<span style="color: #808080;">)</span>
    <span style="color: #808080;">)</span>;

    <span style="color: #0000FF;">PRINT</span> <span style="color: #FF0000;">'dba_indexDefragStatus Table Created'</span>;

<span style="color: #0000FF;">END</span>;

<span style="color: #0000FF;">IF</span> <span style="color: #FF00FF;">OBJECTPROPERTY</span><span style="color: #808080;">(</span><span style="color: #FF00FF;">OBJECT_ID</span><span style="color: #808080;">(</span><span style="color: #FF0000;">'dbo.dba_indexDefrag_sp'</span><span style="color: #808080;">)</span>, N<span style="color: #FF0000;">'IsProcedure'</span><span style="color: #808080;">)</span> <span style="color: #808080;">=</span> <span style="color: #000;">1</span> 
    <span style="color: #0000FF;">BEGIN</span>
        <span style="color: #0000FF;">DROP</span> <span style="color: #0000FF;">PROCEDURE</span> dbo.<span style="color: #202020;">dba_indexDefrag_sp</span>;
        <span style="color: #0000FF;">PRINT</span> <span style="color: #FF0000;">'Procedure dba_indexDefrag_sp dropped'</span>;
    <span style="color: #0000FF;">END</span>;
Go

<span style="color: #0000FF;">CREATE</span> <span style="color: #0000FF;">PROCEDURE</span> dbo.<span style="color: #202020;">dba_indexDefrag_sp</span>

    <span style="color: #008080;">/* Declare Parameters */</span>
    @minFragmentation       <span style="color: #0000FF;">FLOAT</span>               <span style="color: #808080;">=</span> <span style="color: #000;">10.0</span>  
        <span style="color: #008080;">/* in percent, will not defrag if fragmentation less than specified */</span>
  , @rebuildThreshold       <span style="color: #0000FF;">FLOAT</span>               <span style="color: #808080;">=</span> <span style="color: #000;">30.0</span>  
        <span style="color: #008080;">/* in percent, greater than @rebuildThreshold will result in rebuild instead of reorg */</span>
  , @executeSQL             <span style="color: #0000FF;">BIT</span>                 <span style="color: #808080;">=</span> <span style="color: #000;">1</span>     
        <span style="color: #008080;">/* 1 = execute; 0 = print command only */</span>
  , @defragOrderColumn      <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">20</span><span style="color: #808080;">)</span>        <span style="color: #808080;">=</span> <span style="color: #FF0000;">'range_scan_count'</span>
        <span style="color: #008080;">/* Valid options are: range_scan_count, fragmentation, page_count */</span>
  , @defragSortOrder        <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">4</span><span style="color: #808080;">)</span>         <span style="color: #808080;">=</span> <span style="color: #FF0000;">'DESC'</span>
        <span style="color: #008080;">/* Valid options are: ASC, DESC */</span>
  , @timeLimit              <span style="color: #0000FF;">INT</span>                 <span style="color: #808080;">=</span> <span style="color: #000;">720</span> <span style="color: #008080;">/* defaulted to 12 hours */</span>
        <span style="color: #008080;">/* Optional time limitation; expressed in minutes */</span>
  , @<span style="color: #0000FF;">database</span>               <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">128</span><span style="color: #808080;">)</span>        <span style="color: #808080;">=</span> <span style="color: #808080;">NULL</span>
        <span style="color: #008080;">/* Option to specify one or more database names, separated by commas; NULL will return all */</span>
  , @tableName              <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">4000</span><span style="color: #808080;">)</span>       <span style="color: #808080;">=</span> <span style="color: #808080;">NULL</span>  <span style="color: #008080;">-- databaseName.schema.tableName</span>
        <span style="color: #008080;">/* Option to specify a table name; null will return all */</span>
  , @forceRescan            <span style="color: #0000FF;">BIT</span>                 <span style="color: #808080;">=</span> <span style="color: #000;">0</span>
        <span style="color: #008080;">/* Whether or not to force a rescan of indexes; 1 = force, 0 = use existing scan, if available */</span>
  , @scanMode               <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">10</span><span style="color: #808080;">)</span>         <span style="color: #808080;">=</span> N<span style="color: #FF0000;">'LIMITED'</span>
        <span style="color: #008080;">/* Options are LIMITED, SAMPLED, and DETAILED */</span>
  , @minPageCount           <span style="color: #0000FF;">INT</span>                 <span style="color: #808080;">=</span> <span style="color: #000;">8</span> 
        <span style="color: #008080;">/*  MS recommends > 1 extent (8 pages) */</span>
  , @maxPageCount           <span style="color: #0000FF;">INT</span>                 <span style="color: #808080;">=</span> <span style="color: #808080;">NULL</span>
        <span style="color: #008080;">/* NULL = no limit */</span>
  , @excludeMaxPartition    <span style="color: #0000FF;">BIT</span>                 <span style="color: #808080;">=</span> <span style="color: #000;">0</span>
        <span style="color: #008080;">/* 1 = exclude right-most populated partition; 0 = do not exclude; see notes for caveats */</span>
  , @onlineRebuild          <span style="color: #0000FF;">BIT</span>                 <span style="color: #808080;">=</span> <span style="color: #000;">1</span>     
        <span style="color: #008080;">/* 1 = online rebuild; 0 = offline rebuild; only in Enterprise */</span>
  , @sortInTempDB           <span style="color: #0000FF;">BIT</span>                 <span style="color: #808080;">=</span> <span style="color: #000;">1</span>
        <span style="color: #008080;">/* 1 = perform sort operation in TempDB; 0 = perform sort operation in the index's database */</span>
  , @maxDopRestriction      <span style="color: #0000FF;">TINYINT</span>             <span style="color: #808080;">=</span> <span style="color: #808080;">NULL</span>
        <span style="color: #008080;">/* Option to restrict the number of processors for the operation; only in Enterprise */</span>
  , @printCommands          <span style="color: #0000FF;">BIT</span>                 <span style="color: #808080;">=</span> <span style="color: #000;">0</span>     
        <span style="color: #008080;">/* 1 = print commands; 0 = do not print commands */</span>
  , @printFragmentation     <span style="color: #0000FF;">BIT</span>                 <span style="color: #808080;">=</span> <span style="color: #000;">0</span>
        <span style="color: #008080;">/* 1 = print fragmentation prior to defrag; 
           0 = do not print */</span>
  , @defragDelay            <span style="color: #0000FF;">CHAR</span><span style="color: #808080;">(</span><span style="color: #000;">8</span><span style="color: #808080;">)</span>             <span style="color: #808080;">=</span> <span style="color: #FF0000;">'00:00:05'</span>
        <span style="color: #008080;">/* time to wait between defrag commands */</span>
  , @debugMode              <span style="color: #0000FF;">BIT</span>                 <span style="color: #808080;">=</span> <span style="color: #000;">0</span>
        <span style="color: #008080;">/* display some useful comments to help determine if/WHERE issues occur */</span>
<span style="color: #0000FF;">AS</span> <span style="color: #008080;">/*********************************************************************************
    Name:       dba_indexDefrag_sp

    Author:     Michelle Ufford, http://sqlfool.com

    Purpose:    Defrags one or more indexes for one or more databases

    Notes:

    CAUTION: TRANSACTION LOG SIZE SHOULD BE MONITORED CLOSELY WHEN DEFRAGMENTING.
             DO NOT RUN UNATTENDED ON LARGE DATABASES DURING BUSINESS HOURS.

      @minFragmentation     defaulted to 10%, will not defrag if fragmentation 
                            is less than that

      @rebuildThreshold     defaulted to 30% AS recommended by Microsoft in BOL;
                            greater than 30% will result in rebuild instead

      @executeSQL           1 = execute the SQL generated by this proc; 
                            0 = print command only

      @defragOrderColumn    Defines how to prioritize the order of defrags.  Only
                            used if @executeSQL = 1\.  
                            Valid options are: 
                            range_scan_count = count of range and table scans on the
                                               index; in general, this is what benefits 
                                               the most FROM defragmentation
                            fragmentation    = amount of fragmentation in the index;
                                               the higher the number, the worse it is
                            page_count       = number of pages in the index; affects
                                               how long it takes to defrag an index

      @defragSortOrder      The sort order of the ORDER BY clause.
                            Valid options are ASC (ascending) or DESC (descending).

      @timeLimit            Optional, limits how much time can be spent performing 
                            index defrags; expressed in minutes.

                            NOTE: The time limit is checked BEFORE an index defrag
                                  is begun, thus a long index defrag can exceed the
                                  time limitation.

      @database             Optional, specify specific database name to defrag;
                            If not specified, all non-system databases will
                            be defragged.

      @tableName            Specify if you only want to defrag indexes for a 
                            specific table, format = databaseName.schema.tableName;
                            if not specified, all tables will be defragged.

      @forceRescan          Whether or not to force a rescan of indexes.  If set
                            to 0, a rescan will not occur until all indexes have
                            been defragged.  This can span multiple executions.
                            1 = force a rescan
                            0 = use previous scan, if there are indexes left to defrag

      @scanMode             Specifies which scan mode to use to determine
                            fragmentation levels.  Options are:
                            LIMITED - scans the parent level; quickest mode,
                                      recommended for most cases.
                            SAMPLED - samples 1% of all data pages; if less than
                                      10k pages, performs a DETAILED scan.
                            DETAILED - scans all data pages.  Use great care with
                                       this mode, AS it can cause performance issues.

      @minPageCount         Specifies how many pages must exist in an index in order 
                            to be considered for a defrag.  Defaulted to 8 pages, AS 
                            Microsoft recommends only defragging indexes with more 
                            than 1 extent (8 pages).  

                            NOTE: The @minPageCount will restrict the indexes that
                            are stored in dba_indexDefragStatus table.

      @maxPageCount         Specifies the maximum number of pages that can exist in 
                            an index and still be considered for a defrag.  Useful
                            for scheduling small indexes during business hours and
                            large indexes for non-business hours.

                            NOTE: The @maxPageCount will restrict the indexes that
                            are defragged during the current operation; it will not
                            prevent indexes FROM being stored in the 
                            dba_indexDefragStatus table.  This way, a single scan
                            can support multiple page count thresholds.

      @excludeMaxPartition  If an index is partitioned, this option specifies whether
                            to exclude the right-most populated partition.  Typically,
                            this is the partition that is currently being written to in
                            a sliding-window scenario.  Enabling this feature may reduce
                            contention.  This may not be applicable in other types of 
                            partitioning scenarios.  Non-partitioned indexes are 
                            unaffected by this option.
                            1 = exclude right-most populated partition
                            0 = do not exclude

      @onlineRebuild        1 = online rebuild; 
                            0 = offline rebuild

      @sortInTempDB         Specifies whether to defrag the index in TEMPDB or in the
                            database the index belongs to.  Enabling this option may
                            result in faster defrags and prevent database file size 
                            inflation.
                            1 = perform sort operation in TempDB
                            0 = perform sort operation in the index's database 

      @maxDopRestriction    Option to specify a processor limit for index rebuilds

      @printCommands        1 = print commands to screen; 
                            0 = do not print commands

      @printFragmentation   1 = print fragmentation to screen;
                            0 = do not print fragmentation

      @defragDelay          Time to wait between defrag commands; gives the
                            server a little time to catch up 

      @debugMode            1 = display debug comments; helps with troubleshooting
                            0 = do not display debug comments

    Called by:  SQL Agent Job or DBA

    ----------------------------------------------------------------------------
    DISCLAIMER: 
    This code and information are provided "AS IS" without warranty of any kind,
    either expressed or implied, including but not limited to the implied 
    warranties or merchantability and/or fitness for a particular purpose.
    ----------------------------------------------------------------------------
    LICENSE: 
    This index defrag script is free to download and use for personal, educational, 
    and internal corporate purposes, provided that this header is preserved. 
    Redistribution or sale of this index defrag script, in whole or in part, is 
    prohibited without the author's express written consent.
    ----------------------------------------------------------------------------
    Date        Initials	Version Description
    ----------------------------------------------------------------------------
    2007-12-18  MFU         1.0     Initial Release
    2008-10-17  MFU         1.1     Added @defragDelay, CIX_temp_indexDefragList
    2008-11-17  MFU         1.2     Added page_count to log table
                                    , added @printFragmentation option
    2009-03-17  MFU         2.0     Provided support for centralized execution
                                    , consolidated Enterprise & Standard versions
                                    , added @debugMode, @maxDopRestriction
                                    , modified LOB and partition logic  
    2009-06-18  MFU         3.0     Fixed bug in LOB logic, added @scanMode option
                                    , added support for stat rebuilds (@rebuildStats)
                                    , support model and msdb defrag
                                    , added columns to the dba_indexDefragLog table
                                    , modified logging to show "in progress" defrags
                                    , added defrag exclusion list (scheduling)
    2009-08-28  MFU         3.1     Fixed read_only bug for database lists
    2010-04-20  MFU         4.0     Added time limit option
                                    , added static table with rescan logic
                                    , added parameters for page count & SORT_IN_TEMPDB
                                    , added try/catch logic and additional debug options
                                    , added options for defrag prioritization
                                    , fixed bug for indexes with allow_page_lock = off
                                    , added option to exclude right-most partition
                                    , removed @rebuildStats option
                                    , refer to http://sqlfool.com for full release notes
    2011-04-28  MFU         4.1     Bug fixes for databases requiring []
                                    , cleaned up the create table section
                                    , updated syntax for case-sensitive databases
                                    , comma-delimited list for @database now supported
*********************************************************************************
    Example of how to call this script:

        EXECUTE dbo.dba_indexDefrag_sp
              @executeSQL           = 1
            , @printCommands        = 1
            , @debugMode            = 1
            , @printFragmentation   = 1
            , @forceRescan          = 1
            , @maxDopRestriction    = 1
            , @minPageCount         = 8
            , @maxPageCount         = NULL
            , @minFragmentation     = 1
            , @rebuildThreshold     = 30
            , @defragDelay          = '00:00:05'
            , @defragOrderColumn    = 'page_count'
            , @defragSortOrder      = 'DESC'
            , @excludeMaxPartition  = 1
            , @timeLimit            = NULL
            , @database             = 'sandbox,sandbox_caseSensitive';
*********************************************************************************/</span>																
<span style="color: #0000FF;">SET</span> <span style="color: #0000FF;">NOCOUNT</span> <span style="color: #0000FF;">ON</span>;
<span style="color: #0000FF;">SET</span> XACT_AB<span style="color: #808080;">OR</span>T <span style="color: #0000FF;">ON</span>;
<span style="color: #0000FF;">SET</span> QUOTED_IDENTIFIER <span style="color: #0000FF;">ON</span>;

<span style="color: #0000FF;">BEGIN</span>

    <span style="color: #0000FF;">BEGIN</span> TRY

        <span style="color: #008080;">/* Just a little validation... */</span>
        <span style="color: #0000FF;">IF</span> @minFragmentation <span style="color: #0000FF;">IS</span> <span style="color: #808080;">NULL</span> 
            <span style="color: #808080;">OR</span> @minFragmentation <span style="color: #808080;">NOT</span> <span style="color: #808080;">BETWEEN</span> <span style="color: #000;">0.00</span> <span style="color: #808080;">AND</span> <span style="color: #000;">100.0</span>
                <span style="color: #0000FF;">SET</span> @minFragmentation <span style="color: #808080;">=</span> <span style="color: #000;">10.0</span>;

        <span style="color: #0000FF;">IF</span> @rebuildThreshold <span style="color: #0000FF;">IS</span> <span style="color: #808080;">NULL</span>
            <span style="color: #808080;">OR</span> @rebuildThreshold <span style="color: #808080;">NOT</span> <span style="color: #808080;">BETWEEN</span> <span style="color: #000;">0.00</span> <span style="color: #808080;">AND</span> <span style="color: #000;">100.0</span>
                <span style="color: #0000FF;">SET</span> @rebuildThreshold <span style="color: #808080;">=</span> <span style="color: #000;">30.0</span>;

        <span style="color: #0000FF;">IF</span> @defragDelay <span style="color: #808080;">NOT</span> <span style="color: #808080;">LIKE</span> <span style="color: #FF0000;">'00:[0-5][0-9]:[0-5][0-9]'</span>
            <span style="color: #0000FF;">SET</span> @defragDelay <span style="color: #808080;">=</span> <span style="color: #FF0000;">'00:00:05'</span>;

        <span style="color: #0000FF;">IF</span> @defragOrderColumn <span style="color: #0000FF;">IS</span> <span style="color: #808080;">NULL</span>
            <span style="color: #808080;">OR</span> @defragOrderColumn <span style="color: #808080;">NOT</span> <span style="color: #808080;">IN</span> <span style="color: #808080;">(</span><span style="color: #FF0000;">'range_scan_count'</span>, <span style="color: #FF0000;">'fragmentation'</span>, <span style="color: #FF0000;">'page_count'</span><span style="color: #808080;">)</span>
                <span style="color: #0000FF;">SET</span> @defragOrderColumn <span style="color: #808080;">=</span> <span style="color: #FF0000;">'range_scan_count'</span>;

        <span style="color: #0000FF;">IF</span> @defragSortOrder <span style="color: #0000FF;">IS</span> <span style="color: #808080;">NULL</span>
            <span style="color: #808080;">OR</span> @defragSortOrder <span style="color: #808080;">NOT</span> <span style="color: #808080;">IN</span> <span style="color: #808080;">(</span><span style="color: #FF0000;">'ASC'</span>, <span style="color: #FF0000;">'DESC'</span><span style="color: #808080;">)</span>
                <span style="color: #0000FF;">SET</span> @defragSortOrder <span style="color: #808080;">=</span> <span style="color: #FF0000;">'DESC'</span>;

        <span style="color: #0000FF;">IF</span> @scanMode <span style="color: #808080;">NOT</span> <span style="color: #808080;">IN</span> <span style="color: #808080;">(</span><span style="color: #FF0000;">'LIMITED'</span>, <span style="color: #FF0000;">'SAMPLED'</span>, <span style="color: #FF0000;">'DETAILED'</span><span style="color: #808080;">)</span>
            <span style="color: #0000FF;">SET</span> @scanMode <span style="color: #808080;">=</span> <span style="color: #FF0000;">'LIMITED'</span>;

        <span style="color: #0000FF;">IF</span> @debugMode <span style="color: #0000FF;">IS</span> <span style="color: #808080;">NULL</span>
            <span style="color: #0000FF;">SET</span> @debugMode <span style="color: #808080;">=</span> <span style="color: #000;">0</span>;

        <span style="color: #0000FF;">IF</span> @forceRescan <span style="color: #0000FF;">IS</span> <span style="color: #808080;">NULL</span>
            <span style="color: #0000FF;">SET</span> @forceRescan <span style="color: #808080;">=</span> <span style="color: #000;">0</span>;

        <span style="color: #0000FF;">IF</span> @sortInTempDB <span style="color: #0000FF;">IS</span> <span style="color: #808080;">NULL</span>
            <span style="color: #0000FF;">SET</span> @sortInTempDB <span style="color: #808080;">=</span> <span style="color: #000;">1</span>;

        <span style="color: #0000FF;">IF</span> @debugMode <span style="color: #808080;">=</span> <span style="color: #000;">1</span> <span style="color: #0000FF;">RAISERROR</span><span style="color: #808080;">(</span><span style="color: #FF0000;">'Undusting the cogs AND starting up...'</span>, <span style="color: #000;">0</span>, <span style="color: #000;">42</span><span style="color: #808080;">)</span> <span style="color: #0000FF;">WITH</span> NOWAIT;

        <span style="color: #008080;">/* Declare our variables */</span>
        <span style="color: #0000FF;">DECLARE</span>   @objectID                 <span style="color: #0000FF;">INT</span>
                , @databaseID               <span style="color: #0000FF;">INT</span>
                , @databaseName             <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">128</span><span style="color: #808080;">)</span>
                , @indexID                  <span style="color: #0000FF;">INT</span>
                , @partitionCount           <span style="color: #0000FF;">BIGINT</span>
                , @schemaName               <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">128</span><span style="color: #808080;">)</span>
                , @objectName               <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">128</span><span style="color: #808080;">)</span>
                , @indexName                <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">128</span><span style="color: #808080;">)</span>
                , @partitionNumber          <span style="color: #0000FF;">SMALLINT</span>
                , @fragmentation            <span style="color: #0000FF;">FLOAT</span>
                , @pageCount                <span style="color: #0000FF;">INT</span>
                , @sqlCommand               <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">4000</span><span style="color: #808080;">)</span>
                , @rebuildCommand           <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">200</span><span style="color: #808080;">)</span>
                , @datetimestart            <span style="color: #0000FF;">DATETIME</span>
                , @dateTimeEnd              <span style="color: #0000FF;">DATETIME</span>
                , @containsLOB              <span style="color: #0000FF;">BIT</span>
                , @editionCheck             <span style="color: #0000FF;">BIT</span>
                , @debugMessage             <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">4000</span><span style="color: #808080;">)</span>
                , @updateSQL                <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">4000</span><span style="color: #808080;">)</span>
                , @partitionSQL             <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">4000</span><span style="color: #808080;">)</span>
                , @partitionSQL_Param       <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">1000</span><span style="color: #808080;">)</span>
                , @LOB_SQL                  <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">4000</span><span style="color: #808080;">)</span>
                , @LOB_SQL_Param            <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">1000</span><span style="color: #808080;">)</span>
                , @indexDefrag_id           <span style="color: #0000FF;">INT</span>
                , @startdatetime            <span style="color: #0000FF;">DATETIME</span>
                , @enddatetime              <span style="color: #0000FF;">DATETIME</span>
                , @getIndexSQL              <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">4000</span><span style="color: #808080;">)</span>
                , @getIndexSQL_Param        <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">4000</span><span style="color: #808080;">)</span>
                , @allowPageLockSQL         <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">4000</span><span style="color: #808080;">)</span>
                , @allowPageLockSQL_Param   <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">4000</span><span style="color: #808080;">)</span>
                , @allowPageLocks           <span style="color: #0000FF;">INT</span>
                , @excludeMaxPartitionSQL   <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">4000</span><span style="color: #808080;">)</span>;

        <span style="color: #008080;">/* Initialize our variables */</span>
        <span style="color: #0000FF;">SELECT</span> @startdatetime <span style="color: #808080;">=</span> <span style="color: #FF00FF;">GETDATE</span><span style="color: #808080;">()</span>
            , @enddatetime <span style="color: #808080;">=</span> <span style="color: #FF00FF;">DATEADD</span><span style="color: #808080;">(</span><span style="color: #0000FF;">minute</span>, @timeLimit, <span style="color: #FF00FF;">GETDATE</span><span style="color: #808080;">())</span>;

        <span style="color: #008080;">/* Create our temporary tables */</span>
        <span style="color: #0000FF;">CREATE</span> <span style="color: #0000FF;">TABLE</span> #databaseList
        <span style="color: #808080;">(</span>
              databaseID        <span style="color: #0000FF;">INT</span>
            , databaseName      <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">128</span><span style="color: #808080;">)</span>
            , scanStatus        <span style="color: #0000FF;">BIT</span>
        <span style="color: #808080;">)</span>;

        <span style="color: #0000FF;">CREATE</span> <span style="color: #0000FF;">TABLE</span> #processor 
        <span style="color: #808080;">(</span>
              <span style="color: #808080;">[</span><span style="color: #0000FF;">index</span><span style="color: #808080;">]</span>           <span style="color: #0000FF;">INT</span>
            , Name              <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">128</span><span style="color: #808080;">)</span>
            , Internal_Value    <span style="color: #0000FF;">INT</span>
            , Character_Value   <span style="color: #0000FF;">INT</span>
        <span style="color: #808080;">)</span>;

        <span style="color: #0000FF;">CREATE</span> <span style="color: #0000FF;">TABLE</span> #maxPartitionList
        <span style="color: #808080;">(</span>
              databaseID        <span style="color: #0000FF;">INT</span>
            , objectID          <span style="color: #0000FF;">INT</span>
            , indexID           <span style="color: #0000FF;">INT</span>
            , maxPartition      <span style="color: #0000FF;">INT</span>
        <span style="color: #808080;">)</span>;

        <span style="color: #0000FF;">IF</span> @debugMode <span style="color: #808080;">=</span> <span style="color: #000;">1</span> <span style="color: #0000FF;">RAISERROR</span><span style="color: #808080;">(</span><span style="color: #FF0000;">'Beginning validation...'</span>, <span style="color: #000;">0</span>, <span style="color: #000;">42</span><span style="color: #808080;">)</span> <span style="color: #0000FF;">WITH</span> NOWAIT;

        <span style="color: #008080;">/* Make sure we're not exceeding the number of processors we have available */</span>
        <span style="color: #0000FF;">INSERT</span> <span style="color: #0000FF;">INTO</span> #processor
        <span style="color: #0000FF;">EXECUTE</span> <span style="color: #AF0000;">xp_msver</span> <span style="color: #FF0000;">'ProcessorCount'</span>;

        <span style="color: #0000FF;">IF</span> @maxDopRestriction <span style="color: #0000FF;">IS</span> <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span> <span style="color: #808080;">AND</span> @maxDopRestriction <span style="color: #808080;">></span> <span style="color: #808080;">(</span><span style="color: #0000FF;">SELECT</span> Internal_Value <span style="color: #0000FF;">FROM</span> #processor<span style="color: #808080;">)</span>
            <span style="color: #0000FF;">SELECT</span> @maxDopRestriction <span style="color: #808080;">=</span> Internal_Value
            <span style="color: #0000FF;">FROM</span> #processor;

        <span style="color: #008080;">/* Check our server version; 1804890536 = Enterprise, 610778273 = Enterprise Evaluation, -2117995310 = Developer */</span>
        <span style="color: #0000FF;">IF</span> <span style="color: #808080;">(</span><span style="color: #0000FF;">SELECT</span> <span style="color: #FF00FF;">ServerProperty</span><span style="color: #808080;">(</span><span style="color: #FF0000;">'EditionID'</span><span style="color: #808080;">))</span> <span style="color: #808080;">IN</span> <span style="color: #808080;">(</span><span style="color: #000;">1804890536</span>, <span style="color: #000;">610778273</span>, <span style="color: #808080;">-</span><span style="color: #000;">2117995310</span><span style="color: #808080;">)</span> 
            <span style="color: #0000FF;">SET</span> @editionCheck <span style="color: #808080;">=</span> <span style="color: #000;">1</span> <span style="color: #008080;">-- supports online rebuilds</span>
        <span style="color: #0000FF;">ELSE</span>
            <span style="color: #0000FF;">SET</span> @editionCheck <span style="color: #808080;">=</span> <span style="color: #000;">0</span>; <span style="color: #008080;">-- does not support online rebuilds</span>

        <span style="color: #008080;">/* Output the parameters we're working with */</span>
        <span style="color: #0000FF;">IF</span> @debugMode <span style="color: #808080;">=</span> <span style="color: #000;">1</span> 
        <span style="color: #0000FF;">BEGIN</span>

            <span style="color: #0000FF;">SELECT</span> @debugMessage <span style="color: #808080;">=</span> <span style="color: #FF0000;">'Your SELECTed parameters are... 
            Defrag indexes WITH fragmentation greater than '</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CAST</span><span style="color: #808080;">(</span>@minFragmentation <span style="color: #0000FF;">AS</span> <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">10</span><span style="color: #808080;">))</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">';
            REBUILD indexes WITH fragmentation greater than '</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CAST</span><span style="color: #808080;">(</span>@rebuildThreshold <span style="color: #0000FF;">AS</span> <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">10</span><span style="color: #808080;">))</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">';
            You'</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CASE</span> <span style="color: #0000FF;">WHEN</span> @executeSQL <span style="color: #808080;">=</span> <span style="color: #000;">1</span> <span style="color: #0000FF;">THEN</span> <span style="color: #FF0000;">' DO'</span> <span style="color: #0000FF;">ELSE</span> <span style="color: #FF0000;">' DO NOT'</span> <span style="color: #0000FF;">END</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">' want the commands to be executed automatically; 
            You want to defrag indexes in '</span> <span style="color: #808080;">+</span> @defragSortOrder <span style="color: #808080;">+</span> <span style="color: #FF0000;">' order of the '</span> <span style="color: #808080;">+</span> <span style="color: #FF00FF;">UPPER</span><span style="color: #808080;">(</span>@defragOrderColumn<span style="color: #808080;">)</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">' value;
            You have'</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CASE</span> <span style="color: #0000FF;">WHEN</span> @timeLimit <span style="color: #0000FF;">IS</span> <span style="color: #808080;">NULL</span> <span style="color: #0000FF;">THEN</span> <span style="color: #FF0000;">' NOT specified a time limit;'</span> <span style="color: #0000FF;">ELSE</span> <span style="color: #FF0000;">' specified a time limit of '</span> 
                <span style="color: #808080;">+</span> <span style="color: #0000FF;">CAST</span><span style="color: #808080;">(</span>@timeLimit <span style="color: #0000FF;">AS</span> <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">10</span><span style="color: #808080;">))</span> <span style="color: #0000FF;">END</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">' minutes;
            '</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CASE</span> <span style="color: #0000FF;">WHEN</span> @<span style="color: #0000FF;">database</span> <span style="color: #0000FF;">IS</span> <span style="color: #808080;">NULL</span> <span style="color: #0000FF;">THEN</span> <span style="color: #FF0000;">'ALL databases'</span> <span style="color: #0000FF;">ELSE</span> <span style="color: #FF0000;">'The '</span> <span style="color: #808080;">+</span> @<span style="color: #0000FF;">database</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">' database(s)'</span> <span style="color: #0000FF;">END</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">' will be defragged;
            '</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CASE</span> <span style="color: #0000FF;">WHEN</span> @tableName <span style="color: #0000FF;">IS</span> <span style="color: #808080;">NULL</span> <span style="color: #0000FF;">THEN</span> <span style="color: #FF0000;">'ALL tables'</span> <span style="color: #0000FF;">ELSE</span> <span style="color: #FF0000;">'The '</span> <span style="color: #808080;">+</span> @tableName <span style="color: #808080;">+</span> <span style="color: #FF0000;">' TABLE'</span> <span style="color: #0000FF;">END</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">' will be defragged;
            We'</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CASE</span> <span style="color: #0000FF;">WHEN</span> <span style="color: #808080;">EXISTS(</span><span style="color: #0000FF;">SELECT</span> <span style="color: #0000FF;">Top</span> <span style="color: #000;">1</span> <span style="color: #808080;">*</span> <span style="color: #0000FF;">FROM</span> dbo.<span style="color: #202020;">dba_indexDefragStatus</span> <span style="color: #0000FF;">WHERE</span> defragDate <span style="color: #0000FF;">IS</span> <span style="color: #808080;">NULL)</span>
                <span style="color: #808080;">AND</span> @forceRescan <span style="color: #808080;"><></span> <span style="color: #000;">1</span> <span style="color: #0000FF;">THEN</span> <span style="color: #FF0000;">' WILL NOT'</span> <span style="color: #0000FF;">ELSE</span> <span style="color: #FF0000;">' WILL'</span> <span style="color: #0000FF;">END</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">' be rescanning indexes;
            The scan will be performed in '</span> <span style="color: #808080;">+</span> @scanMode <span style="color: #808080;">+</span> <span style="color: #FF0000;">' mode;
            You want to limit defrags to indexes with'</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CASE</span> <span style="color: #0000FF;">WHEN</span> @maxPageCount <span style="color: #0000FF;">IS</span> <span style="color: #808080;">NULL</span> <span style="color: #0000FF;">THEN</span> <span style="color: #FF0000;">' more than '</span> 
                <span style="color: #808080;">+</span> <span style="color: #0000FF;">CAST</span><span style="color: #808080;">(</span>@minPageCount <span style="color: #0000FF;">AS</span> <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">10</span><span style="color: #808080;">))</span> <span style="color: #0000FF;">ELSE</span>
                <span style="color: #FF0000;">' BETWEEN '</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CAST</span><span style="color: #808080;">(</span>@minPageCount <span style="color: #0000FF;">AS</span> <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">10</span><span style="color: #808080;">))</span>
                <span style="color: #808080;">+</span> <span style="color: #FF0000;">' AND '</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CAST</span><span style="color: #808080;">(</span>@maxPageCount <span style="color: #0000FF;">AS</span> <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">10</span><span style="color: #808080;">))</span> <span style="color: #0000FF;">END</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">' pages;
            Indexes will be defragged'</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CASE</span> <span style="color: #0000FF;">WHEN</span> @editionCheck <span style="color: #808080;">=</span> <span style="color: #000;">0</span> <span style="color: #808080;">OR</span> @onlineRebuild <span style="color: #808080;">=</span> <span style="color: #000;">0</span> <span style="color: #0000FF;">THEN</span> <span style="color: #FF0000;">' OFFLINE;'</span> <span style="color: #0000FF;">ELSE</span> <span style="color: #FF0000;">' ONLINE;'</span> <span style="color: #0000FF;">END</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">'
            Indexes will be sorted in'</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CASE</span> <span style="color: #0000FF;">WHEN</span> @sortInTempDB <span style="color: #808080;">=</span> <span style="color: #000;">0</span> <span style="color: #0000FF;">THEN</span> <span style="color: #FF0000;">' the DATABASE'</span> <span style="color: #0000FF;">ELSE</span> <span style="color: #FF0000;">' TEMPDB;'</span> <span style="color: #0000FF;">END</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">'
            Defrag operations will utilize '</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CASE</span> <span style="color: #0000FF;">WHEN</span> @editionCheck <span style="color: #808080;">=</span> <span style="color: #000;">0</span> <span style="color: #808080;">OR</span> @maxDopRestriction <span style="color: #0000FF;">IS</span> <span style="color: #808080;">NULL</span> 
                <span style="color: #0000FF;">THEN</span> <span style="color: #FF0000;">'system defaults for processors;'</span> 
                <span style="color: #0000FF;">ELSE</span> <span style="color: #0000FF;">CAST</span><span style="color: #808080;">(</span>@maxDopRestriction <span style="color: #0000FF;">AS</span> <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">2</span><span style="color: #808080;">))</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">' processors;'</span> <span style="color: #0000FF;">END</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">'
            You'</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CASE</span> <span style="color: #0000FF;">WHEN</span> @printCommands <span style="color: #808080;">=</span> <span style="color: #000;">1</span> <span style="color: #0000FF;">THEN</span> <span style="color: #FF0000;">' DO'</span> <span style="color: #0000FF;">ELSE</span> <span style="color: #FF0000;">' DO NOT'</span> <span style="color: #0000FF;">END</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">' want to PRINT the ALTER INDEX commands; 
            You'</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CASE</span> <span style="color: #0000FF;">WHEN</span> @printFragmentation <span style="color: #808080;">=</span> <span style="color: #000;">1</span> <span style="color: #0000FF;">THEN</span> <span style="color: #FF0000;">' DO'</span> <span style="color: #0000FF;">ELSE</span> <span style="color: #FF0000;">' DO NOT'</span> <span style="color: #0000FF;">END</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">' want to OUTPUT fragmentation levels; 
            You want to wait '</span> <span style="color: #808080;">+</span> @defragDelay <span style="color: #808080;">+</span> <span style="color: #FF0000;">' (hh:mm:ss) BETWEEN defragging indexes;
            You want to run in'</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CASE</span> <span style="color: #0000FF;">WHEN</span> @debugMode <span style="color: #808080;">=</span> <span style="color: #000;">1</span> <span style="color: #0000FF;">THEN</span> <span style="color: #FF0000;">' DEBUG'</span> <span style="color: #0000FF;">ELSE</span> <span style="color: #FF0000;">' SILENT'</span> <span style="color: #0000FF;">END</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">' mode.'</span>;

            <span style="color: #0000FF;">RAISERROR</span><span style="color: #808080;">(</span>@debugMessage, <span style="color: #000;">0</span>, <span style="color: #000;">42</span><span style="color: #808080;">)</span> <span style="color: #0000FF;">WITH</span> NOWAIT;

        <span style="color: #0000FF;">END</span>;

        <span style="color: #0000FF;">IF</span> @debugMode <span style="color: #808080;">=</span> <span style="color: #000;">1</span> <span style="color: #0000FF;">RAISERROR</span><span style="color: #808080;">(</span><span style="color: #FF0000;">'Grabbing a list of our databases...'</span>, <span style="color: #000;">0</span>, <span style="color: #000;">42</span><span style="color: #808080;">)</span> <span style="color: #0000FF;">WITH</span> NOWAIT;

        <span style="color: #008080;">/* Retrieve the list of databases to investigate */</span>
        <span style="color: #008080;">/* If @database is NULL, it means we want to defrag *all* databases */</span>
        <span style="color: #0000FF;">IF</span> @<span style="color: #0000FF;">database</span> <span style="color: #0000FF;">IS</span> <span style="color: #808080;">NULL</span>
        <span style="color: #0000FF;">BEGIN</span>

            <span style="color: #0000FF;">INSERT</span> <span style="color: #0000FF;">INTO</span> #databaseList
            <span style="color: #0000FF;">SELECT</span> database_id
                , name
                , <span style="color: #000;">0</span> <span style="color: #008080;">-- not scanned yet for fragmentation</span>
            <span style="color: #0000FF;">FROM</span> sys.<span style="color: #202020;">databases</span>
            <span style="color: #0000FF;">WHERE</span> <span style="color: #808080;">[</span>name<span style="color: #808080;">]</span> <span style="color: #808080;">NOT</span> <span style="color: #808080;">IN</span> <span style="color: #808080;">(</span><span style="color: #FF0000;">'master'</span>, <span style="color: #FF0000;">'tempdb'</span><span style="color: #808080;">)</span><span style="color: #008080;">-- exclude system databases</span>
                <span style="color: #808080;">AND</span> <span style="color: #808080;">[</span><span style="color: #0000FF;">state</span><span style="color: #808080;">]</span> <span style="color: #808080;">=</span> <span style="color: #000;">0</span> <span style="color: #008080;">-- state must be ONLINE</span>
                <span style="color: #808080;">AND</span> is_read_only <span style="color: #808080;">=</span> <span style="color: #000;">0</span>;  <span style="color: #008080;">-- cannot be read_only</span>

        <span style="color: #0000FF;">END</span>;
        <span style="color: #0000FF;">ELSE</span>
        <span style="color: #008080;">/* Otherwise, we're going to just defrag our list of databases */</span>
        <span style="color: #0000FF;">BEGIN</span>

            <span style="color: #0000FF;">INSERT</span> <span style="color: #0000FF;">INTO</span> #databaseList
            <span style="color: #0000FF;">SELECT</span> database_id
                , name
                , <span style="color: #000;">0</span> <span style="color: #008080;">-- not scanned yet for fragmentation</span>
            <span style="color: #0000FF;">FROM</span> sys.<span style="color: #202020;">databases</span> <span style="color: #0000FF;">AS</span> d
            <span style="color: #808080;">JOIN</span> dbo.<span style="color: #202020;">dba_parseString_udf</span><span style="color: #808080;">(</span>@<span style="color: #0000FF;">database</span>, <span style="color: #FF0000;">','</span><span style="color: #808080;">)</span> <span style="color: #0000FF;">AS</span> x
                <span style="color: #0000FF;">ON</span> d.<span style="color: #202020;">name</span> <span style="color: #808080;">=</span> x.<span style="color: #202020;">stringValue</span>
            <span style="color: #0000FF;">WHERE</span> <span style="color: #808080;">[</span>name<span style="color: #808080;">]</span> <span style="color: #808080;">NOT</span> <span style="color: #808080;">IN</span> <span style="color: #808080;">(</span><span style="color: #FF0000;">'master'</span>, <span style="color: #FF0000;">'tempdb'</span><span style="color: #808080;">)</span><span style="color: #008080;">-- exclude system databases</span>
                <span style="color: #808080;">AND</span> <span style="color: #808080;">[</span><span style="color: #0000FF;">state</span><span style="color: #808080;">]</span> <span style="color: #808080;">=</span> <span style="color: #000;">0</span> <span style="color: #008080;">-- state must be ONLINE</span>
                <span style="color: #808080;">AND</span> is_read_only <span style="color: #808080;">=</span> <span style="color: #000;">0</span>;  <span style="color: #008080;">-- cannot be read_only</span>

        <span style="color: #0000FF;">END</span>; 

        <span style="color: #008080;">/* Check to see IF we have indexes in need of defrag; otherwise, re-scan the database(s) */</span>
        <span style="color: #0000FF;">IF</span> <span style="color: #808080;">NOT</span> <span style="color: #808080;">EXISTS(</span><span style="color: #0000FF;">SELECT</span> <span style="color: #0000FF;">Top</span> <span style="color: #000;">1</span> <span style="color: #808080;">*</span> <span style="color: #0000FF;">FROM</span> dbo.<span style="color: #202020;">dba_indexDefragStatus</span> <span style="color: #0000FF;">WHERE</span> defragDate <span style="color: #0000FF;">IS</span> <span style="color: #808080;">NULL)</span>
            <span style="color: #808080;">OR</span> @forceRescan <span style="color: #808080;">=</span> <span style="color: #000;">1</span>
        <span style="color: #0000FF;">BEGIN</span>

            <span style="color: #008080;">/* Truncate our list of indexes to prepare for a new scan */</span>
            <span style="color: #0000FF;">TRUNCATE</span> <span style="color: #0000FF;">TABLE</span> dbo.<span style="color: #202020;">dba_indexDefragStatus</span>;

            <span style="color: #0000FF;">IF</span> @debugMode <span style="color: #808080;">=</span> <span style="color: #000;">1</span> <span style="color: #0000FF;">RAISERROR</span><span style="color: #808080;">(</span><span style="color: #FF0000;">'Looping through our list of databases and checking for fragmentation...'</span>, <span style="color: #000;">0</span>, <span style="color: #000;">42</span><span style="color: #808080;">)</span> <span style="color: #0000FF;">WITH</span> NOWAIT;

            <span style="color: #008080;">/* Loop through our list of databases */</span>
            <span style="color: #0000FF;">WHILE</span> <span style="color: #808080;">(</span><span style="color: #0000FF;">SELECT</span> <span style="color: #FF00FF;">COUNT</span><span style="color: #808080;">(*)</span> <span style="color: #0000FF;">FROM</span> #databaseList <span style="color: #0000FF;">WHERE</span> scanStatus <span style="color: #808080;">=</span> <span style="color: #000;">0</span><span style="color: #808080;">)</span> <span style="color: #808080;">></span> <span style="color: #000;">0</span>
            <span style="color: #0000FF;">BEGIN</span>

                <span style="color: #0000FF;">SELECT</span> <span style="color: #0000FF;">Top</span> <span style="color: #000;">1</span> @databaseID <span style="color: #808080;">=</span> databaseID
                <span style="color: #0000FF;">FROM</span> #databaseList
                <span style="color: #0000FF;">WHERE</span> scanStatus <span style="color: #808080;">=</span> <span style="color: #000;">0</span>;

                <span style="color: #0000FF;">SELECT</span> @debugMessage <span style="color: #808080;">=</span> <span style="color: #FF0000;">'  working on '</span> <span style="color: #808080;">+</span> <span style="color: #FF00FF;">DB_NAME</span><span style="color: #808080;">(</span>@databaseID<span style="color: #808080;">)</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">'...'</span>;

                <span style="color: #0000FF;">IF</span> @debugMode <span style="color: #808080;">=</span> <span style="color: #000;">1</span>
                    <span style="color: #0000FF;">RAISERROR</span><span style="color: #808080;">(</span>@debugMessage, <span style="color: #000;">0</span>, <span style="color: #000;">42</span><span style="color: #808080;">)</span> <span style="color: #0000FF;">WITH</span> NOWAIT;

               <span style="color: #008080;">/* Determine which indexes to defrag using our user-defined parameters */</span>
                <span style="color: #0000FF;">INSERT</span> <span style="color: #0000FF;">INTO</span> dbo.<span style="color: #202020;">dba_indexDefragStatus</span>
                <span style="color: #808080;">(</span>
                      databaseID
                    , databaseName
                    , objectID
                    , indexID
                    , partitionNumber
                    , fragmentation
                    , page_count
                    , range_scan_count
                    , scanDate
                <span style="color: #808080;">)</span>
                <span style="color: #0000FF;">SELECT</span>
                      ps.<span style="color: #202020;">database_id</span> <span style="color: #0000FF;">AS</span> <span style="color: #FF0000;">'databaseID'</span>
                    , <span style="color: #FF00FF;">QUOTENAME</span><span style="color: #808080;">(</span><span style="color: #FF00FF;">DB_NAME</span><span style="color: #808080;">(</span>ps.<span style="color: #202020;">database_id</span><span style="color: #808080;">))</span> <span style="color: #0000FF;">AS</span> <span style="color: #FF0000;">'databaseName'</span>
                    , ps.<span style="color: #808080;">[</span><span style="color: #FF00FF;">object_id</span><span style="color: #808080;">]</span> <span style="color: #0000FF;">AS</span> <span style="color: #FF0000;">'objectID'</span>
                    , ps.<span style="color: #202020;">index_id</span> <span style="color: #0000FF;">AS</span> <span style="color: #FF0000;">'indexID'</span>
                    , ps.<span style="color: #202020;">partition_number</span> <span style="color: #0000FF;">AS</span> <span style="color: #FF0000;">'partitionNumber'</span>
                    , <span style="color: #FF00FF;">SUM</span><span style="color: #808080;">(</span>ps.<span style="color: #202020;">avg_fragmentation_in_percent</span><span style="color: #808080;">)</span> <span style="color: #0000FF;">AS</span> <span style="color: #FF0000;">'fragmentation'</span>
                    , <span style="color: #FF00FF;">SUM</span><span style="color: #808080;">(</span>ps.<span style="color: #202020;">page_count</span><span style="color: #808080;">)</span> <span style="color: #0000FF;">AS</span> <span style="color: #FF0000;">'page_count'</span>
                    , os.<span style="color: #202020;">range_scan_count</span>
                    , <span style="color: #FF00FF;">GETDATE</span><span style="color: #808080;">()</span> <span style="color: #0000FF;">AS</span> <span style="color: #FF0000;">'scanDate'</span>
                <span style="color: #0000FF;">FROM</span> sys.<span style="color: #202020;">dm_db_index_physical_stats</span><span style="color: #808080;">(</span>@databaseID, <span style="color: #FF00FF;">OBJECT_ID</span><span style="color: #808080;">(</span>@tableName<span style="color: #808080;">)</span>, <span style="color: #808080;">NULL</span> , <span style="color: #808080;">NULL</span>, @scanMode<span style="color: #808080;">)</span> <span style="color: #0000FF;">AS</span> ps
                <span style="color: #808080;">JOIN</span> sys.<span style="color: #202020;">dm_db_index_operational_stats</span><span style="color: #808080;">(</span>@databaseID, <span style="color: #FF00FF;">OBJECT_ID</span><span style="color: #808080;">(</span>@tableName<span style="color: #808080;">)</span>, <span style="color: #808080;">NULL</span> , <span style="color: #808080;">NULL)</span> <span style="color: #0000FF;">AS</span> os
                    <span style="color: #0000FF;">ON</span> ps.<span style="color: #202020;">database_id</span> <span style="color: #808080;">=</span> os.<span style="color: #202020;">database_id</span>
                    <span style="color: #808080;">AND</span> ps.<span style="color: #808080;">[</span><span style="color: #FF00FF;">object_id</span><span style="color: #808080;">]</span> <span style="color: #808080;">=</span> os.<span style="color: #808080;">[</span><span style="color: #FF00FF;">object_id</span><span style="color: #808080;">]</span>
                    <span style="color: #808080;">AND</span> ps.<span style="color: #202020;">index_id</span> <span style="color: #808080;">=</span> os.<span style="color: #202020;">index_id</span>
                    <span style="color: #808080;">AND</span> ps.<span style="color: #202020;">partition_number</span> <span style="color: #808080;">=</span> os.<span style="color: #202020;">partition_number</span>
                <span style="color: #0000FF;">WHERE</span> avg_fragmentation_in_percent <span style="color: #808080;">>=</span> @minFragmentation 
                    <span style="color: #808080;">AND</span> ps.<span style="color: #202020;">index_id</span> <span style="color: #808080;">></span> <span style="color: #000;">0</span> <span style="color: #008080;">-- ignore heaps</span>
                    <span style="color: #808080;">AND</span> ps.<span style="color: #202020;">page_count</span> <span style="color: #808080;">></span> @minPageCount 
                    <span style="color: #808080;">AND</span> ps.<span style="color: #202020;">index_level</span> <span style="color: #808080;">=</span> <span style="color: #000;">0</span> <span style="color: #008080;">-- leaf-level nodes only, supports @scanMode</span>
                <span style="color: #0000FF;">GROUP</span> <span style="color: #0000FF;">BY</span> ps.<span style="color: #202020;">database_id</span> 
                    , <span style="color: #FF00FF;">QUOTENAME</span><span style="color: #808080;">(</span><span style="color: #FF00FF;">DB_NAME</span><span style="color: #808080;">(</span>ps.<span style="color: #202020;">database_id</span><span style="color: #808080;">))</span> 
                    , ps.<span style="color: #808080;">[</span><span style="color: #FF00FF;">object_id</span><span style="color: #808080;">]</span>
                    , ps.<span style="color: #202020;">index_id</span> 
                    , ps.<span style="color: #202020;">partition_number</span> 
                    , os.<span style="color: #202020;">range_scan_count</span>
                <span style="color: #0000FF;">OPTION</span> <span style="color: #808080;">(</span>MAXDOP <span style="color: #000;">2</span><span style="color: #808080;">)</span>;

                <span style="color: #008080;">/* Do we want to exclude right-most populated partition of our partitioned indexes? */</span>
                <span style="color: #0000FF;">IF</span> @excludeMaxPartition <span style="color: #808080;">=</span> <span style="color: #000;">1</span>
                <span style="color: #0000FF;">BEGIN</span>

                    <span style="color: #0000FF;">SET</span> @excludeMaxPartitionSQL <span style="color: #808080;">=</span> <span style="color: #FF0000;">'
                        SELECT '</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CAST</span><span style="color: #808080;">(</span>@databaseID <span style="color: #0000FF;">AS</span> <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">10</span><span style="color: #808080;">))</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">' AS [databaseID]
                            , [object_id]
                            , index_id
                            , MAX(partition_number) AS [maxPartition]
                        FROM ['</span> <span style="color: #808080;">+</span> <span style="color: #FF00FF;">DB_NAME</span><span style="color: #808080;">(</span>@databaseID<span style="color: #808080;">)</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">'].sys.partitions
                        WHERE partition_number > 1
                            AND [rows] > 0
                        GROUP BY object_id
                            , index_id;'</span>;

                    <span style="color: #0000FF;">INSERT</span> <span style="color: #0000FF;">INTO</span> #maxPartitionList
                    <span style="color: #0000FF;">EXECUTE</span> <span style="color: #AF0000;">sp_executesql</span> @excludeMaxPartitionSQL;

                <span style="color: #0000FF;">END</span>;

                <span style="color: #008080;">/* Keep track of which databases have already been scanned */</span>
                <span style="color: #0000FF;">UPDATE</span> #databaseList
                <span style="color: #0000FF;">SET</span> scanStatus <span style="color: #808080;">=</span> <span style="color: #000;">1</span>
                <span style="color: #0000FF;">WHERE</span> databaseID <span style="color: #808080;">=</span> @databaseID;

            <span style="color: #0000FF;">END</span>

            <span style="color: #008080;">/* We don't want to defrag the right-most populated partition, so
               delete any records for partitioned indexes where partition = MAX(partition) */</span>
            <span style="color: #0000FF;">IF</span> @excludeMaxPartition <span style="color: #808080;">=</span> <span style="color: #000;">1</span>
            <span style="color: #0000FF;">BEGIN</span>

                <span style="color: #0000FF;">DELETE</span> ids
                <span style="color: #0000FF;">FROM</span> dbo.<span style="color: #202020;">dba_indexDefragStatus</span> <span style="color: #0000FF;">AS</span> ids
                <span style="color: #808080;">JOIN</span> #maxPartitionList <span style="color: #0000FF;">AS</span> mpl
                    <span style="color: #0000FF;">ON</span> ids.<span style="color: #202020;">databaseID</span> <span style="color: #808080;">=</span> mpl.<span style="color: #202020;">databaseID</span>
                    <span style="color: #808080;">AND</span> ids.<span style="color: #202020;">objectID</span> <span style="color: #808080;">=</span> mpl.<span style="color: #202020;">objectID</span>
                    <span style="color: #808080;">AND</span> ids.<span style="color: #202020;">indexID</span> <span style="color: #808080;">=</span> mpl.<span style="color: #202020;">indexID</span>
                    <span style="color: #808080;">AND</span> ids.<span style="color: #202020;">partitionNumber</span> <span style="color: #808080;">=</span> mpl.<span style="color: #202020;">maxPartition</span>;

            <span style="color: #0000FF;">END</span>;

            <span style="color: #008080;">/* Update our exclusion mask for any index that has a restriction ON the days it can be defragged */</span>
            <span style="color: #0000FF;">UPDATE</span> ids
            <span style="color: #0000FF;">SET</span> ids.<span style="color: #202020;">exclusionMask</span> <span style="color: #808080;">=</span> ide.<span style="color: #202020;">exclusionMask</span>
            <span style="color: #0000FF;">FROM</span> dbo.<span style="color: #202020;">dba_indexDefragStatus</span> <span style="color: #0000FF;">AS</span> ids
            <span style="color: #808080;">JOIN</span> dbo.<span style="color: #202020;">dba_indexDefragExclusion</span> <span style="color: #0000FF;">AS</span> ide
                <span style="color: #0000FF;">ON</span> ids.<span style="color: #202020;">databaseID</span> <span style="color: #808080;">=</span> ide.<span style="color: #202020;">databaseID</span>
                <span style="color: #808080;">AND</span> ids.<span style="color: #202020;">objectID</span> <span style="color: #808080;">=</span> ide.<span style="color: #202020;">objectID</span>
                <span style="color: #808080;">AND</span> ids.<span style="color: #202020;">indexID</span> <span style="color: #808080;">=</span> ide.<span style="color: #202020;">indexID</span>;

        <span style="color: #0000FF;">END</span>

        <span style="color: #0000FF;">SELECT</span> @debugMessage <span style="color: #808080;">=</span> <span style="color: #FF0000;">'Looping through our list... there are '</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CAST</span><span style="color: #808080;">(</span><span style="color: #FF00FF;">COUNT</span><span style="color: #808080;">(*)</span> <span style="color: #0000FF;">AS</span> <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">10</span><span style="color: #808080;">))</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">' indexes to defrag!'</span>
        <span style="color: #0000FF;">FROM</span> dbo.<span style="color: #202020;">dba_indexDefragStatus</span>
        <span style="color: #0000FF;">WHERE</span> defragDate <span style="color: #0000FF;">IS</span> <span style="color: #808080;">NULL</span>
            <span style="color: #808080;">AND</span> page_count <span style="color: #808080;">BETWEEN</span> @minPageCount <span style="color: #808080;">AND</span> IS<span style="color: #808080;">NULL(</span>@maxPageCount, page_count<span style="color: #808080;">)</span>;

        <span style="color: #0000FF;">IF</span> @debugMode <span style="color: #808080;">=</span> <span style="color: #000;">1</span> <span style="color: #0000FF;">RAISERROR</span><span style="color: #808080;">(</span>@debugMessage, <span style="color: #000;">0</span>, <span style="color: #000;">42</span><span style="color: #808080;">)</span> <span style="color: #0000FF;">WITH</span> NOWAIT;

        <span style="color: #008080;">/* Begin our loop for defragging */</span>
        <span style="color: #0000FF;">WHILE</span> <span style="color: #808080;">(</span><span style="color: #0000FF;">SELECT</span> <span style="color: #FF00FF;">COUNT</span><span style="color: #808080;">(*)</span> 
               <span style="color: #0000FF;">FROM</span> dbo.<span style="color: #202020;">dba_indexDefragStatus</span> 
               <span style="color: #0000FF;">WHERE</span> <span style="color: #808080;">(</span>
                           <span style="color: #808080;">(</span>@executeSQL <span style="color: #808080;">=</span> <span style="color: #000;">1</span> <span style="color: #808080;">AND</span> defragDate <span style="color: #0000FF;">IS</span> <span style="color: #808080;">NULL)</span> 
                        <span style="color: #808080;">OR</span> <span style="color: #808080;">(</span>@executeSQL <span style="color: #808080;">=</span> <span style="color: #000;">0</span> <span style="color: #808080;">AND</span> defragDate <span style="color: #0000FF;">IS</span> <span style="color: #808080;">NULL</span> <span style="color: #808080;">AND</span> printStatus <span style="color: #808080;">=</span> <span style="color: #000;">0</span><span style="color: #808080;">)</span>
                     <span style="color: #808080;">)</span>
                <span style="color: #808080;">AND</span> exclusionMask <span style="color: #808080;">&</span> <span style="color: #FF00FF;">POWER</span><span style="color: #808080;">(</span><span style="color: #000;">2</span>, <span style="color: #FF00FF;">DATEPART</span><span style="color: #808080;">(</span>weekday, <span style="color: #FF00FF;">GETDATE</span><span style="color: #808080;">())-</span><span style="color: #000;">1</span><span style="color: #808080;">)</span> <span style="color: #808080;">=</span> <span style="color: #000;">0</span>
                <span style="color: #808080;">AND</span> page_count <span style="color: #808080;">BETWEEN</span> @minPageCount <span style="color: #808080;">AND</span> IS<span style="color: #808080;">NULL(</span>@maxPageCount, page_count<span style="color: #808080;">))</span> <span style="color: #808080;">></span> <span style="color: #000;">0</span>
        <span style="color: #0000FF;">BEGIN</span>

            <span style="color: #008080;">/* Check to see IF we need to exit our loop because of our time limit */</span>        
            <span style="color: #0000FF;">IF</span> IS<span style="color: #808080;">NULL(</span>@enddatetime, <span style="color: #FF00FF;">GETDATE</span><span style="color: #808080;">())</span> <span style="color: #808080;"><</span> <span style="color: #FF00FF;">GETDATE</span><span style="color: #808080;">()</span>
            <span style="color: #0000FF;">BEGIN</span>
                <span style="color: #0000FF;">RAISERROR</span><span style="color: #808080;">(</span><span style="color: #FF0000;">'Our time limit has been exceeded!'</span>, <span style="color: #000;">11</span>, <span style="color: #000;">42</span><span style="color: #808080;">)</span> <span style="color: #0000FF;">WITH</span> NOWAIT;
            <span style="color: #0000FF;">END</span>;

            <span style="color: #0000FF;">IF</span> @debugMode <span style="color: #808080;">=</span> <span style="color: #000;">1</span> <span style="color: #0000FF;">RAISERROR</span><span style="color: #808080;">(</span><span style="color: #FF0000;">'  Picking an index to beat into shape...'</span>, <span style="color: #000;">0</span>, <span style="color: #000;">42</span><span style="color: #808080;">)</span> <span style="color: #0000FF;">WITH</span> NOWAIT;

            <span style="color: #008080;">/* Grab the index with the highest priority, based on the values submitted; 
               Look at the exclusion mask to ensure it can be defragged today */</span>
            <span style="color: #0000FF;">SET</span> @getIndexSQL <span style="color: #808080;">=</span> N<span style="color: #FF0000;">'
            SELECT TOP 1 
                  @objectID_Out         = objectID
                , @indexID_Out          = indexID
                , @databaseID_Out       = databaseID
                , @databaseName_Out     = databaseName
                , @fragmentation_Out    = fragmentation
                , @partitionNumber_Out  = partitionNumber
                , @pageCount_Out        = page_count
            FROM dbo.dba_indexDefragStatus
            WHERE defragDate IS NULL '</span> 
                <span style="color: #808080;">+</span> <span style="color: #0000FF;">CASE</span> <span style="color: #0000FF;">WHEN</span> @executeSQL <span style="color: #808080;">=</span> <span style="color: #000;">0</span> <span style="color: #0000FF;">THEN</span> <span style="color: #FF0000;">'AND printStatus = 0'</span> <span style="color: #0000FF;">ELSE</span> <span style="color: #FF0000;">''</span> <span style="color: #0000FF;">END</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">'
                AND exclusionMask & Power(2, DatePart(weekday, GETDATE())-1) = 0
                AND page_count BETWEEN @p_minPageCount AND ISNULL(@p_maxPageCount, page_count)
            ORDER BY + '</span> <span style="color: #808080;">+</span> @defragOrderColumn <span style="color: #808080;">+</span> <span style="color: #FF0000;">' '</span> <span style="color: #808080;">+</span> @defragSortOrder;

            <span style="color: #0000FF;">SET</span> @getIndexSQL_Param <span style="color: #808080;">=</span> N<span style="color: #FF0000;">'@objectID_Out        INT OUTPUT
                                     , @indexID_Out         INT OUTPUT
                                     , @databaseID_Out      INT OUTPUT
                                     , @databaseName_Out    NVARCHAR(128) OUTPUT
                                     , @fragmentation_Out   INT OUTPUT
                                     , @partitionNumber_Out INT OUTPUT
                                     , @pageCount_Out       INT OUTPUT
                                     , @p_minPageCount      INT
                                     , @p_maxPageCount      INT'</span>;

            <span style="color: #0000FF;">EXECUTE</span> <span style="color: #AF0000;">sp_executesql</span> @getIndexSQL
                , @getIndexSQL_Param
                , @p_minPageCount       <span style="color: #808080;">=</span> @minPageCount
                , @p_maxPageCount       <span style="color: #808080;">=</span> @maxPageCount
                , @objectID_Out         <span style="color: #808080;">=</span> @objectID         <span style="color: #0000FF;">OUTPUT</span>
                , @indexID_Out          <span style="color: #808080;">=</span> @indexID          <span style="color: #0000FF;">OUTPUT</span>
                , @databaseID_Out       <span style="color: #808080;">=</span> @databaseID       <span style="color: #0000FF;">OUTPUT</span>
                , @databaseName_Out     <span style="color: #808080;">=</span> @databaseName     <span style="color: #0000FF;">OUTPUT</span>
                , @fragmentation_Out    <span style="color: #808080;">=</span> @fragmentation    <span style="color: #0000FF;">OUTPUT</span>
                , @partitionNumber_Out  <span style="color: #808080;">=</span> @partitionNumber  <span style="color: #0000FF;">OUTPUT</span>
                , @pageCount_Out        <span style="color: #808080;">=</span> @pageCount        <span style="color: #0000FF;">OUTPUT</span>;

            <span style="color: #0000FF;">IF</span> @debugMode <span style="color: #808080;">=</span> <span style="color: #000;">1</span> <span style="color: #0000FF;">RAISERROR</span><span style="color: #808080;">(</span><span style="color: #FF0000;">'  Looking up the specifics for our index...'</span>, <span style="color: #000;">0</span>, <span style="color: #000;">42</span><span style="color: #808080;">)</span> <span style="color: #0000FF;">WITH</span> NOWAIT;

            <span style="color: #008080;">/* Look up index information */</span>
            <span style="color: #0000FF;">SELECT</span> @updateSQL <span style="color: #808080;">=</span> N<span style="color: #FF0000;">'UPDATE ids
                SET schemaName = QUOTENAME(s.name)
                    , objectName = QUOTENAME(o.name)
                    , indexName = QUOTENAME(i.name)
                FROM dbo.dba_indexDefragStatus AS ids
                INNER JOIN '</span> <span style="color: #808080;">+</span> @databaseName <span style="color: #808080;">+</span> <span style="color: #FF0000;">'.sys.objects AS o
                    ON ids.objectID = o.[object_id]
                INNER JOIN '</span> <span style="color: #808080;">+</span> @databaseName <span style="color: #808080;">+</span> <span style="color: #FF0000;">'.sys.indexes AS i
                    ON o.[object_id] = i.[object_id]
                    AND ids.indexID = i.index_id
                INNER JOIN '</span> <span style="color: #808080;">+</span> @databaseName <span style="color: #808080;">+</span> <span style="color: #FF0000;">'.sys.schemas AS s
                    ON o.schema_id = s.schema_id
                WHERE o.[object_id] = '</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CAST</span><span style="color: #808080;">(</span>@objectID <span style="color: #0000FF;">AS</span> <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">10</span><span style="color: #808080;">))</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">'
                    AND i.index_id = '</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CAST</span><span style="color: #808080;">(</span>@indexID <span style="color: #0000FF;">AS</span> <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">10</span><span style="color: #808080;">))</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">'
                    AND i.type > 0
                    AND ids.databaseID = '</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CAST</span><span style="color: #808080;">(</span>@databaseID <span style="color: #0000FF;">AS</span> <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">10</span><span style="color: #808080;">))</span>;

            <span style="color: #0000FF;">EXECUTE</span> <span style="color: #AF0000;">sp_executesql</span> @updateSQL;

            <span style="color: #008080;">/* Grab our object names */</span>
            <span style="color: #0000FF;">SELECT</span> @objectName  <span style="color: #808080;">=</span> objectName
                , @schemaName   <span style="color: #808080;">=</span> schemaName
                , @indexName    <span style="color: #808080;">=</span> indexName
            <span style="color: #0000FF;">FROM</span> dbo.<span style="color: #202020;">dba_indexDefragStatus</span>
            <span style="color: #0000FF;">WHERE</span> objectID <span style="color: #808080;">=</span> @objectID
                <span style="color: #808080;">AND</span> indexID <span style="color: #808080;">=</span> @indexID
                <span style="color: #808080;">AND</span> databaseID <span style="color: #808080;">=</span> @databaseID;

            <span style="color: #0000FF;">IF</span> @debugMode <span style="color: #808080;">=</span> <span style="color: #000;">1</span> <span style="color: #0000FF;">RAISERROR</span><span style="color: #808080;">(</span><span style="color: #FF0000;">'  Grabbing the partition COUNT...'</span>, <span style="color: #000;">0</span>, <span style="color: #000;">42</span><span style="color: #808080;">)</span> <span style="color: #0000FF;">WITH</span> NOWAIT;

            <span style="color: #008080;">/* Determine if the index is partitioned */</span>
            <span style="color: #0000FF;">SELECT</span> @partitionSQL <span style="color: #808080;">=</span> <span style="color: #FF0000;">'SELECT @partitionCount_OUT = COUNT(*)
                                        FROM '</span> <span style="color: #808080;">+</span> @databaseName <span style="color: #808080;">+</span> <span style="color: #FF0000;">'.sys.partitions
                                        WHERE object_id = '</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CAST</span><span style="color: #808080;">(</span>@objectID <span style="color: #0000FF;">AS</span> <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">10</span><span style="color: #808080;">))</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">'
                                            AND index_id = '</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CAST</span><span style="color: #808080;">(</span>@indexID <span style="color: #0000FF;">AS</span> <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">10</span><span style="color: #808080;">))</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">';'</span>
                , @partitionSQL_Param <span style="color: #808080;">=</span> <span style="color: #FF0000;">'@partitionCount_OUT INT OUTPUT'</span>;

            <span style="color: #0000FF;">EXECUTE</span> <span style="color: #AF0000;">sp_executesql</span> @partitionSQL, @partitionSQL_Param, @partitionCount_OUT <span style="color: #808080;">=</span> @partitionCount <span style="color: #0000FF;">OUTPUT</span>;

            <span style="color: #0000FF;">IF</span> @debugMode <span style="color: #808080;">=</span> <span style="color: #000;">1</span> <span style="color: #0000FF;">RAISERROR</span><span style="color: #808080;">(</span><span style="color: #FF0000;">'  Seeing IF there are any LOBs to be handled...'</span>, <span style="color: #000;">0</span>, <span style="color: #000;">42</span><span style="color: #808080;">)</span> <span style="color: #0000FF;">WITH</span> NOWAIT;

            <span style="color: #008080;">/* Determine if the table contains LOBs */</span>
            <span style="color: #0000FF;">SELECT</span> @LOB_SQL <span style="color: #808080;">=</span> <span style="color: #FF0000;">' SELECT @containsLOB_OUT = COUNT(*)
                                FROM '</span> <span style="color: #808080;">+</span> @databaseName <span style="color: #808080;">+</span> <span style="color: #FF0000;">'.sys.columns WITH (NoLock) 
                                WHERE [object_id] = '</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CAST</span><span style="color: #808080;">(</span>@objectID <span style="color: #0000FF;">AS</span> <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">10</span><span style="color: #808080;">))</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">'
                                   AND (system_type_id IN (34, 35, 99)
                                            OR max_length = -1);'</span>
                                <span style="color: #008080;">/*  system_type_id --> 34 = IMAGE, 35 = TEXT, 99 = NTEXT
                                    max_length = -1 --> VARBINARY(MAX), VARCHAR(MAX), NVARCHAR(MAX), XML */</span>
                    , @LOB_SQL_Param <span style="color: #808080;">=</span> <span style="color: #FF0000;">'@containsLOB_OUT INT OUTPUT'</span>;

            <span style="color: #0000FF;">EXECUTE</span> <span style="color: #AF0000;">sp_executesql</span> @LOB_SQL, @LOB_SQL_Param, @containsLOB_OUT <span style="color: #808080;">=</span> @containsLOB <span style="color: #0000FF;">OUTPUT</span>;

            <span style="color: #0000FF;">IF</span> @debugMode <span style="color: #808080;">=</span> <span style="color: #000;">1</span> <span style="color: #0000FF;">RAISERROR</span><span style="color: #808080;">(</span><span style="color: #FF0000;">'  Checking for indexes that do NOT allow page locks...'</span>, <span style="color: #000;">0</span>, <span style="color: #000;">42</span><span style="color: #808080;">)</span> <span style="color: #0000FF;">WITH</span> NOWAIT;

            <span style="color: #008080;">/* Determine if page locks are allowed; for those indexes, we need to always REBUILD */</span>
            <span style="color: #0000FF;">SELECT</span> @allowPageLockSQL <span style="color: #808080;">=</span> <span style="color: #FF0000;">'SELECT @allowPageLocks_OUT = COUNT(*)
                                        FROM '</span> <span style="color: #808080;">+</span> @databaseName <span style="color: #808080;">+</span> <span style="color: #FF0000;">'.sys.indexes
                                        WHERE object_id = '</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CAST</span><span style="color: #808080;">(</span>@objectID <span style="color: #0000FF;">AS</span> <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">10</span><span style="color: #808080;">))</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">'
                                            AND index_id = '</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CAST</span><span style="color: #808080;">(</span>@indexID <span style="color: #0000FF;">AS</span> <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">10</span><span style="color: #808080;">))</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">'
                                            AND Allow_Page_Locks = 0;'</span>
                , @allowPageLockSQL_Param <span style="color: #808080;">=</span> <span style="color: #FF0000;">'@allowPageLocks_OUT INT OUTPUT'</span>;

            <span style="color: #0000FF;">EXECUTE</span> <span style="color: #AF0000;">sp_executesql</span> @allowPageLockSQL, @allowPageLockSQL_Param, @allowPageLocks_OUT <span style="color: #808080;">=</span> @allowPageLocks <span style="color: #0000FF;">OUTPUT</span>;

            <span style="color: #0000FF;">IF</span> @debugMode <span style="color: #808080;">=</span> <span style="color: #000;">1</span> <span style="color: #0000FF;">RAISERROR</span><span style="color: #808080;">(</span><span style="color: #FF0000;">'  Building our SQL statements...'</span>, <span style="color: #000;">0</span>, <span style="color: #000;">42</span><span style="color: #808080;">)</span> <span style="color: #0000FF;">WITH</span> NOWAIT;

            <span style="color: #008080;">/* IF there's not a lot of fragmentation, or if we have a LOB, we should REORGANIZE */</span>
            <span style="color: #0000FF;">IF</span> <span style="color: #808080;">(</span>@fragmentation <span style="color: #808080;"><</span> @rebuildThreshold <span style="color: #808080;">OR</span> @containsLOB <span style="color: #808080;">>=</span> <span style="color: #000;">1</span> <span style="color: #808080;">OR</span> @partitionCount <span style="color: #808080;">></span> <span style="color: #000;">1</span><span style="color: #808080;">)</span>
                <span style="color: #808080;">AND</span> @allowPageLocks <span style="color: #808080;">=</span> <span style="color: #000;">0</span>
            <span style="color: #0000FF;">BEGIN</span>

                <span style="color: #0000FF;">SET</span> @sqlCommand <span style="color: #808080;">=</span> N<span style="color: #FF0000;">'ALTER INDEX '</span> <span style="color: #808080;">+</span> @indexName <span style="color: #808080;">+</span> N<span style="color: #FF0000;">' ON '</span> <span style="color: #808080;">+</span> @databaseName <span style="color: #808080;">+</span> N<span style="color: #FF0000;">'.'</span> 
                                    <span style="color: #808080;">+</span> @schemaName <span style="color: #808080;">+</span> N<span style="color: #FF0000;">'.'</span> <span style="color: #808080;">+</span> @objectName <span style="color: #808080;">+</span> N<span style="color: #FF0000;">' REORGANIZE'</span>;

                <span style="color: #008080;">/* If our index is partitioned, we should always REORGANIZE */</span>
                <span style="color: #0000FF;">IF</span> @partitionCount <span style="color: #808080;">></span> <span style="color: #000;">1</span>
                    <span style="color: #0000FF;">SET</span> @sqlCommand <span style="color: #808080;">=</span> @sqlCommand <span style="color: #808080;">+</span> N<span style="color: #FF0000;">' PARTITION = '</span> 
                                    <span style="color: #808080;">+</span> <span style="color: #0000FF;">CAST</span><span style="color: #808080;">(</span>@partitionNumber <span style="color: #0000FF;">AS</span> <span style="color: #0000FF;">NVARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">10</span><span style="color: #808080;">))</span>;

            <span style="color: #0000FF;">END</span>
            <span style="color: #008080;">/* If the index is heavily fragmented and doesn't contain any partitions or LOB's, 
               or if the index does not allow page locks, REBUILD it */</span>
            <span style="color: #0000FF;">ELSE</span> <span style="color: #0000FF;">IF</span> <span style="color: #808080;">(</span>@fragmentation <span style="color: #808080;">>=</span> @rebuildThreshold <span style="color: #808080;">OR</span> @allowPageLocks <span style="color: #808080;"><></span> <span style="color: #000;">0</span><span style="color: #808080;">)</span>
                <span style="color: #808080;">AND</span> IS<span style="color: #808080;">NULL(</span>@containsLOB, <span style="color: #000;">0</span><span style="color: #808080;">)</span> <span style="color: #808080;">!=</span> <span style="color: #000;">1</span> <span style="color: #808080;">AND</span> @partitionCount <span style="color: #808080;"><=</span> <span style="color: #000;">1</span>
            <span style="color: #0000FF;">BEGIN</span>

                <span style="color: #008080;">/* Set online REBUILD options; requires Enterprise Edition */</span>
                <span style="color: #0000FF;">IF</span> @onlineRebuild <span style="color: #808080;">=</span> <span style="color: #000;">1</span> <span style="color: #808080;">AND</span> @editionCheck <span style="color: #808080;">=</span> <span style="color: #000;">1</span> 
                    <span style="color: #0000FF;">SET</span> @rebuildCommand <span style="color: #808080;">=</span> N<span style="color: #FF0000;">' REBUILD WITH (ONLINE = ON'</span>;
                <span style="color: #0000FF;">ELSE</span>
                    <span style="color: #0000FF;">SET</span> @rebuildCommand <span style="color: #808080;">=</span> N<span style="color: #FF0000;">' REBUILD WITH (ONLINE = Off'</span>;

                <span style="color: #008080;">/* Set sort operation preferences */</span>
                <span style="color: #0000FF;">IF</span> @sortInTempDB <span style="color: #808080;">=</span> <span style="color: #000;">1</span> 
                    <span style="color: #0000FF;">SET</span> @rebuildCommand <span style="color: #808080;">=</span> @rebuildCommand <span style="color: #808080;">+</span> N<span style="color: #FF0000;">', SORT_IN_TEMPDB = ON'</span>;
                <span style="color: #0000FF;">ELSE</span>
                    <span style="color: #0000FF;">SET</span> @rebuildCommand <span style="color: #808080;">=</span> @rebuildCommand <span style="color: #808080;">+</span> N<span style="color: #FF0000;">', SORT_IN_TEMPDB = Off'</span>;

                <span style="color: #008080;">/* Set processor restriction options; requires Enterprise Edition */</span>
                <span style="color: #0000FF;">IF</span> @maxDopRestriction <span style="color: #0000FF;">IS</span> <span style="color: #808080;">NOT</span> <span style="color: #808080;">NULL</span> <span style="color: #808080;">AND</span> @editionCheck <span style="color: #808080;">=</span> <span style="color: #000;">1</span>
                    <span style="color: #0000FF;">SET</span> @rebuildCommand <span style="color: #808080;">=</span> @rebuildCommand <span style="color: #808080;">+</span> N<span style="color: #FF0000;">', MAXDOP = '</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CAST</span><span style="color: #808080;">(</span>@maxDopRestriction <span style="color: #0000FF;">AS</span> <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">2</span><span style="color: #808080;">))</span> <span style="color: #808080;">+</span> N<span style="color: #FF0000;">')'</span>;
                <span style="color: #0000FF;">ELSE</span>
                    <span style="color: #0000FF;">SET</span> @rebuildCommand <span style="color: #808080;">=</span> @rebuildCommand <span style="color: #808080;">+</span> N<span style="color: #FF0000;">')'</span>;

                <span style="color: #0000FF;">SET</span> @sqlCommand <span style="color: #808080;">=</span> N<span style="color: #FF0000;">'ALTER INDEX '</span> <span style="color: #808080;">+</span> @indexName <span style="color: #808080;">+</span> N<span style="color: #FF0000;">' ON '</span> <span style="color: #808080;">+</span> @databaseName <span style="color: #808080;">+</span> N<span style="color: #FF0000;">'.'</span>
                                <span style="color: #808080;">+</span> @schemaName <span style="color: #808080;">+</span> N<span style="color: #FF0000;">'.'</span> <span style="color: #808080;">+</span> @objectName <span style="color: #808080;">+</span> @rebuildCommand;

            <span style="color: #0000FF;">END</span>
            <span style="color: #0000FF;">ELSE</span>
                <span style="color: #008080;">/* Print an error message if any indexes happen to not meet the criteria above */</span>
                <span style="color: #0000FF;">IF</span> @printCommands <span style="color: #808080;">=</span> <span style="color: #000;">1</span> <span style="color: #808080;">OR</span> @debugMode <span style="color: #808080;">=</span> <span style="color: #000;">1</span>
                    <span style="color: #0000FF;">RAISERROR</span><span style="color: #808080;">(</span><span style="color: #FF0000;">'We are unable to defrag this index.'</span>, <span style="color: #000;">0</span>, <span style="color: #000;">42</span><span style="color: #808080;">)</span> <span style="color: #0000FF;">WITH</span> NOWAIT;

            <span style="color: #008080;">/* Are we executing the SQL?  IF so, do it */</span>
            <span style="color: #0000FF;">IF</span> @executeSQL <span style="color: #808080;">=</span> <span style="color: #000;">1</span>
            <span style="color: #0000FF;">BEGIN</span>

                <span style="color: #0000FF;">SET</span> @debugMessage <span style="color: #808080;">=</span> <span style="color: #FF0000;">'Executing: '</span> <span style="color: #808080;">+</span> @sqlCommand;

                <span style="color: #008080;">/* Print the commands we're executing if specified to do so */</span>
                <span style="color: #0000FF;">IF</span> @printCommands <span style="color: #808080;">=</span> <span style="color: #000;">1</span> <span style="color: #808080;">OR</span> @debugMode <span style="color: #808080;">=</span> <span style="color: #000;">1</span>
                    <span style="color: #0000FF;">RAISERROR</span><span style="color: #808080;">(</span>@debugMessage, <span style="color: #000;">0</span>, <span style="color: #000;">42</span><span style="color: #808080;">)</span> <span style="color: #0000FF;">WITH</span> NOWAIT;

                <span style="color: #008080;">/* Grab the time for logging purposes */</span>
                <span style="color: #0000FF;">SET</span> @datetimestart  <span style="color: #808080;">=</span> <span style="color: #FF00FF;">GETDATE</span><span style="color: #808080;">()</span>;

                <span style="color: #008080;">/* Log our actions */</span>
                <span style="color: #0000FF;">INSERT</span> <span style="color: #0000FF;">INTO</span> dbo.<span style="color: #202020;">dba_indexDefragLog</span>
                <span style="color: #808080;">(</span>
                      databaseID
                    , databaseName
                    , objectID
                    , objectName
                    , indexID
                    , indexName
                    , partitionNumber
                    , fragmentation
                    , page_count
                    , DATETIMEStart
                    , sqlStatement
                <span style="color: #808080;">)</span>
                <span style="color: #0000FF;">SELECT</span>
                      @databaseID
                    , @databaseName
                    , @objectID
                    , @objectName
                    , @indexID
                    , @indexName
                    , @partitionNumber
                    , @fragmentation
                    , @pageCount
                    , @datetimestart
                    , @sqlCommand;

                <span style="color: #0000FF;">SET</span> @indexDefrag_id <span style="color: #808080;">=</span> <span style="color: #FF00FF;">SCOPE_IDENTITY</span><span style="color: #808080;">()</span>;

                <span style="color: #008080;">/* Wrap our execution attempt in a TRY/CATCH and log any errors that occur */</span>
                <span style="color: #0000FF;">BEGIN</span> TRY

                    <span style="color: #008080;">/* Execute our defrag! */</span>
                    <span style="color: #0000FF;">EXECUTE</span> <span style="color: #AF0000;">sp_executesql</span> @sqlCommand;
                    <span style="color: #0000FF;">SET</span> @dateTimeEnd <span style="color: #808080;">=</span> <span style="color: #FF00FF;">GETDATE</span><span style="color: #808080;">()</span>;

                    <span style="color: #008080;">/* Update our log with our completion time */</span>
                    <span style="color: #0000FF;">UPDATE</span> dbo.<span style="color: #202020;">dba_indexDefragLog</span>
                    <span style="color: #0000FF;">SET</span> dateTimeEnd <span style="color: #808080;">=</span> @dateTimeEnd
                        , durationSeconds <span style="color: #808080;">=</span> <span style="color: #FF00FF;">DATEDIFF</span><span style="color: #808080;">(</span><span style="color: #0000FF;">second</span>, @datetimestart, @dateTimeEnd<span style="color: #808080;">)</span>
                    <span style="color: #0000FF;">WHERE</span> indexDefrag_id <span style="color: #808080;">=</span> @indexDefrag_id;

                <span style="color: #0000FF;">END</span> TRY
                <span style="color: #0000FF;">BEGIN</span> CATCH

                    <span style="color: #008080;">/* Update our log with our error message */</span>
                    <span style="color: #0000FF;">UPDATE</span> dbo.<span style="color: #202020;">dba_indexDefragLog</span>
                    <span style="color: #0000FF;">SET</span> dateTimeEnd <span style="color: #808080;">=</span> <span style="color: #FF00FF;">GETDATE</span><span style="color: #808080;">()</span>
                        , durationSeconds <span style="color: #808080;">=</span> <span style="color: #808080;">-</span><span style="color: #000;">1</span>
                        , errorMessage <span style="color: #808080;">=</span> ERR<span style="color: #808080;">OR</span>_MESSAGE<span style="color: #808080;">()</span>
                    <span style="color: #0000FF;">WHERE</span> indexDefrag_id <span style="color: #808080;">=</span> @indexDefrag_id;

                    <span style="color: #0000FF;">IF</span> @debugMode <span style="color: #808080;">=</span> <span style="color: #000;">1</span> 
                        <span style="color: #0000FF;">RAISERROR</span><span style="color: #808080;">(</span><span style="color: #FF0000;">'  An error has occurred executing this command! Please review the dba_indexDefragLog table for details.'</span>
                            , <span style="color: #000;">0</span>, <span style="color: #000;">42</span><span style="color: #808080;">)</span> <span style="color: #0000FF;">WITH</span> NOWAIT;

                <span style="color: #0000FF;">END</span> CATCH

                <span style="color: #008080;">/* Just a little breather for the server */</span>
                <span style="color: #0000FF;">WAITFOR</span> DELAY @defragDelay;

                <span style="color: #0000FF;">UPDATE</span> dbo.<span style="color: #202020;">dba_indexDefragStatus</span>
                <span style="color: #0000FF;">SET</span> defragDate <span style="color: #808080;">=</span> <span style="color: #FF00FF;">GETDATE</span><span style="color: #808080;">()</span>
                    , printStatus <span style="color: #808080;">=</span> <span style="color: #000;">1</span>
                <span style="color: #0000FF;">WHERE</span> databaseID       <span style="color: #808080;">=</span> @databaseID
                  <span style="color: #808080;">AND</span> objectID         <span style="color: #808080;">=</span> @objectID
                  <span style="color: #808080;">AND</span> indexID          <span style="color: #808080;">=</span> @indexID
                  <span style="color: #808080;">AND</span> partitionNumber  <span style="color: #808080;">=</span> @partitionNumber;

            <span style="color: #0000FF;">END</span>
            <span style="color: #0000FF;">ELSE</span>
            <span style="color: #008080;">/* Looks like we're not executing, just printing the commands */</span>
            <span style="color: #0000FF;">BEGIN</span>
                <span style="color: #0000FF;">IF</span> @debugMode <span style="color: #808080;">=</span> <span style="color: #000;">1</span> <span style="color: #0000FF;">RAISERROR</span><span style="color: #808080;">(</span><span style="color: #FF0000;">'  Printing SQL statements...'</span>, <span style="color: #000;">0</span>, <span style="color: #000;">42</span><span style="color: #808080;">)</span> <span style="color: #0000FF;">WITH</span> NOWAIT;

                <span style="color: #0000FF;">IF</span> @printCommands <span style="color: #808080;">=</span> <span style="color: #000;">1</span> <span style="color: #808080;">OR</span> @debugMode <span style="color: #808080;">=</span> <span style="color: #000;">1</span> 
                    <span style="color: #0000FF;">PRINT</span> IS<span style="color: #808080;">NULL(</span>@sqlCommand, <span style="color: #FF0000;">'error!'</span><span style="color: #808080;">)</span>;

                <span style="color: #0000FF;">UPDATE</span> dbo.<span style="color: #202020;">dba_indexDefragStatus</span>
                <span style="color: #0000FF;">SET</span> printStatus <span style="color: #808080;">=</span> <span style="color: #000;">1</span>
                <span style="color: #0000FF;">WHERE</span> databaseID       <span style="color: #808080;">=</span> @databaseID
                  <span style="color: #808080;">AND</span> objectID         <span style="color: #808080;">=</span> @objectID
                  <span style="color: #808080;">AND</span> indexID          <span style="color: #808080;">=</span> @indexID
                  <span style="color: #808080;">AND</span> partitionNumber  <span style="color: #808080;">=</span> @partitionNumber;
            <span style="color: #0000FF;">END</span>

        <span style="color: #0000FF;">END</span>

        <span style="color: #008080;">/* Do we want to output our fragmentation results? */</span>
        <span style="color: #0000FF;">IF</span> @printFragmentation <span style="color: #808080;">=</span> <span style="color: #000;">1</span>
        <span style="color: #0000FF;">BEGIN</span>

            <span style="color: #0000FF;">IF</span> @debugMode <span style="color: #808080;">=</span> <span style="color: #000;">1</span> <span style="color: #0000FF;">RAISERROR</span><span style="color: #808080;">(</span><span style="color: #FF0000;">'  Displaying a summary of our action...'</span>, <span style="color: #000;">0</span>, <span style="color: #000;">42</span><span style="color: #808080;">)</span> <span style="color: #0000FF;">WITH</span> NOWAIT;

            <span style="color: #0000FF;">SELECT</span> databaseID
                , databaseName
                , objectID
                , objectName
                , indexID
                , indexName
                , partitionNumber
                , fragmentation
                , page_count
                , range_scan_count
            <span style="color: #0000FF;">FROM</span> dbo.<span style="color: #202020;">dba_indexDefragStatus</span>
            <span style="color: #0000FF;">WHERE</span> defragDate <span style="color: #808080;">>=</span> @startdatetime
            <span style="color: #0000FF;">ORDER</span> <span style="color: #0000FF;">BY</span> defragDate;

        <span style="color: #0000FF;">END</span>;

    <span style="color: #0000FF;">END</span> TRY
    <span style="color: #0000FF;">BEGIN</span> CATCH

        <span style="color: #0000FF;">SET</span> @debugMessage <span style="color: #808080;">=</span> ERR<span style="color: #808080;">OR</span>_MESSAGE<span style="color: #808080;">()</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">' (Line Number: '</span> <span style="color: #808080;">+</span> <span style="color: #0000FF;">CAST</span><span style="color: #808080;">(</span>ERR<span style="color: #808080;">OR</span>_L<span style="color: #808080;">IN</span>E<span style="color: #808080;">()</span> <span style="color: #0000FF;">AS</span> <span style="color: #0000FF;">VARCHAR</span><span style="color: #808080;">(</span><span style="color: #000;">10</span><span style="color: #808080;">))</span> <span style="color: #808080;">+</span> <span style="color: #FF0000;">')'</span>;
        <span style="color: #0000FF;">PRINT</span> @debugMessage;

    <span style="color: #0000FF;">END</span> CATCH;

    <span style="color: #008080;">/* When everything is said and done, make sure to get rid of our temp table */</span>
    <span style="color: #0000FF;">DROP</span> <span style="color: #0000FF;">TABLE</span> #databaseList;
    <span style="color: #0000FF;">DROP</span> <span style="color: #0000FF;">TABLE</span> #processor;
    <span style="color: #0000FF;">DROP</span> <span style="color: #0000FF;">TABLE</span> #maxPartitionList;

    <span style="color: #0000FF;">IF</span> @debugMode <span style="color: #808080;">=</span> <span style="color: #000;">1</span> <span style="color: #0000FF;">RAISERROR</span><span style="color: #808080;">(</span><span style="color: #FF0000;">'DONE!  Thank you for taking care of your indexes!  :)'</span>, <span style="color: #000;">0</span>, <span style="color: #000;">42</span><span style="color: #808080;">)</span> <span style="color: #0000FF;">WITH</span> NOWAIT;

    <span style="color: #0000FF;">SET</span> <span style="color: #0000FF;">NOCOUNT</span> <span style="color: #0000FF;">OFF</span>;
    <span style="color: #0000FF;">RETURN</span> <span style="color: #000;">0</span>;
<span style="color: #0000FF;">END</span></pre>

</div>

</div>

<div>[SQL 2005 - 2008 code.](#profile2 "SQL 2005 - 2008 R2")</div>

<div class="hidden" id="inline_profiles">

<div class="profilex" id="profile2">

<pre class="pre">SQL 2005 - 2008 R2</pre>

<pre class="pre"><span style="color:green;">/* Originally created by Microsoft */

			/* Error corrected by Pinal Dave (http://www.SQLAuthority.com) */

			-- Specify your Database Name</span>

			<span style="color:blue;">USE </span><span style="color:black;"> AdventureWorks</span><span style="color:gray;">;</span>

			<span style="color:black;">GO</span>

			<span style="color:green;">-- Declare variables</span>

			<span style="color:blue;">SET</span> <span style="color:black;">NOCOUNT</span> <span style="color:blue;">ON</span><span style="color:gray;">;</span>

			<span style="color:blue;">DECLARE </span><span style="color:#434343;">@tablename</span> <span style="color:blue;">VARCHAR</span><span style="color:gray;">(</span><span style="color:black;">128</span><span style="color:gray;">);</span>

			<span style="color:blue;">DECLARE </span><span style="color:#434343;">@execstr</span> <span style="color:blue;">VARCHAR</span><span style="color:gray;">(</span><span style="color:black;">255</span><span style="color:gray;">);</span>

			<span style="color:blue;">DECLARE </span><span style="color:#434343;">@objectid</span> <span style="color:blue;">INT</span><span style="color:gray;">;</span>

			<span style="color:blue;">DECLARE </span><span style="color:#434343;">@indexid</span> <span style="color:blue;">INT</span><span style="color:gray;">;</span>

			<span style="color:blue;">DECLARE </span><span style="color:#434343;">@frag</span> <span style="color:black;">decimal</span><span style="color:gray;">;</span>

			<span style="color:blue;">DECLARE </span><span style="color:#434343;">@maxfrag</span> <span style="color:black;">decimal</span><span style="color:gray;">;</span>

			<span style="color:green;">-- Decide on the maximum fragmentation to allow for.</span>

			<span style="color:blue;">SELECT </span><span style="color:#434343;">@maxfrag</span> <span style="color:blue;">= </span><span style="color:black;"> 30.0</span><span style="color:gray;">;</span>

			<span style="color:green;">-- Declare a cursor.</span>

			<span style="color:blue;">DECLARE </span><span style="color:black;">tables</span> <span style="color:blue;">CURSOR FOR

			SELECT</span> <span style="color:magenta;">CAST</span><span style="color:gray;">(</span><span style="color:black;">TABLE_SCHEMA</span> <span style="color:blue;">AS VARCHAR</span><span style="color:gray;">(</span><span style="color:black;">100</span><span style="color:gray;">))

			+</span><span style="color:red;">'.'</span><span style="color:gray;">+</span><span style="color:magenta;">CAST</span><span style="color:gray;">(</span><span style="color:black;">TABLE_NAME</span> <span style="color:blue;">AS VARCHAR</span><span style="color:gray;">(</span><span style="color:black;">100</span><span style="color:gray;">))</span>

			<span style="color:blue;">AS</span> <span style="color:black;">Table_Name</span>

			<span style="color:blue;">FROM </span><span style="color:black;"> INFORMATION_SCHEMA.TABLES</span>

			<span style="color:blue;">WHERE </span><span style="color:black;">TABLE_TYPE</span> <span style="color:blue;">= </span><span style="color:red;"> 'BASE TABLE'</span><span style="color:gray;">;</span>

			<span style="color:green;">-- Create the table.</span>

			<span style="color:blue;">CREATE TABLE </span> <span style="color:#434343;">#fraglist</span> <span style="color:gray;">(</span>

			<span style="color:black;">ObjectName </span><span style="color:blue;"> CHAR</span><span style="color:gray;">(</span><span style="color:black;">255</span><span style="color:gray;">),</span>

			<span style="color:black;">ObjectId</span> <span style="color:blue;">INT</span><span style="color:gray;">,</span>

			<span style="color:black;">IndexName </span><span style="color:blue;"> CHAR</span><span style="color:gray;">(</span><span style="color:black;">255</span><span style="color:gray;">),</span>

			<span style="color:black;">IndexId</span> <span style="color:blue;">INT</span><span style="color:gray;">,</span>

			<span style="color:black;">Lvl</span> <span style="color:blue;">INT</span><span style="color:gray;">,</span>

			<span style="color:black;">CountPages </span><span style="color:blue;"> INT</span><span style="color:gray;">,</span>

			<span style="color:black;">CountRows</span> <span style="color:blue;">INT</span><span style="color:gray;">,</span>

			<span style="color:black;">MinRecSize </span><span style="color:blue;"> INT</span><span style="color:gray;">,</span>

			<span style="color:black;">MaxRecSize </span><span style="color:blue;"> INT</span><span style="color:gray;">,</span>

			<span style="color:black;">AvgRecSize </span><span style="color:blue;"> INT</span><span style="color:gray;">,</span>

			<span style="color:black;">ForRecCount </span><span style="color:blue;"> INT</span><span style="color:gray;">,</span>

			<span style="color:black;">Extents</span> <span style="color:blue;">INT</span><span style="color:gray;">,</span>

			<span style="color:black;">ExtentSwitches </span> <span style="color:blue;">INT</span><span style="color:gray;">,</span>

			<span style="color:black;">AvgFreeBytes </span><span style="color:blue;"> INT</span><span style="color:gray;">,</span>

			<span style="color:black;">AvgPageDensity </span> <span style="color:blue;">INT</span><span style="color:gray;">,</span>

			<span style="color:black;">ScanDensity decimal</span><span style="color:gray;">,</span>

			<span style="color:black;">BestCount</span> <span style="color:blue;">INT</span><span style="color:gray;">,</span>

			<span style="color:black;">ActualCount </span><span style="color:blue;"> INT</span><span style="color:gray;">,</span>

			<span style="color:black;">LogicalFrag decimal</span><span style="color:gray;">,</span>

			<span style="color:black;">ExtentFrag decimal</span><span style="color:gray;">);</span>

			<span style="color:green;">-- Open the cursor.</span>

			<span style="color:blue;">OPEN</span> <span style="color:black;">tables</span><span style="color:gray;">;</span>

			<span style="color:green;">-- Loop through all the tables in the database.</span>

			<span style="color:blue;">FETCH</span> <span style="color:black;">NEXT</span>

			<span style="color:blue;">FROM</span> <span style="color:black;">tables</span>

			<span style="color:blue;">INTO </span><span style="color:#434343;"> @tablename</span><span style="color:gray;">;</span>

			<span style="color:blue;">WHILE </span><span style="color:#434343;">@@FETCH_STATUS</span> <span style="color:blue;">= </span> <span style="color:black;">0</span>

			<span style="color:blue;">BEGIN</span><span style="color:gray;">;</span>

			<span style="color:green;">-- Do the showcontig of all indexes of the table</span>

			<span style="color:blue;">INSERT INTO </span> <span style="color:#434343;">#fraglist</span>

			<span style="color:blue;">EXEC</span> <span style="color:gray;">(</span><span style="color:red;">'DBCC SHOWCONTIG ('''</span> <span style="color:gray;">+ </span><span style="color:#434343;">@tablename</span> <span style="color:gray;">+ </span><span style="color:red;"> ''')

			WITH FAST, TABLERESULTS, ALL_INDEXES, NO_INFOMSGS'</span><span style="color:gray;">);</span>

			<span style="color:blue;">FETCH</span> <span style="color:black;">NEXT</span>

			<span style="color:blue;">FROM</span> <span style="color:black;">tables</span>

			<span style="color:blue;">INTO </span><span style="color:#434343;"> @tablename</span><span style="color:gray;">;</span>

			<span style="color:blue;">END</span><span style="color:gray;">;</span>

			<span style="color:green;">-- Close and deallocate the cursor.</span>

			<span style="color:blue;">CLOSE</span> <span style="color:black;">tables</span><span style="color:gray;">;</span>

			<span style="color:blue;">DEALLOCATE </span><span style="color:black;"> tables</span><span style="color:gray;">;</span>

			<span style="color:green;">-- Declare the cursor for the list of indexes to be defragged.</span>

			<span style="color:blue;">DECLARE </span><span style="color:black;">indexes</span> <span style="color:blue;">CURSOR FOR

			SELECT</span> <span style="color:black;">ObjectName</span><span style="color:gray;">,</span> <span style="color:black;">ObjectId</span><span style="color:gray;">,</span> <span style="color:black;">IndexId</span><span style="color:gray;">,</span> <span style="color:black;">LogicalFrag</span>

			<span style="color:blue;">FROM </span><span style="color:#434343;"> #fraglist</span>

			<span style="color:blue;">WHERE </span><span style="color:black;">LogicalFrag</span> <span style="color:gray;">>= </span> <span style="color:#434343;">@maxfrag</span>

			<span style="color:gray;">AND </span><span style="color:magenta;">INDEXPROPERTY</span> <span style="color:gray;">(</span><span style="color:black;">ObjectId</span><span style="color:gray;">,</span> <span style="color:black;">IndexName</span><span style="color:gray;">,</span> <span style="color:red;">'IndexDepth'</span><span style="color:gray;">) ></span> <span style="color:black;">0</span><span style="color:gray;">;</span>

			<span style="color:green;">-- Open the cursor.</span>

			<span style="color:blue;">OPEN</span> <span style="color:black;">indexes</span><span style="color:gray;">;</span>

			<span style="color:green;">-- Loop through the indexes.</span>

			<span style="color:blue;">FETCH</span> <span style="color:black;">NEXT</span>

			<span style="color:blue;">FROM</span> <span style="color:black;">indexes</span>

			<span style="color:blue;">INTO </span><span style="color:#434343;"> @tablename</span><span style="color:gray;">, </span> <span style="color:#434343;">@objectid</span><span style="color:gray;">, </span> <span style="color:#434343;">@indexid</span><span style="color:gray;">, </span> <span style="color:#434343;">@frag</span><span style="color:gray;">;</span>

			<span style="color:blue;">WHILE </span><span style="color:#434343;">@@FETCH_STATUS</span> <span style="color:blue;">= </span> <span style="color:black;">0</span>

			<span style="color:blue;">BEGIN</span><span style="color:gray;">;</span>

			<span style="color:blue;">PRINT </span><span style="color:red;">'Executing DBCC INDEXDEFRAG (0, '</span> <span style="color:gray;">+ </span> <span style="color:magenta;">RTRIM</span><span style="color:gray;">(</span><span style="color:#434343;">@tablename</span><span style="color:gray;">) +</span> <span style="color:red;">',

			'</span> <span style="color:gray;">+</span> <span style="color:magenta;">RTRIM</span><span style="color:gray;">(</span><span style="color:#434343;">@indexid</span><span style="color:gray;">) +</span> <span style="color:red;">') - fragmentation currently '</span>

			<span style="color:gray;">+</span> <span style="color:magenta;">RTRIM</span><span style="color:gray;">(</span><span style="color:magenta;">CONVERT</span><span style="color:gray;">(</span><span style="color:blue;">VARCHAR</span><span style="color:gray;">(</span><span style="color:black;">15</span><span style="color:gray;">),</span><span style="color:#434343;">@frag</span><span style="color:gray;">)) +</span> <span style="color:red;">'%'</span><span style="color:gray;">;</span>

			<span style="color:blue;">SELECT </span><span style="color:#434343;">@execstr</span> <span style="color:blue;">= </span><span style="color:red;">'DBCC INDEXDEFRAG (0, '</span> <span style="color:gray;">+ </span> <span style="color:magenta;">RTRIM</span><span style="color:gray;">(</span><span style="color:#434343;">@objectid</span><span style="color:gray;">) +</span> <span style="color:red;">',

			'</span> <span style="color:gray;">+</span> <span style="color:magenta;">RTRIM</span><span style="color:gray;">(</span><span style="color:#434343;">@indexid</span><span style="color:gray;">) +</span> <span style="color:red;">')'</span><span style="color:gray;">;</span>

			<span style="color:blue;">EXEC</span> <span style="color:gray;">(</span><span style="color:#434343;">@execstr</span><span style="color:gray;">);</span>

			<span style="color:blue;">FETCH</span> <span style="color:black;">NEXT</span>

			<span style="color:blue;">FROM</span> <span style="color:black;">indexes</span>

			<span style="color:blue;">INTO </span><span style="color:#434343;"> @tablename</span><span style="color:gray;">, </span> <span style="color:#434343;">@objectid</span><span style="color:gray;">, </span> <span style="color:#434343;">@indexid</span><span style="color:gray;">, </span> <span style="color:#434343;">@frag</span><span style="color:gray;">;</span>

			<span style="color:blue;">END</span><span style="color:gray;">;</span>

			<span style="color:green;">-- Close and deallocate the cursor.</span>

			<span style="color:blue;">CLOSE</span> <span style="color:black;">indexes</span><span style="color:gray;">;</span>

			<span style="color:blue;">DEALLOCATE </span><span style="color:black;"> indexes</span><span style="color:gray;">;</span>

			<span style="color:green;">-- Delete the temporary table.</span>

			<span style="color:blue;">DROP TABLE </span><span style="color:#434343;"> #fraglist</span><span style="color:gray;">;</span>

			<span style="color:black;">GO</span></pre>

## MSDN Books OnLine DBCC INDEXDEFRAG (Transact-SQL)

<pre class="pre">DBCC INDEXDEFRAG
(
    { database_name | database_id | 0 } 
    , { table_name | table_id | view_name | view_id } 
    [ , { index_name | index_id } [ , { partition_number | 0 } ] ]
)
    [ WITH NO_INFOMSGS ] </pre>

</div>

</div>

* * *

[SQL Server DBCC INDEXDEFRAG code.](#profile3 "SQL Server DBCC INDEXDEFRAG code")

<div class="hidden" id="inline_profiles">

<div class="profilex" id="profile3">

<pre class="pre">SQL Server DBCC INDEXDEFRAG code</pre>

<pre class="pre">/*Perform a 'USE <database name>' to select the database in which to run the script.*/
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
GO</pre>

</div>

</div>

* * *

<div>

<div class="sectionblock">

<dl class="authored">

<dt>Info</dt>

<dt><span><span class="parameter">database_name</span>| <span class="parameter">database_id</span> | 0</span></dt>

<dd>Is the database containing the index to defragment. If 0 is specified, the current database is used. Database names must comply with the rules for [identifiers](http://msdn.microsoft.com/en-us/library/ms175874.aspx).</dd>

<dt><span><span class="parameter">table_name</span> | <span class="parameter">table_id</span> | <span class="parameter">view_name</span> | <span class="parameter">view_id</span></span></dt>

<dd>Is the table or view containing the index to defragment. Table and view names must comply with the rules for identifiers.</dd>

<dt><span><span class="parameter">index_name</span> | <span class="parameter">index_id</span></span></dt>

<dd>Is the name or ID of the index to defragment. If not specified, the statement defragments all indexes of the specified table or view. Index names must comply with the rules for identifiers.</dd>

<dt><span><span class="parameter">partition_number</span> | 0</span></dt>

<dd>Is the partition number of the index to defragment. If not specified or if 0 is specified, the statement defragments all partitions in the specified index.</dd>

<dt><span>WITH NO_INFOMSGS</span></dt>

<dd>Suppresses all informational messages that have severity levels from 0 through 10.</dd>

</dl>

</div>

</div>

<div>

<div class="LW_CollapsibleArea_TitleDiv">

<div><a class="LW_CollapsibleArea_TitleAhref" title="Collapse"><span class="LW_CollapsibleArea_Title">Remarks</span></a>

<div class="LW_CollapsibleArea_HrDiv">

* * *

</div>

</div>

</div>

<div class="sectionblock"><a id="languageReferenceRemarksToggle"></a>

DBCC INDEXDEFRAG defragments the leaf level of an index so that the physical order of the pages matches the left-to-right logical order of the leaf nodes, therefore improving index-scanning performance.

<div class="alert">

<table>

<tbody>

<tr>

<th class="float-left">**Note**</th>

</tr>

<tr>

<td>

When DBCC INDEXDEFRAG is run, index defragmentation occurs serially. This means that the operation on a single index is performed using a single thread. No parallelism occurs. Also, operations on multiple indexes from the same DBCC INDEXDEFRAG statement are performed on one index at a time.

</td>

</tr>

</tbody>

</table>

</div>

DBCC INDEXDEFRAG also compacts the pages of an index, taking into consideration the fill factor specified when the index was created. Any empty pages created because of this compaction are removed. For more information, see <span>[Specify Fill Factor for an Index](http://msdn.microsoft.com/en-us/library/ms177459.aspx)</span>.

If an index spans more than one file, DBCC INDEXDEFRAG defragments one file at a time. Pages do not migrate between files.

DBCC INDEXDEFRAG reports the estimated percentage completed every five minutes. DBCC INDEXDEFRAG can be stopped at any point in the process, and any completed work is retained.

Unlike DBCC DBREINDEX, or the index building operation generally, DBCC INDEXDEFRAG is an online operation. It does not hold locks long term. Therefore, DBCC INDEXDEFRAG does not block running queries or updates. Because the time to defragment is related to the level of fragmentation, a relatively unfragmented index can be defragmented faster than a new index can be built. A very fragmented index might take considerably longer to defragment than to rebuild.

The defragmentation is always fully logged, regardless of the database recovery model setting. For more information, see <span>[ALTER DATABASE (Transact-SQL)](http://msdn.microsoft.com/en-us/library/ms174269.aspx)</span>. The defragmentation of a very fragmented index can generate more log than a fully logged index creation. However, the defragmentation is performed as a series of short transactions, so a large log is unnecessary if log backups are taken frequently or if the recovery model setting is SIMPLE.

### Restrictions

<div class="subsection">

DBCC INDEXDEFRAG shuffles index leaf pages in place. Therefore, if an index is interleaved with other indexes on disk, running DBCC INDEXDEFRAG against that index does not make all leaf pages in the index contiguous. To improve the clustering of pages, rebuild the index.

DBCC INDEXDEFRAG cannot be used to defragment the following indexes:

*   A disabled index.

*   An index with page locking set to OFF.

*   A spatial index.

DBCC INDEXDEFRAG is not supported for use on system tables.

</div>

</div>

</div>
