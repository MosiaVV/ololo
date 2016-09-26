/**
 * Created by air on 01.09.16.
 */
var gulp = require('gulp');

gulp.task('build',
    [
        'sass',
        'nunjucks',
        'imagemin',
        'imagemin-pic',
        'copy',
        'js'
    ]
);