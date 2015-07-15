/*
	Library dependencies.
*/
'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var config = require('../../gulp.config');
var webpack = require('webpack');
var webpackConfig = require('../../webpack.config');

gulp.task('dev:lib', ['dev:angular2'], function() {
	gulp.src('./node_modules/traceur/bin/traceur-runtime.js')
		.pipe(gulp.dest(config.build.scripts)); 
});

gulp.task('dev:angular2', function() {
	webpack(webpackConfig.angular2).run(function(err, stats) {
		if(err) throw new gutil.PluginError('dev:angular2', err);
		gutil.log('dev:angular2', stats.toString({
			colors: true
		}));
	});
})
