'use strict';

var gulp = require('gulp');
var image = require('gulp-image');
var sass = require('gulp-sass');

gulp.task('image', function () {
  gulp.src('./img/Fun/*')
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopfliping: true,
      jpegRecompress: true,
      jpegoptim: false,
      mozjpeg: false,
      gifsicle: true,
      svgo: true
    }))
    .pipe(gulp.dest('./img/Fun/*'));
});

gulp.task('compileSass', function(){
  gulp.src("scss/style.scss")
  .pipe(sass())
  .pipe(gulp.dest('css'))
})
