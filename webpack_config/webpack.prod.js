const path = require('path')

const { DefinePlugin } = require('webpack')
// css进行打包
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
// css代码压缩
const CssMinimizerWebapckPlugin = require('css-minimizer-webpack-plugin')
// 代码进行gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 将runtime的js代码注入到html中，这样可以减少一次http请求
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// tree-shaking css
// const PurgecssPlugin = require('purgecss-webpack-plugin')
// const glob = require('glob')

const KoaDeployWebpackPlugin = require('koa-deploy-webpack-plugin')

// 包大小分析的插件
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  mode: 'production',
  module: {
    rules: [
      // 处理css
      {
        test: /.css$/,
        sideEffects: true,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.less$/,
        sideEffects: true,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader'
          },
          'less-loader'
        ]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          // "babel-loader",
          {
            loader: 'swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'typescript'
                }
              }
              // target: 'es5'
            }
          }
        ]
      }
    ]
  },
  // 这里设置哪些模块不需要进行打包，然后在html里手动进行script引入cdn地址
  // externals: {
  //   vue: 'Vue',
  //   echarts: 'echarts'
  // },
  optimization: {
    // 生成chunk采取的命名算法，
    // 开发阶段推荐named，因为可以看到打包后的包对应之前的名字
    // 生成阶段推荐用deterministic，针对相同文件生成的id是不变的
    // chunkIds: 'named',
    splitChunks: {
      // async异步导入分包
      // initial 同步导入分包
      // all 都分包
      chunks: 'all',
      // 拆分出来的包最小为多大
      // minSize: 20000,
      // 如果拆分出的包大于设置的值，就会重新进行拆分
      // maxSize: 200000
      // minChunks: 2
      cacheGroups: {
        // vendor: {
        //   test: /[\\/]node_modules[\\/]/,
        //   filename: 'js/[id]_vendors.js'
        // },
      }
    },
    // 默认情况主模块import动态导入的会打包到一个包里，设置为true则会将其分包
    runtimeChunk: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          // toplevel: true
        },
        extractComments: false
      })
    ]
  },
  // cache: {
  //   type: 'filesystem',
  //   allowCollectingMemory: true
  // },
  plugins: [
    new DefinePlugin({
      __VUE_PROD_DEVTOOLS__: false
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:6].bundle.css'
    }),
    new CssMinimizerWebapckPlugin(),
    // new CompressionWebpackPlugin({
    //   test: /\.(css|js)$/i
    // }),
    // new CompressionWebpackPlugin({
    //   test: /\.(css|js)$/i,
    //   algorithm: 'brotliCompress',
    //   filename: '[path][base].br'
    // }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime.*\.js/]),
    // new BundleAnalyzerPlugin()
    // new PurgecssPlugin({
    //   paths: glob.sync(`${path.resolve(__dirname, '../src')}/**/*`,  { nodir: true }),
    // }),
    // new KoaDeployWebpackPlugin({
    //   ssh: {
    //     host: '81.71.36.158',
    //     // host: "121.40.18.63",
    //     username: 'root',
    //     password: 'c13005261761F'
    //   },
    //   project: {
    //     path: '/root',
    //     port: 8080
    //   }
    // })
  ]
}
