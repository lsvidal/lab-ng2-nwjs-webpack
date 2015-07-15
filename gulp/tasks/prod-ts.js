
/*
	Production build for application and angular.
*/

'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('../../webpack.config');

gulp.task('prod:ts', function() {
	webpack(webpackConfig.prod).run(function(err, stats) {
		if(err) throw new gutil.PluginError('prod:ts', err);
		gutil.log('prod:ts', stats.toString({
			colors: true
		}));
	});
});
