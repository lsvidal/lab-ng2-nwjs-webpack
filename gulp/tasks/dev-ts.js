
'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('../../webpack.config');

var conf = Object.create(webpackConfig.app);
conf.cache = {};
conf.watch = true;
var devCompiler = webpack(conf);

gulp.task('dev:ts', function() {
	devCompiler.watch({}, function(err, stats) {
		if(err) throw new gutil.PluginError('dev:ts', err);
		gutil.log('dev:ts', stats.toString({
			colors: true
		}));
	});
});
