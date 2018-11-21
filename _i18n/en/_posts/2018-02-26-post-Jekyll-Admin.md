---
layout: single
permalink: 2018-02-26-post-Jekyll-Admin.html
author_profile: true
read_time: true
comments: true
share: false
side_react: true
side_react: true
web-intents: false
tweet_id: 1027613282729975808
social-share: twitter --twitter-hashtags facebook
sidenav: true
adds: true
cookies: true
reviews: true
anchor: true
title: Jekyll Admin
date: 2018-02-26 16:16:01 -0600
last_modified_at: 2018-04-13T12:42:38-04:00
search: true
author: Donald Boulton
related: true
tags:
  - Jekyll
  - Jekyll Admin
category:
  - Jekyll
  - Admin

toc: true
toc_label: "Admin Contents"

image:
  cover: true
  path: &image /assets/images/jekyll-admin.jpg
  feature: *image
  thumbnail: /assets/images/jekyll-admin-320.jpg
header:
  image: /assets/images/jekyll-admin-1200.jpg
  teaser: /assets/images/jekyll-admin-320.jpg

excerpt: "Jekyll admin makes it so easy for me to add new pages, posts or any type of content, including file management, adding images to .md pages and Changing Configuration."

support: [adds, cookies]
folder: _posts
product: jekyll-admin
slug: jekyll-admin
github_editme_path: donaldboulton/DWB/blob/gh-pages/_i18n/en/_posts/2018-02-26-post-Jekyll-Admin.md
---

{% include octo-arm.html %}
{% include page-intro.html %}

# Local Host Admin

Cannot stop myself from opening VS 2017 to do work. When I get it down I will be doing alot of bundle exec jekyll serve and then going to my root and going to Jekyll Admin to build my sites as /admin.

Jekyll admin makes it so easy for me to add new pages, posts or any type of content, including file management, adding images to .md pages and Changing Configuration.

A Jekyll plugin that provides users with a traditional CMS-style graphical interface to author content and administer Jekyll sites. The project is divided into two parts. A Ruby-based HTTP API that handles Jekyll and filesystem operations, and a Javascript-based front end, built on that API.

## Installation

To install locally

```html
git clone https://github.com/jekyll/jekyll-admin && cd jekyll-admin
script/bootstrap
```

This will copy down the code and install all Node and Ruby dependencies.

Running tests
script/cibuild

This will run both Node and Ruby tests.

You can run one or the other with script/cibuild-node and script/cibuild-ruby.

Running Jekyll Admin locally
There is a site in spec/fixtures/site, with some dummy content. Both local development servers below use that site’s dummy content for development. Feel free to make any changes you’d like, just don’t commit them, unless you’re adding a new fixture (e.g., for a test).

Running a test server with a dummy site
If you just want to click around and see how things work, or if you’re making changes to the Ruby back end side of things, this is probably what you want.

Run script/build to compile the static frontend
Run script/test-server to start the server
Open:

```html
https://localhost:4000/admin
```

in your browser

```html
(or https://localhost:4000/_api)
```

Running the front end server in development mode
script/server-frontend

This will run the front end server via Node’s development stack, meaning changes will be reloaded on subsequent requests and is generally useful when making changes to the front end side of things. In the background, it’s also going to call script/test-server for you, so that the front end has an API that it can make calls to.

Note: Node version should be >= v6.0.0

Running installation/test scripts on Windows
You are going to need a Unix-like environment. The best choice would be Git Bash which comes with the Git Windows Installation or MSYS. Try to avoid any POSIX compliant software (e.g. Cygwin) that will get you in trouble.

The environment flag
When developing locally, it can be helpful to see error backtraces, disable template caching, have expanded request logs, and to allow cross-origin requests between the Ruby server and the Node server. By default, however, JekyllAdmin runs in production mode, meaning these developmen

Usage
Start Jekyll as you would normally (bundle exec jekyll serve)
Navigate to:

```html
https://localhost:4000/admin to access the administrative interface
```

Jekyll Admin related options can be specified in _config.yml under a key called jekyll_admin.

