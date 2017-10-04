'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var postcssZindex = require('postcss-zindex');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('compileSass', function(){
  gulp.src("scss/style.scss")
  .pipe(sass())
  .pipe(gulp.dest('css'))
})

gulp.task('process-css', function() {
  var plugins = [
    autoprefixer({
      browsers: ['last 3 version']
    }),
    postcssZindex({startIndex: 1})
  ];
  return gulp.src('css/*.css')
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


gulp.task("concatScripts", function(){
  return gulp.src([
            'js/jquery-3.2.1.min.js',
            'js/slick.min.js',
            'js/noframework.waypoints.min.js',
            'js/waypoints.debug.js',
            'js/main.js'])
      .pipe(concat("app.js"))
      .pipe(gulp.dest("js"));
})

gulp.task("minifyScripts", ["concatScripts"], function(){
  return gulp.src("js/app.js")
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('js'))
});

gulp.task('watchFiles', function(){
  gulp.watch('css/*.css', ['compileSass']);
  gulp.watch('css/*.css', ['process-css']);
  gulp.watch('js/*.js', ['concatScripts']);
})

gulp.task('serve', ['watchFiles']);

gulp.task('default',['compileSass','process-css','minifyScripts']);
