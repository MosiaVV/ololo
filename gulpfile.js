/**
 * Created by sanchahous on 15.08.2016.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('src/sass/*.{scss,sass}')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('src/sass/*.scss', ['sass']);
});
