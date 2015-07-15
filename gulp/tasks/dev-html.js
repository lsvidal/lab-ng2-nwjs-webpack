/*
	HTML pipeline.
	*/
'use strict';

var gulp = require('gulp');
var config = require('../../gulp.config');

gulp.task('dev:html', function () {
	gulp.src(config.src.html) 
		.pipe(gulp.dest(config.build.html)); 
});
