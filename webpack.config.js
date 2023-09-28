const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");


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
    publicPath: '/task_1/'
  },
  devServer: {
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
      new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [
            ['gifsicle', { interlaced: true }],
            ['jpegtran', { progressive: true }],
            ['optipng', { optimizationLevel: 5 }],
            ['svgo', { name: 'preset-default' }],
          ],
        },
      },
    }),
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
          use: [
    {
      loader: 'image-webpack-loader',
      options: {
        mozjpeg: {
          progressive: true,
          quality: 20
        },
                webp: {
          quality: 75
        }
      },
    },
  ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
        filename: path.join('icons', '[name][ext]'),
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
