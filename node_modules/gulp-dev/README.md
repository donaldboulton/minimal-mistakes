# [gulp](https://github.com/wearefractal/gulp)-dev

> Toggle html comments so that you can enable functionality for dev vs.
> production.

Have you ever wanted to test your web page and you smartly (for the most
part!) used appcache and forgot to update your manifest.appcache file?!
Have you ever wanted to include javascript files for development that
would not be there in production?  Well, gulp-dev will help you there.

**Turn this:**
```html
<!-- !dev -->
<html manifest="manifest.appcache">
<!-- /!dev -->
<!-- dev -->
<!-- <html> -->
<!-- /dev -->
  <head><title>My Page</title></head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

**Into this for development**

```html
<!-- !dev -->
<!-- <html manifest="manifest.appcache"> -->
<!-- /!dev -->
<!-- dev -->
<html>
<!-- /dev -->
  <head><title>My Page</title></head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

**Or into this for production**

```html
<!-- !dev -->
<html manifest="manifest.appcache">
<!-- /!dev -->
<!-- dev -->
<!-- <html> -->
<!-- /dev -->
  <head><title>My Page</title></head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

## Example Usage with Gulp

**Development Task**
```js
var gulp = require('gulp');
var dev = require('gulp-dev');

gulp.task('dev', function() {
  gulp.src('home.html')
      .pipe(dev(true))
      .pipe(gulp.dest('index.html'));
});
```
**Default Task (for prod)**
```js
var gulp = require('gulp');
var dev = require('gulp-dev');

gulp.task('prod', function() {
  gulp.src('home.html')
      .pipe(dev(false))
      .pipe(gulp.dest('public/index.html'));
});
```

## API

### dev(inDevelopmentMode)

`inDevelopmentMode` is a boolean value that helps us decide what to keep
and what to remove.

## License

Copyright (c) 2014 Ryan Olson <ryan.olson.x@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
