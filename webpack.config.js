const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = {
  mode: "development",
    //хранит информацию об исходниках
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    //__dirname - корень папки
    filename: 'bundle.js',
    assetModuleFilename: path.join('images', '[name][ext]'),
    clean: true,
  },
    devServer: {
      open: true,
      port: 8000,
      hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: path.resolve(__dirname, 'src', 'index.html'),
      }
    ),
    new MiniCssExtractPlugin({
    filename: '[name].css',
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
        filename: path.join('icons', '[name].[contenthash][ext]'),
        },
      },
      {
      test: /\.(?:js|mjs|cjs)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      }
    }
    ],
  },
  watch: true,
  //будет отслеживать изменение файлов и будет пересобирать проект каждый раз при сохранении
};
