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
        'nunjucks:watch',
        'copy:watch',
        'js:watch'
    ]
);

gulp.task('watchreload', ['browserSync', 'sass:watch', 'nunjucks:watch', 'imagemin:watch', 'js:watch'], function (){
    gulp.watch('build/css/*.css', browserSync.reload);
    gulp.watch('build/*.html', browserSync.reload);
    gulp.watch('build/img/*', browserSync.reload);
    gulp.watch('build/pic/*', browserSync.reload);
    gulp.watch('build/js/*', browserSync.reload);
});