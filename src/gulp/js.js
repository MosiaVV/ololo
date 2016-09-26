var gulp = require('gulp');

gulp.task('copy', function() {
    return gulp
        .src('src/js/**/*.js')
        .pipe(gulp.dest('build/js'));
});

gulp.task('copy:watch', function () {
    gulp.watch('src/js/**/*.js', ['copy'])
});
gulp.task('js', function () {
    gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('build/js/'));
});
gulp.task('js:watch', function () {
    gulp.watch('src/js/**/*.js', ['js']);
});