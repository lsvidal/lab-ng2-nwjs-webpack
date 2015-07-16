
/*
	Define default tasks.
	*/
'use strict';

var gulp = require('gulp');

gulp.task('default', ['dev:nw']);

/*
	Build for development.
*/
gulp.task('dev:build', ['deps', 'dev:html', 'dev:css', 'dev:ts:run']);
