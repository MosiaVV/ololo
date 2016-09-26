/**
 * Created by air on 01.09.16.
 */
var gulp = require('gulp');
var nunjucks = require('gulp-nunjucks-render');
var data = require('gulp-data');

gulp.task('nunjucks', function() {
    return gulp.src('src/**/*.html')
        .pipe(data(function() {
            return require('../app/index.json')
        }))
        .pipe(nunjucks(
            {
                path: ['src/']
            }
        ))
        .pipe(gulp.dest('build/'));
});

gulp.task('nunjucks:watch', function () {
    gulp.watch('src/app/*.json', ['nunjucks']);
    gulp.watch('src/**/*.html', ['nunjucks']);
});