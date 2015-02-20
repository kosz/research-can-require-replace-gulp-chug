'use strict';

var gulp = require('gulp');
var chug = require('gulp-chug');

var childproject = require('./childproject/gulpfile.js');

gulp.task('require:dist', function () {
  childproject.gulp.start('serve:dist');
});

gulp.task('require', function () {
  childproject.gulp.start('serve');
});

gulp.task('chug:dist', function () {
  return gulp.src('./childproject/gulpfile.js').pipe(chug({
    tasks: [ 'serve:dist' ]
  }));
});

gulp.task('chug', function () {
  return gulp.src('./childproject/gulpfile.js').pipe(chug({
    tasks: [ 'serve' ]
  }));
});

gulp.task('default', function () {
  console.log('Available tasks');
  console.log('\nChug tasks :');
  console.log('  - chug');
  console.log('  - chug:dist');
  console.log('\nRequire tasks :');
  console.log('  - require');
  console.log('  - require:dist\n');
});
