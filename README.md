# [Don Boulton version Of:](https://donboulton.com)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/donaldboulton/DWB)

[![Known Vulnerabilities](https://snyk.io/test/github/donaldboulton/DWB/badge.svg?targetFile=package.json)](https://snyk.io/test/github/donaldboulton/DWB?targetFile=package.json)

## [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/)

[![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/mmistakes/minimal-mistakes/master/LICENSE.txt)
[![Jekyll](https://img.shields.io/badge/jekyll-%3E%3D%203.6-blue.svg)](https://jekyllrb.com/)
[![Tip Me via PayPal](https://img.shields.io/badge/PayPal-tip%20me-green.svg?logo=paypal)](https://www.paypal.me/donaldboulton)

## React Components

All react additions were hand build adding components individually in the DOM for now, soon at root levels. The following node react modules added.

### Menu built with React A11yDialog

react-a11y-dialog is a React component for [a11y-dialog](https://github.com/edenspiekermann/a11y-dialog) relying on [React portals](https://reactjs.org/docs/portals.html) to ease the use of accessible dialog windows in React applications.

### Based on [A11y Dialog](https://www.w3.org/2000/svgedenspiekermann.github.io/a11y-dialog/)

[a11y-dialog](https://www.w3.org/2000/svgedenspiekermann.github.io/a11y-dialog/) is a lightweight (1.3Kb) yet flexible script to create accessible dialog windows.log.

## React Notifications

### React-web-notification [![Build Status](https://travis-ci.org/georgeOsdDev/react-web-notification.svg?branch=develop)](https://travis-ci.org/georgeOsdDev/react-web-notification) [![npm version](https://badge.fury.io/js/react-web-notification.svg)](https://www.w3.org/2000/svgbadge.fury.io/js/react-web-notification)

React component with [HTML5 Web Notification API](https://developer.mozilla.org/en/docs/Web/API/notification).
This component show nothing in dom element, but trigger HTML5 Web Notification API with `render` method in the life cycle of React.js.

### Demo

[View Demo](https://georgeosddev.github.io/react-web-notification/example/)

## Jekyll Webpack boilerplate

Adding a Jekyll boilerplate supercharged with React & Webpack to build modern performant websites (including Progressive Web Apps).
Read more about how this boilerplate has been built: https://medium.com/learning-lab/5-how-i-learnt-webpack-3-and-created-a-jekyll-and-webpack-boilerplate-edd86645fd5e

### Features

#### Improved workflow

* Webpack working along with Jekyll
* BrowserSync live reload

**Optimized Style and SASS**

* SASS Style
* PostCSS Auto Preffixer
* CSS minified
* Critical CSS Path added to the main template (using the command with optim)

**ES6 & Optimization**

* ENV Babel
* JS Webpack minified and Uglified
* ES Lint

**Images optimized**
* Webpack Imagemin, images optimizations

**Write less code**
* Theme color in config
* Favicon generated automatically
* Google Analytics setup in config file (optional)
* Doorbell setup in config file (optional)
* Cookie consent setup in config file (optional)

**SEO Ready**

* SEO Plugin Jekyll
* Sitemap generated

**Write better code**

* Internationalization plugin

**Progressive Web Apps (optional)**

* Generation of the Manifest
* Generation of Service worker

**Easy to deploy**

* Easy deployment with Netlify

## Prerequisites

The following tools should be installed before starting:
* NodeJS, npm
* Ruby, Gem, Bundler
* Jekyll
* React
* Webpack
* Sass

### Webpack Jekyll Example

This repo Webpack build was originally taken from

### Jekyll-webpack-boilerplate Quick start

1. Make sure you have all the prerequisites above installed.
2. Clone this repo using `git clone https://github.com/sandoche/Jekyll-webpack-boilerplate.git`
3. Move to the appropriate directory: `cd Jekyll-webpack-boilerplate`.
4. Run `npm install` and `bundler install` in order to install dependencies and clean the git repo.
5. Run `npm start` to start the development server (or use `npm start`).

### Quick deployment

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sandoche/Jekyll-webpack-boilerplate)

Here is a demo of the Webpack boilerplate Netlify build: https://dazzling-swartz-9738b5.netlify.com

### Development

To start the development server just run  `npm start`

### Folder structure

```md
.
├── 404.html
├── about.md
├── blog.md
├── config <--- This folder contains the different Webpack config files
│   ├── optimization-fix <--- A fix for optimization, do not delete this folder
│   ├── postcss.config.js <--- Post css config
│   ├── sw.config.js <--- The service worker config file
│   ├── webpack.common.js <--- The common Webpack config file for all the environment
│   ├── webpack.dev.js <--- Dev Webpack environment config file
│   ├── webpack.optim.js <--- This is used to add the css critical path in the default template
│   ├── webpack.prod.js <--- Prod Webpack environment config file
│   └── webpack.pwa.js <--- Please edit this file if you want a PWA
├── _config.yml <--- The Jekyll config file that you need to set up
├── Gemfile
├── Gemfile.lock
├── _i18n <--- Contains your posts and data in the language you need (check below how to remove it)
├── _images <--- Put all your images here, you will access them with this path /assets/images/
│   ├── icon.png <--- Replace this with your icon
│   └── large-icon.png <--- Replace this with your Facebook Open Graph picture
├── icon.png <--- Same with this one
├── _includes
├── index.md
├── _layouts
│   ├── amp.html <--- The layout for Accelerated mobile page
│   ├── blog.html
│   ├── home.html
│   ├── page.html
│   └── post.html
├── LICENSE
├── package.json <--- Update this file with your information especially the name which is used for the meta tags
├── README.md
├── _scss <--- Put your partials here
│   └── _default.scss
├── _src <--- This folder contains your JS and SASS entry points
│   ├── index.js
│   ├── index.scss
│   └── template
│       └── default.html <--- Here is the main default template, feel free to edit it but do not delete it
├── webpack.config.js
└── package-lock.json
```

You can see above the basic structure of the boilerplate and the main differences with the official Jekyll folder structure

### Configurations

* The required configurations are all in `_config.yml`
* Also edit `package.json` the name is used in the meta tags
* If you want a `manifest.json` file please edit `config/webpack.pwa.js`
* Replace the different icon by yours in `_images` and in the root folder

### Assets

* SCSS partials should be located in `_scss` for better reading
* Put all your images in `_images` the content of this folder will be moved to the `_site/assets/images` so you can access them with this path `/assets/images/**` in your templates, check the examples
* Put all your JavaScript files inside `_src` and import them from `index.js` or you can also add them as a new entry point in your Webpack configuration file

### Internationalization

* All the posts should be there in inside `_i18n` folder inside its language, check the boilerplate examples
* You can put your variables inside `_i18n/en.yml` (replace en with your language) and call them in your template with `{% t variable_name.sub_variable %}`
* You can remove the plugin by removing `gem 'jekyll-multiple-languages-plugin'` from `gemfile` and `jekyll-multiple-languages-plugin` from `plugins` in `_config.yml`
* We invite you to read the very good [official documentation](https://github.com/Anthony-Gaudino/jekyll-multiple-languages-plugin) of the plugin Jekyll multiple language plugin

## Build

### Optimized website

To build the website run the following line

```sh
npm run build

# or if you want the critical css
npm run build:optim
```

The built website will be in `_site` folder.

You can also run a local server to test it with this command

```sh
npm run serve:dist
```

### PWA

If you want to build a PWA (including the manifest.json and the service worker) run the following. Please ensure to have configured this file `config/webpack.pwa.js`
The built website will be in `_site` folder.

```sh
npm run build:pwa

# or if you want the critical css
npm run build:pwa:optim
```

### Clean assets & \_site folders

This will remove the generated folders

```sh
npm run clean:project
```

## Known issues

* Jekyll watch doesn't reload / rebuild when a translation file is updated inside `_i18n` folder, I recommand to remove `jekyll-multiple-languages-plugin` if you don't want a multi language website and if you want to watch / rebuild faster. Otherwise close and start  `npm run start` to rebuild and see your changes from `_i18n`
* The critical CSS Path may show some weird behavior when the page is loading that is why there are separated npm scripts

## Websites using Jekyll Webpack Boilerplate

* Donald Boulton - https://donboulton.com
* Typster - https://typster.xyz
* TEDxMarseille - https://tedxmarseille.com
* Motive network - https://motive.network
* CoinGenerator - https://coingenerator.sh

## Other documentations

* [Jekyll](https://jekyllrb.com/)
* [Webpack](https://webpack.js.org/)
* [React](https://react.com/) *
* [Jekyll multiple languages plugin](https://github.com/Anthony-Gaudino/jekyll-multiple-languages-plugin)
* [Jekyll SEO tag](https://github.com/jekyll/jekyll-seo-tag)
* [BrowserSync Webpack plugin](https://www.npmjs.com/package/browser-sync-webpack-plugin)
* [PostCSS](https://www.w3.org/2000/svgpostcss.org/)

## Netlify Identity Widget

A component used to authenticate with Netlify's Identity service.
[Live demo](https://identity.netlify.com)

For a lower level library to the underlying [GoTrue](https://github.com/netlify/gotrue) API, see
[gotrue-js](https://github.com/netlify/gotrue-js).

## What is Netlify Identity

Netlify’s Identity service is a plug-and-play microservice for handling site
functionalities like signups, logins, password recovery, user metadata, and
roles. You can use it from single page apps instead of rolling your own, and
integrate with any service that understands JSON Web Tokens (JWTs).

Learn more about this service from this
[blog post](https://www.netlify.com/blog/2017/09/07/introducing-built-in-identity-service-to-streamline-user-management/).

## Netlify CMS

This donboulton.com website is a static website but has a administration backend through Netlify CMS.
Adding custom notifications, events, contacts and updates to Netlify CMS _config.yml

Users that register on this site will be added to My Netlify Contacts, Using Zapper to zap users data to Google Contacts, and to my event calendars and zapped to back my repo for a saved locally contacts.json data file which hashes email addresses and other personal for site and Users security.

Events will be displayed on my [events calendar](https://donboulton.com/events/) calendar.

## Credits

### Creator of Jekyll Framework

**Michael Rose**

- <https://mademistakes.com>
- <https://twitter.com/mmistakes>
- <https://github.com/mmistakes>

### Other

- [Jekyll](https://jekyllrb.com/)
- [jQuery](https://jquery.com/)
- [Susy](https://susy.oddbird.net/)
- [Breakpoint](https://breakpoint-sass.com/)
- [FitVids.JS](https://fitvidsjs.com/)
- [GreedyNav.js](https://github.com/lukejacksonn/GreedyNav)
- [jQuery Smooth Scroll](https://github.com/kswedberg/jquery-smooth-scroll)
- [Lunr](https://lunrjs.com)

---

## License

The MIT License (MIT)

Copyright (c) 2013-2018 Donald Boulton and contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Minimal Mistakes incorporates icons from [The Noun Project](https://thenounproject.com/) 
creators Garrett Knoll, Arthur Shlain, and tracy tam.
Icons are distributed under Creative Commons Attribution 3.0 United States (CC BY 3.0 US).

Minimal Mistakes incorporates [Font Awesome](https://fontawesome.io/),
Copyright (c) 2017 Dave Gandy.
Font Awesome is distributed under the terms of the [SIL OFL 1.1](https://scripts.sil.org/OFL) 
and [MIT License](https://opensource.org/licenses/MIT).

Minimal Mistakes incorporates photographs from [Unsplash](https://unsplash.com).

Minimal Mistakes incorporates [Susy](https://susy.oddbird.net/),
Copyright (c) 2017, Miriam Eric Suzanne.
Susy is distributed under the terms of the [BSD 3-clause "New" or "Revised" License](https://opensource.org/licenses/BSD-3-Clause).

Minimal Mistakes incorporates [Breakpoint](https://breakpoint-sass.com/).
Breakpoint is distributed under the terms of the [MIT/GPL Licenses](https://opensource.org/licenses/MIT).

Minimal Mistakes incorporates [FitVids.js](https://github.com/davatron5000/FitVids.js/),
Copyright (c) 2013 Dave Rubert and Chris Coyier.
FitVids is distributed under the terms of the [WTFPL License](https://sam.zoy.org/wtfpl/).

Minimal Mistakes incorporates [Magnific Popup](https://dimsemenov.com/plugins/magnific-popup/),
Copyright (c) 2014-2016 Dmitry Semenov, https://dimsemenov.com.
Magnific Popup is distributed under the terms of the MIT License.

Minimal Mistakes incorporates [jQuery Smooth Scroll](https://github.com/kswedberg/jquery-smooth-scroll),
Copyright (c) 2017 Karl Swedberg.
jQuery Smooth Scroll is distributed under the terms of the [MIT License](https://opensource.org/licenses/MIT).

Minimal Mistakes incorporates [GreedyNav.js](https://github.com/lukejacksonn/GreedyNav),
Copyright (c) 2015 Luke Jackson.
GreedyNav.js is distributed under the terms of the [MIT License](https://opensource.org/licenses/MIT).

Minimal Mistakes incorporates [Jekyll Group-By-Array](https://github.com/mushishi78/jekyll-group-by-array),
Copyright (c) 2015 Max White <mushishi78@gmail.com>.
Jekyll Group-By-Array is distributed under the terms of the [MIT License](https://opensource.org/licenses/MIT).

Minimal Mistakes incorporates [@allejo's Pure Liquid Jekyll Table of Contents](https://allejo.io/blog/a-jekyll-toc-in-liquid-only/),
Copyright (c) 2017 Vladimir Jimenez.
Pure Liquid Jekyll Table of Contents is distributed under the terms of the [MIT License](https://opensource.org/licenses/MIT).

Minimal Mistakes incorporates [Lunr](https://lunrjs.com),
Copyright (c) 2017 Oliver Nightingale.
Lunr is distributed under the terms of the [MIT License](https://opensource.org/licenses/MIT).
Everthing else
