/*
	All static dependencies.
*/
'use strict';

var gulp = require('gulp');
var config = require('../../gulp.config');

gulp.task('deps', ['deps:lib', 'deps:nw']);

gulp.task('deps:lib', function() {
	gulp.src(config.src.lib)
		.pipe(gulp.dest(config.build.scripts)); 
});

/*
	Loads NW.js specific dependencies.
	*/
gulp.task('deps:nw', function () {
	gulp.src(config.src.nw) 
	.pipe(gulp.dest(config.build.path)); 
});
