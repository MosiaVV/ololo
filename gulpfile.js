/**
 * Created by sanchahous on 15.08.2016.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var nunjucks = require('gulp-nunjucks-render');
const imagemin = require('gulp-imagemin');

gulp.task('sass', function () {
    return gulp.src('src/sass/*.{scss,sass}')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/css'));
});

gulp.task('nunjucks', function() {
 return gulp.src('src/*.html')
        .pipe(nunjucks(
            {
                path: ['src/'] // String or Array
            }
        ))
        .pipe(gulp.dest('build/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('src/sass/*.{scss,sass}');
});

gulp.task('nunjucks:watch', function () {
    gulp.watch('src/*.html', ['nunjucks']);
});

gulp.task('imagemin', () =>
gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'))
);

gulp.task('imagemin:watch', function () {
    gulp.watch('src/img/*', ['imagemin']);
});

gulp.task('watch',
    [
        'sass:watch',
        'nunjucks:watch',
        'imagemin:watch'
    ]
);