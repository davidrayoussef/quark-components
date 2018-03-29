const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'eval',
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
      {
				enforce: 'pre',
        test: /\.js$/,
				exclude: /node_modules/,
				use: [
          'babel-loader',
          'eslint-loader',
        ]
      },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
        test: /\.css$/,
				use: [
					{
					  loader: 'style-loader'
					},
					{
					  loader: 'css-loader',
						options: {
							modules: true,
							importLoaders: 1,
							localIdentName: '[name]_[local]_[hash:base64]',
							sourceMap: true,
							minimize: true
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		contentBase: './dist',
		hot: true,
		historyApiFallback: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
	]
};
