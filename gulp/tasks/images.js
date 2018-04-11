'use strict';
var changed     = require('gulp-changed');
var filter      = require('gulp-filter');
var glob        = require('glob');
var gulp        = require('gulp');
var gulpif      = require('gulp-if');
var newer       = require('gulp-newer');
var notify      = require('gulp-notify');
var rename      = require('gulp-rename');
var responsive  = require('gulp-responsive');
var gulpSharp   = require('gulp-sharp');
var size        = require('gulp-size');
var util        = require('gulp-util');

// include paths file
var paths       = require('../paths');

// 'gulp images:optimize' -- optimize images
gulp.task('images:optimize', () => {
  return gulp.src([paths.imageFilesGlob, '!assets/images/{pages,pages/**,photography,photography/**}']) // do not process feature images
    .pipe(newer(paths.imageFilesSite))
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng(),
      imagemin.svgo({plugins: [{cleanupIDs: false}]})
    ], {verbose: true}))
    .pipe(gulp.dest(paths.imageFilesSite))
    .pipe(size({title: 'images'}))
});

// 'gulp images:lazyload' -- resize and optimize lazyload images
gulp.task('images:pages', () => {
  return gulp.src([paths.imageFiles + '/pages' + paths.imagePattern, '!' + paths.imageFiles + '/pages/**/*.{jpg,png}'])
    .pipe(changed(paths.imageFilesSite))
    .pipe(responsive({
      // resize all images
      '*.*': [{
        width: 320,
        rename: { suffix: '-th' },
      }, {
        width: 800,
        rename: { suffix: '-800' },
      }, {
        width: 1200,
        rename: { suffix: '-1200' },
      }, {
        // copy original image
        width: '100%',
        rename: { suffix: '-origional' },
      }]
    }, {
      // global configuration for all images
      errorOnEnlargement: false,
      withMetadata: false,
      errorOnUnusedConfig: false
    }))
    .pipe(gulp.dest(paths.imageFilesSite))
});

// 'gulp images:feature' -- resize images
gulp.task('images:photography', () => {
  return gulp.src([paths.imageFiles + '/photography' + paths.imagePattern, '!' + paths.imageFiles + '/photography/**/*.{jpg,svg}'])
    .pipe(changed(paths.imageFilesSite))
    .pipe(responsive({
      // resize all images
      '*.*': [{
        width: 20,
        rename: { suffix: '-lq' },
      }, {
        width: 320,
        rename: { suffix: '-th' },
      }, {
        width: 800,
        rename: { suffix: '-800' },
      }, {
        width: 1200,
        rename: { suffix: '-1200' },
      }, {
        width: 1920,
        rename: { suffix: '-origional' },
      }]
    }, {
      // global configuration for all images
      errorOnEnlargement: false,
      withMetadata: false,
      errorOnUnusedConfig: false
    }))
    .pipe(gulp.dest(paths.imageFilesSite))
});
