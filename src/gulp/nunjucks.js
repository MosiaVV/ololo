/**
 * Created by air on 01.09.16.
 */
var gulp = require('gulp');
var nunjucks = require('gulp-nunjucks-render');
var frontMatter = require('gulp-front-matter');
var data = require('gulp-data');
var path = require('path');

gulp.task('nunjucks', function() {
    return gulp.src('src/**/*.html')
        .pipe(frontMatter({property: 'data'}))
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
    gulp.watch('src/**/*.html', ['nunjucks']);
});