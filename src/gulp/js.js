var gulp = require('gulp');

gulp.task('js', function () {
    gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('build/js/'));
});
gulp.task('js:watch', function () {
    gulp.watch('src/js/**/*.js', ['js']);
});