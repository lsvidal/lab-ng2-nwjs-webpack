
'use strict';

var gulp = require('gulp');
var config = require('../../gulp.config');

gulp.task('watch', ['dev:lib', 'dev:html', 'dev:styles', 'dev:ts'], function() {
	gulp.watch(config.src.html, ['dev:html']);
	gulp.watch(config.src.styles, ['dev:styles']);
	// O WEbpack cuida disso
	//gulp.watch(config.src.ts, ['dev:ts']); 
});