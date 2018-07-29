import gulp from 'gulp';
import path from 'path';
import swPrecache from 'sw-precache';

const rootDir = '/';

gulp.task('generate-service-worker', callback => {
  swPrecache.write(path.join(rootDir, 'sw.js'), {
    staticFileGlobs: [
      // track and cache all files that match this pattern
      rootDir + '/**/*.{js,html,css,png,jpg,gif}',
    ],
    stripPrefix: rootDir
  }, callback);
});