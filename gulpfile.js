'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compileSass', function(){
  gulp.src("scss/style.scss")
  .pipe(sass())
  .pipe(gulp.dest('css'))
})
