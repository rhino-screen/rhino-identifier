'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

var dirSRC = ['./assets/app/primitive/src/scss/**/*.scss'];

gulp.task('cssTask', function () {
    gulp.src(dirSRC)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'], // Compatibility with last 2 majors versions of each browsers
            cascade: false // Visual cascade ? Nop, minify at the end
        }))
        .pipe(cssnano({
            zindex: false // To fix z-index property remove (Fix in V4 of cssnano)
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(rename(function (path) {
            // Add .min before .css, minify with css nano
            if(path.extname === '.css') {
                path.basename += '.min';
            }
        }))
        .pipe(gulp.dest('./assets/css/'))
});

//Watch task
gulp.task('default', function () {
    gulp.watch(dirSRC, ['cssTask']);
});