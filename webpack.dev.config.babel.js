/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack'
import path from 'path'
import OpenBrowserPlugin from 'open-browser-webpack-plugin'

export default {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    contentBase: './app',
    port: 8080,
  },
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: './bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        include: path.resolve(__dirname, 'app'),
        loader: 'style-loader!css-loader!less-loader',
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'app'),
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.js[x]?$/,
        include: path.resolve(__dirname, 'app'),
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.md$/,
        loader: 'html-loader!markdown-loader?gfm=false',
      },
      {
        test: /\.(svg)$/,
        loader: 'file-loader?limit=8192',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
  ],
}
