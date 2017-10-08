/**
 * webpack2.0 配置文件
 * @authors wuhongxu (wuhongxu1208@gmail.com)
 * @date    2017-03-10 01:52:00
 * @version 1.0.0
 * @link <link>https://zido.site/</link>
 *
 */

'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const env = process
  .env
  .NODE_ENV
  .trim()
const isDev = (env === 'development')

const common = {
  rootPath: __dirname,
  srcPath: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  indexHtml:path.join(__dirname,'src','index.html')
}

if (isDev) {
  common.plugins = [
    new HtmlWebpackPlugin({
      template: common.indexHtml,
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(), // HMR全局启用
    new webpack.NamedModulesPlugin(), // 在HMR更新的浏览器控制台中打印更易读的模块名称
  ]
} else {
  common.plugins = [
    new webpack.optimize.UglifyJsPlugin(({
      
    })),
    new HtmlWebpackPlugin({
      template: common.indexHtml,
      inject: 'body',
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
}

common.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(env)
  }
}))

const webpackConfig = {
  entry: {
    app: path.join(common.srcPath, 'index.js'),
  },
  output: {
    filename: 'finger.js',
    path: common.dist,
  },
  context: path.resolve(__dirname, 'src'),
  devtool: isDev
    ? 'cheap-module-eval-source-map'
    : 'cheap-module-source-map',
  module: {
    //webpack1.0中可以省略 '-loader'，但是官方说法为了有明确的区分，在webpack2.0中，不能再省略
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        include: [
          path.join(common.rootPath, 'src'), //转换src路径下的代码
        ],
        exclude: /node_modules/, //忽略node_modules路径代码
      },
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json'
    ],
  },
  plugins: common.plugins,
}

if (isDev) {
  webpackConfig.devServer = {
    historyApiFallback: true,
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clientLogLevel: 'none', //日志
    compress: true, //压缩
    port: 3000,
    stats: {
      colors: true
    },
    disableHostCheck: true,
    open:true,
  }
}

module.exports = webpackConfig
