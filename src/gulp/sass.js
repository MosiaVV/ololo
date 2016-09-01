/**
 * Created by air on 01.09.16.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('src/sass/*.{scss,sass}')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('build/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('src/sass/*.{scss,sass}');
});