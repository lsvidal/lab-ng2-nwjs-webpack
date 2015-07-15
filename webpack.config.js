
/*
	Full configuration for Webpack production build.
*/
var webpack = require('webpack');
var merge = require('merge');
var config = require('./gulp.config');

var common = {
	devtool: 'source-map',

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

  context: __dirname,
  stats: { colors: true, reasons: true }
};

var angular2 = [
	'zone.js',
	// 'zone.js/dist/long-stack-trace-zone.js',
	'reflect-metadata',
	'rtts_assert/rtts_assert',
	'angular2/angular2',
	'angular2/router',
	'angular2/di',
	'angular2/src/facade/browser'
];

var app = [
	/* 
	 Include any 3rd party js lib here 
	*/ 
	'./src/app/bootstrap'
];

var prod = {
	debug: false,
	cache: false,

	entry: {
		angular2: angular2,
		app: app
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
      name: 'angular2',
      minChunks: Infinity,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js'
    }),

    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ],
};

module.exports = {
	prod: merge(true, true, common, prod),
	angular2: merge(true, true, common, {debug: true, entry:{angular2: angular2}}),
	app: merge(true, true, common, {debug:true, entry: {app:app}})
};
