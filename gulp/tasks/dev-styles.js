/*
	CSS pipeline.
	*/
'use strict';

var gulp = require('gulp');
var config = require('../../gulp.config');

gulp.task('dev:styles', function () {
	gulp.src(config.src.styles) 
		.pipe(gulp.dest(config.build.styles)); 
});
