/**
 * Created by sanchahous on 15.08.2016.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var nunjucks = require('gulp-nunjucks-render');
const imagemin = require('gulp-imagemin');
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
//minify pic
gulp.task('imagemin-pic', () =>
gulp.src('src/pic/*.{jpg,png}')
    .pipe(imagemin())
    .pipe(gulp.dest('build/pic'))
);

gulp.task('imagemin-pic:watch', function () {
    gulp.watch('src/pic/*.{jpg,png}', ['imagemin-pic']);
});

//minify svg
gulp.task('minify-svg', function () {
    return gulp.src('src/pic/**/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('build/pic'));
});

gulp.task('minify-svg:watch', function () {
    gulp.watch('src/pic/**/*.svg', ['minify-svg']);
});
//minify img
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
        'nunjucks:watch'
    ]
);

gulp.task('build',
    [
        'sass',
        'nunjucks',
        'imagemin',
        'imagemin-pic',
        'minify-svg'
    ]
);