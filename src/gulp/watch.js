/**
 * Created by air on 01.09.16.
 */
var gulp = require('gulp');

gulp.task('watch',
    [
        'sass:watch',
        'nunjucks:watch',
        'connect'
    ]
);