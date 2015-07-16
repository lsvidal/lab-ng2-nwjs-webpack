/*
	Run NW.js in developement mode.
	*/
'use strict';

var config = require('../../gulp.config');
var gulp = require('gulp');
var nwBuilder = require('nw-builder'); 
var gutil = require('gulp-util');

gulp.task('nw-run', ['nw-deps'], function () {

	var nw = new nwBuilder(config.nwBuild); 
	nw.on('log', function (msg) {
		gutil.log('nw-builder', msg); 
	}); 

	nw.run().catch(function (error) {
		gutil.log('Erros on nw-builder', error); 
	}); 

	return nw; 
});
