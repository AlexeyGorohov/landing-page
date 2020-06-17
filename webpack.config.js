const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const IconfontPlugin = require('iconfont-plugin-webpack');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: { index: path.resolve(__dirname, 'src/js', 'index.js') },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: devMode,
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/html', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new VueLoaderPlugin(),
    new IconfontPlugin({
      src: 'src/iconfont', // required - directory where your .svg files are located
      family: 'iconfont', // optional - the `font-family` name. if multiple iconfonts are generated, the dir names will be used.
      dest: {
        font: 'src/font/[family].[type]', // required - paths of generated font files
        css: 'src/css/_[family].scss', // required - paths of generated css files
      },
      watch: {
        pattern: 'src/iconfont/**/*.svg', // required - watch these files to reload
        cwd: __dirname, // optional - current working dir for watching
      },
    }),
  ],
  optimization: {
    splitChunks: { chunks: 'all' },
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
};
