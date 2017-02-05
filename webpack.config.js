var webpack = require('webpack');

module.exports = {
	entry: [ 
      'script!jquery/dist/jquery.min.js',
      'script!foundation-sites/dist/js/foundation.min.js',
      './app/app.js'
   ],
   externals :{
      jquery: 'jQuery'
   },
   plugins: [
      new webpack.ProvidePlugin({
         '$':'jquery',
         'jQuery':'jquery'
      })
   ],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		extensions: ['','.js','.jsx'],
      root: __dirname,
      alias: {
         applicationStyles: 'app/styles/app.scss',
         configureStore: 'app/stores/configure-store.js'
      },
    modulesDirectories :[
      'node_modules',
      './app/components',
      './app/apis',
      './app/actions',
      './app/reducers'

    ]
	},
	module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
               presets: ['es2015', 'react','stage-0']
            }
         }
      ]
   },
   devtool: 'cheap-module-eval-source-map'
};