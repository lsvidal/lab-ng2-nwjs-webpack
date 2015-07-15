/*
	Library dependencies.
*/
'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var config = require('../../gulp.config');
var webpack = require('webpack');
var webpackConfig = require('../../webpack.config');

gulp.task('dev:lib', function() {
	gulp.src('./node_modules/traceur/bin/traceur-runtime.js')
		.pipe(gulp.dest(config.build.scripts)); 
});