## Config Options

hidden_links
For hiding unwanted links on the sidebar.

The following keys under hidden_links can be used in order to hide default links:

```yaml
jekyll_admin:
  hidden_links:
    - posts
    - pages
    - staticfiles
    - datafiles
    - configuration
```

### Api

The below are the documented endpoints of the shared HTTP API. All requests and responses are made in JSON, and should follow RESTful standards, including respecting HTTP verbs.

For simplicity, whenever possible, the API mirrors Jekyll internal data structures, meaning, objects are generally the results of calling .to_liquid.to_json on an existing Jekyll model (and the resulting fields).

The API is exposed as:

```html
https://localhost:4000/_api
```

(or whatever server/port your Jekyll installation is running on).

Note: Prior to version 1.0.0, the HTTP API is to be considered a pre-release API, and is subject to breaking changes without notice. You’re welcome (and are encouraged) to build external tools or apps against this API, but as the API is refined and finalized, it may not strictly follow Semantic Versioning standards.

API Request and response payloads
Pages and Documents
Pages and documents are JSON objects resulting from calling to_liquid.to_json on the underlying Jekyll object.

The resulting JSON object has the following structure:

Top level keys are keys with special meaning. This includes:
Computed, read-only keys like url
Computed, read/write keys like path
Front matter defaults
The top-level namespace will have content and raw_content keys with the HTML and markdown respectively
The top-level namespace will have a front_matter key which includes the raw front matter as seen on disk.
A standard page may then look like this:

```json
{
   "some_front_matter":"default",
   "foo":"bar",
   "content":"<h1 id=\"test-page\">Test Page</h1>\n",
   "dir":"/",
   "name":"page.md",
   "path":"page.md",
   "url":"/page.html",
   "raw_content":"# Test Page\n",
   "front_matter":{
      "foo":"bar"
   }
}
```

When making a request, clients can set the following top-level fields:

raw_content - the raw, unrendered content to be written to disk (currently body)
front_matter - the entire YAML front matter object to be written to disk (currently meta)
path - the new file path relative to the site source, if the file is to be renamed
Pages & Documents in subdirectories
In order to determine which pages and documents are in which subdirectories, API looks for the project’s file structure and lists all files and directories at a given path together. Directories are represented as JSON objects resulting from calling JekyllAdmin::Directory.new. The resulting JSON objects then merged with pages/documents at the same level to be served in index endpoints.

A standard JSON object of a directory looks like this:

```json
{
  "name": "test",
  "modified_time": "2017-02-02 23:48:11 +0200",
  "path": "_posts/test",
  "type": "directory",
  "http_url": null,
  "api_url": "https://localhost:4000/_api/collections/posts/entries/test"
},
```

Data files and the config file
Data files are a direct JSON representations of the underlying YAML File. A JSON object from the config file has the data segregated into two representations:

content - the parsed configuration data as read by Jekyll.
raw_content - the raw data as it sits on the disk.
Data files in subdirectories
Like Pages and Documents, Data files in subdirectories too can be requested for. The resulting JSON object is very similar to the that derived from Pages and Documents.

A JSON object from a Data file subdirectory looks like this:

```json
{
  "name": "books",
  "modified_time": "2017-04-22 10:16:40 +0200",
  "path": "books",
  "type": "directory",
  "http_url": null,
  "api_url": "https://localhost:4000/_api/data/books/"
}
```

A GET call to the api_url will return another JSON object for the constituents of the directory:

```json
[
  {
    "name": "genres",
    "modified_time": "2017-04-22 10:07:10 +0200",
    "path": "books/genres",
    "type": "directory",
    "http_url": null,
    "api_url": "https://localhost:4000/_api/data/books/genres/"
  },
  {
    "path": "/_data/books/authors.yml",
    "relative_path": "books/authors.yml",
    "slug": "authors",
    "ext": ".yml",
    "title": "Authors",
    "http_url": null,
    "api_url": "https://localhost:4000/_api/data/books/authors.yml"
  }
]
```

### Static files

Static files are non-Jekyll files and may be binary or text.

