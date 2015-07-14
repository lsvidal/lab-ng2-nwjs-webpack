
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
	//devtool: 'inline-source-map',
	debug: true,
	cache: true,

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
      // * include any 3rd party js lib here
      */
			'./src/app/bootstrap'
		]
	},

	output: {
		path: './dist/scripts',
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
		],
		alias: {
			'app': 'src/bootstrap'
		}
	},
	
	module: {
    loaders: [
      // Support for *.json files.
      //{ test: /\.json$/,  loader: 'json' },

      // Support for CSS as raw text
      //{ test: /\.css$/,   loader: 'raw' },

      // support for .html as raw text
      //{ test: /\.html$/,  loader: 'raw' },

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
    }),
    /*
    new webpack.DefinePlugin({
      'ENV': {
        'type': JSON.stringify(process.env.NODE_ENV),
        'debug': true
      }
    }),
*/
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.BannerPlugin(getBanner())
  ],

  context: __dirname,
  stats: { colors: true, reasons: true }
};

function getBanner() {
  return 'Angular2 Webpack Starter by @gdi2990 from @AngularClass';
}
