/**
 * Created by air on 01.09.16.
 */
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'build'
        },
    })
})

gulp.task('watch',
    [
        'sass:watch',
        'nunjucks:watch'
    ]
);

gulp.task('watchreload', ['browserSync', 'sass:watch', 'nunjucks:watch'], function (){
    gulp.watch('build/css/*.css', browserSync.reload);
    gulp.watch('build/*.html', browserSync.reload);
});