/*
	CSS pipeline.
	*/
'use strict';

var gulp = require('gulp');
var config = require('../../gulp.config');

gulp.task('dev:css', function () {
	gulp.src(config.src.css) 
		.pipe(gulp.dest(config.build.css)); 
});