Collections
Parameters
collection_name - the name of the collection, e.g., posts (String)
path - the filename of a document, relative to the collection root (e.g., 2016-01-01-some-post.md or rover.md) (String)
raw_content - the document body (String)
front_matter - the document’s YAML front matter (Object)
GET /collections/
Returns an array of the registered collections.

GET /collections/:collection_name
Returns information about the requested collection.

GET /collections/:collection_name/entries/:path
Returns an array of documents and directories for the requested path. The response does not include documents’ body.

GET /collections/:collection_name/:path
Returns the requested document. The response includes the document body.

PUT /collections/:collection_name/:path
Create or update the requested document, writing its contents to disk.

DELETE /collections/:collection_name/:path
Delete the requested document from disk.

Pages
Parameters
path - The file’s path, relative to the site root (e.g., about.html) (String)
raw_content - the page’s body (String)
front_matter - the page’s YAML front matter (Object)
GET /pages/:path
Returns an array of pages and directories for the requested path. If path is not provided, entries at the root level are returned. The response does not include pages’ body.

GET /pages/:path/:filename
Returns the requested page. The response includes the page body. path is optional.

PUT /pages/:path
Create or update the requested page, writing its contents to disk.

DELETE /pages/:path
Delete the requested page from disk.

Drafts
The end-points for drafts are modelled similar to Pages even though the resource inherently belongs to a Posts collection.

Parameters
directory - the optional sub-directory for a draft, relative to _drafts at the site root (e.g., draft-dir) (String).
filename - the draft’s filename.
raw_content - the drafts’s body (String)
front_matter - the drafts’s YAML front matter (Object)
While path for a sub-directory, is the same as the parameter directory itself, for a draft-file, it is the entire path relative to the site’s root

