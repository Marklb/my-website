import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import CopyWebpackPlugin  from 'copy-webpack-plugin';

// const prod = process.argv.indexOf('-p') !== -1;

export default {
  devtool: 'source-map',
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?sourceMap',
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
      // {
      //   test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
      //   loader: 'file-loader',
      // },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: process.argv.indexOf('-p') === -1 ? [
    autoprefixer,
  ] : [
    autoprefixer,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   output: {
    //     comments: false,
    //   },
    //   // sourceMap: false,
    //   // mangle: false,
    //   // test: /\.(js|jsx)$/
    // })
  ],
};
