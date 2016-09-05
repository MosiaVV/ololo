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

// gulp.task('html', function () {
//     gulp.src('build/*.html')
//         .pipe(connect.reload());
// });

// gulp.task('sass', function () {
//     gulp.src('build/**/*.css')
//         .pipe(connect.reload());
// });

// gulp.task('connect:watch', function () {
//     gulp.watch(['./build/*.html'], ['html']);
// });

// gulp.task('default', ['connect', 'watch']);