GET /drafts/:directory
Returns an array of drafts and directories for the requested directory path. If directory is not provided, entries at the root level (./_drafts/*) are returned.

The response does not include drafts’ body.

Example response:

```json
GET /drafts
[
  {
    "name": "draft-dir",
    "modified_time": "2017-09-24 19:08:41 -0400",
    "path": "draft-dir",
    "type": "directory",
    "http_url": null,
    "api_url": "https://localhost:4000/_api/drafts/draft-dir"
  },
  {
    "path": "_drafts/draft-post.md",
    "id": "/2017/09/24/draft-post",
    "url": "/2017/09/24/draft-post.html",
    "relative_path": "draft-post.md",
    "collection": "posts",
    "draft": true,
    "categories": [

    ],
    "all": true,
    "foo": "bar",
    "title": "Draft Post",
    "slug": "draft-post",
    "ext": ".md",
    "tags": [

    ],
    "date": "2017-09-24 18:03:49 -0400",
    "http_url": "https://localhost:4000/2017/09/24/draft-post.html",
    "api_url": "https://localhost:4000/_api/drafts/draft-post.md",
    "name": "draft-post.md"
  }
]
```

GET /drafts/:directory/:filename
Returns the requested draft. The response includes the draft body.

Example response
GET /drafts/draft-dir/another-draft-post.md

```json
{
  "next": {
    "path": "_drafts/draft-post.md",
    "id": "/2017/09/24/draft-post",
    "url": "/2017/09/24/draft-post.html",
    "relative_path": "draft-post.md",
    "collection": "posts",
    "draft": true,
    "categories": [],
    "all": true,
    "foo": "bar",
    "title": "Draft Post",
    "slug": "draft-post",
    "ext": ".md",
    "tags": [],
    "date": "2017-09-24 18:03:49 -0400",
    "http_url": "https://localhost:4000/2017/09/24/draft-post.html",
    "api_url": "https://localhost:4000/_api/drafts/draft-post.md",
    "name": "draft-post.md"
  },
  "path": "_drafts/draft-dir/another-draft-post.md",
  "previous": {
    "path": "_drafts/draft-dir/WIP/yet-another-draft-post.md",
    "id": "/2017/09/24/yet-another-draft-post",
    "url": "/2017/09/24/yet-another-draft-post.html",
    "relative_path": "draft-dir/WIP/yet-another-draft-post.md",
    "collection": "posts",
    "draft": true,
    "categories": [],
    "all": true,
    "foo": "bar",
    "title": "Yet Another Draft Post",
    "slug": "yet-another-draft-post",
    "ext": ".md",
    "tags": [],
    "date": "2017-09-24 18:03:49 -0400",
    "http_url": "https://localhost:4000/2017/09/24/yet-another-draft-post.html",
    "api_url": "https://localhost:4000/_api/drafts/draft-dir/WIP/yet-another-draft-post.md",
    "name": "yet-another-draft-post.md"
  },
  "content": "<h1 id=\"another-draft-post\">Another Draft Post</h1>\n",
  "id": "/2017/09/24/another-draft-post",
  "url": "/2017/09/24/another-draft-post.html",
  "relative_path": "draft-dir/another-draft-post.md",
  "collection": "posts",
  "excerpt": "<h1 id=\"another-draft-post\">Another Draft Post</h1>\n",
  "draft": true,
  "categories": [],
  "all": true,
  "foo": "bar",
  "title": "Another Draft Post",
  "slug": "another-draft-post",
  "ext": ".md",
  "tags": [],
  "date": "2017-09-24 18:03:49 -0400",
  "http_url": "https://localhost:4000/2017/09/24/another-draft-post.html",
  "api_url": "https://localhost:4000/_api/drafts/draft-dir/another-draft-post.md",
  "raw_content": "# Another Draft Post\n",
  "front_matter": {
    "foo": "bar"
  },
  "name": "another-draft-post.md"
}
```

PUT /drafts/:directory/:filename
Create or update the requested page, writing its contents to disk.

DELETE /drafts/:directory/:filename
Delete the requested page from disk.

Configuration
GET /configuration
Returns a hash object comprised of the parsed configuration from the file and the raw unparsed content of the file.

PUT /configuration
Create or update the site’s _config.yml file with the requested raw file content string.

File will be written to disk verbatim, preserving whitespace and inline comments.

Static files
Parameters
path - the path to the file or directory, relative to the site root (String)
raw_content - The raw, text-based content to be written directly to disk (String)
encoded_content - The Base64 encoded text or binary content (String)
Example response:

```json
{
  "extname": ".txt",
  "modified_time": "2016-08-10 18:05:45 -0400",
  "path": "/test.txt",
  "encoded_content": "dGVzdA==\n"
}
```

Note: The encoded_content field is the Base64 encoded representation of the file’s content.

GET /static_files/:path
Returns the requested static file.

If the path maps to a directory, it list all static files in the directory. This does not include documents, pages, etc.

PUT /static_files/:path
Create or update a static file on disk. This can be an arbitrary ASCII or a binary file (e.g., an image).

DELETE /static_files/:path
Delete a static file from disk.

### Data files

Payload
A standard data payload may look like:

```json
{
  "path": "_data/data_file.yml",
  "relative_path": "_data/data_file.yml",
  "slug": "data_file",
  "ext": ".yml",
  "title": "Data File",
  "raw_content": "foo: bar\n",
  "content": {
    "foo": "bar"
  }
}
```

### Parameters

data_file - File path relative to the _data folder (String). If no extension is given, defaults to .yml
content - The JSON encoded YAML object to write to disk as the file’s content
raw_content - The raw string representing the file’s content to write to disk
GET /data
Returns an array of data files. Does not include the file contents.

GET /data/:data_file
Returns the requested, parsed data file.

PUT /data/:data_file
Create or update the requested data file with the requested contents.

File will be written to disk in YAML. It will necessarily preserve whitespace or in-line comments.

DELETE /data/:data_file
Remove the requested data file from disk.

Git operations
NOTE: Git API will be available in the future releases

Parameters
remote - the git remote to act against, defaults to origin (String)
branch - the branch to act against, defaults to master (String)
GET /git/status
Returns information about the current working tree.

GET /git/pull
Pull changes from the remote and branch.

PUT /git/commit
Commit the local changes.

POST /git/push
Push changes to the remote and branch.
