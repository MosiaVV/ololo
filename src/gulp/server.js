/**
 * Created by air on 01.09.16.
 */
var gulp = require('gulp');
var webserver = require('gulp-webserver');
connect = require('gulp-connect');

gulp.task('webserver', function() {
    gulp.src('app')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});

gulp.task('connect', function() {
    connect.server({
        root: 'build',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./build/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./build/*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);