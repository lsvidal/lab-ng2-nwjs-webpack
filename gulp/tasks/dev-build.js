
'use strict';

var gulp = require('gulp');
var config = require('../../gulp.config');

gulp.task('dev', ['dev:build']);

gulp.task('dev:build', ['dev:lib', 'dev:html', 'dev:styles', 'dev:ts'], function() {
	gulp.watch(config.src.html, ['dev:html']);
	gulp.watch(config.src.styles, ['dev:styles']);
	gulp.watch(config.src.ts, ['dev:ts']);
});