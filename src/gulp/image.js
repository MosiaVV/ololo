/**
 * Created by air on 01.09.16.
 */
var gulp = require('gulp');
const imagemin = require('gulp-imagemin');

//minify pic
gulp.task('imagemin-pic', () =>
gulp.src('src/pic/*.{jpg,png}')
    .pipe(imagemin())
    .pipe(gulp.dest('build/pic'))
);

gulp.task('imagemin-pic:watch', function () {
    gulp.watch('src/pic/*.{jpg,png}', ['imagemin-pic']);
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