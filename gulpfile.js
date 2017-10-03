'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var postcssZindex = require('postcss-zindex');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

gulp.task('compileSass', function(){
  gulp.src("scss/style.scss")
  .pipe(sass())
  .pipe(gulp.dest('css'))
})

gulp.task('process-css', function() {
  var plugins = [
    autoprefixer({
      browsers: ['last 3 version']
    })
  //   postcssZindex({startIndex: 1})
  // ];
  return gulp.src('./css/*.css')
    .pipe(postcss(plugins))
    .pipe(cleanCSS({
      level: {
          1: {},
          2: {}
      }
    }))
    .pipe(concat('prod.min.css'))
    .pipe(gulp.dest('css'));
});
