/**
 * Created by air on 01.09.16.
 */
var gulp = require('gulp');
var nunjucks = require('gulp-nunjucks-render');

gulp.task('nunjucks', function() {
    return gulp.src('src/**/*.html')
        .pipe(nunjucks(
            {
                path: ['src/']
            }
        ))
        .pipe(gulp.dest('build/'));
});

gulp.task('nunjucks:watch', function () {
    gulp.watch('src/**/*.html', ['nunjucks']);
});