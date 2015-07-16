
'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('../../webpack.config');

var devCompiler = webpack(webpackConfig.dev);

gulp.task('dev:ts:watch', function() {
	devCompiler.watch({}, function(err, stats) {
		if(err) throw new gutil.PluginError('dev:ts', err);
		gutil.log('dev:ts', stats.toString({
			colors: true
		}));
	});
});

gulp.task('dev:ts:run', function() {
	devCompiler.run(function(err, stats) {
		if(err) throw new gutil.PluginError('dev:ts', err);
		gutil.log('dev:ts', stats.toString({
			colors: true
		}));
	});
});
