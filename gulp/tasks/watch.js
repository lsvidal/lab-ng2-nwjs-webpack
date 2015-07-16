
'use strict';

var gulp = require('gulp');
var config = require('../../gulp.config');

gulp.task('watch', ['deps', 'dev:html', 'dev:css', 'dev:ts:watch'], function() {
	gulp.watch(config.src.html, ['dev:html']);
	gulp.watch(config.src.css, ['dev:css']);	
	// A task dev:ts:watch cuida disso
	//gulp.watch(config.src.ts, ['dev:ts']); 
});