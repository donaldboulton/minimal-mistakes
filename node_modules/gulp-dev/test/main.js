'use strict';
var assert = require('assert');
var fs = require('fs');
var gutil = require('gulp-util');
var dev = require('../');

it('should transform html file for development', function(cb) {
  var stream = dev(true);

  var filename = 'test/fixtures/test.html';
  var expectedFilename = 'test/fixtures/expected-for-development.html';

  stream.on('data', function(file) {
    var fileContents = file.contents.toString('utf-8');
    assert(fileContents === expectedFileContents,
      'files did NOT match.');
  });

  stream.on('end', cb);

  var testFile = fs.readFileSync(filename);
  var expectedFileContents = fs.readFileSync(expectedFilename).toString('utf-8');

  stream.write(new gutil.File({
    contents: new Buffer(testFile.toString())
  }));

  stream.end();
});

it('should transform html file for production', function(cb) {
  var stream = dev(false);

  var filename = 'test/fixtures/test.html';
  var expectedFilename = 'test/fixtures/expected-for-prod.html';

  stream.on('data', function(file) {
    var fileContents = file.contents.toString('utf-8');
    assert(fileContents === expectedFileContents,
      'files did NOT match.');
  });

  stream.on('end', cb);

  var testFile = fs.readFileSync(filename);
  var expectedFileContents = fs.readFileSync(expectedFilename).toString('utf-8');

  stream.write(new gutil.File({
    contents: new Buffer(testFile.toString())
  }));

  stream.end();
});
