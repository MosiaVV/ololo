var gulp   = require('gulp');

gulp.task('copy', function() {
    return gulp
        .src('src/js/**/*.js')
        .pipe(gulp.dest('build/js'));
});