/*
	Loads NW.js specific dependencies.
	*/
'use strict';

var config = require('../../gulp.config');
var gulp = require('gulp');

gulp.task('nw-deps', function () {
	gulp.src(config.src.json) 
	.pipe(gulp.dest(config.build.path)); 
});
