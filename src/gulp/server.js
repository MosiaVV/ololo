/**
 * Created by air on 01.09.16.
 */
var gulp = require('gulp');
    connect = require('gulp-connect');
var browserSync = require('browser-sync').create();

gulp.task('connect', function() {
    connect.server({
        root: 'build',
        livereload: true
    });
});