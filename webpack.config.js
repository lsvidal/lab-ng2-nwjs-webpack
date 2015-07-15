
/*
	Full configuration for Webpack production build.
*/
var webpack = require('webpack');
var merge = require('merge');
var config = require('./gulp.config');

var dev = {

	devtool: 'source-map',

	entry: {
		angular2: [
			'zone.js',
			// 'zone.js/dist/long-stack-trace-zone.js',
			'reflect-metadata',
			'rtts_assert/rtts_assert',
			'angular2/angular2',
			'angular2/router',
			'angular2/di',
			'angular2/src/facade/browser'
		],
		app: [
			/* 
				Include any 3rd party js lib here 
			*/ 
			'./src/app/bootstrap'
		]
	},

	output: {
		path: config.build.scripts,
		filename: '[name].js',
		sourceMapFilename: '[name].js.map',
		chunkFilename: '[id].chunk.js'
	},

	resolve: {
		root: __dirname,
		extensions: [
			'',
			'.ts',
			'.js',
			'.json',
			'.webpack.js',
			'web.js'
		]
	},

	module: {
    loaders: [
      // Support for .ts and .d.ts files.
      { test: /\.ts$/,    loader: 'typescript-simple-loader'}
    ],
    noParse: [
      /rtts_assert\/src\/rtts_assert/
    ]
  },

 	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
      name: 'angular2',
      minChunks: Infinity,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js'
    })
  ],

  context: __dirname,
  stats: { colors: true, reasons: true }
};

var prod = merge(true, true, dev, {debug: false});

prod.plugins = prod.plugins.concat(
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	);

module.exports = {
	prod: prod,
	dev: dev
};
