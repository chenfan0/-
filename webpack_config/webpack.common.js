const path = require('path')
// 生成html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// copy文件的插件
const CopyWebpackPlugin = require('copy-webpack-plugin')
// 定义变量的插件
const { DefinePlugin } = require('webpack')
// 处理.vue文件的插件
const { VueLoaderPlugin } = require('vue-loader')
// 自动导入element组件的插件
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
// 合并配置文件的插件
const { merge } = require('webpack-merge')
// 分析插件耗时的插件
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
// 创建进程单独处理的插件
// const threadLoader = require('thread-loader')
// 生成构建进度跳
// const ProgressBarPlugin = require('progress-bar-webpack-plugin')

// 会观察之前编译的所有模块的变化，一改进增量构建时间。，而PrefetchPlugin是与预先发现单个模块9999999999999999999999999999999999999999999999999999999999999999
// const { AutomaticPrefetchPlugin } = require('webpack')

const smp = new SpeedMeasurePlugin()
// const VueWorkerPool = {
//   workers: 2,
//   // workerParallelJobs: 50,
//   poolTimeout: 2000,
// };
// const JsWorkerPool = {
//   workers: 2,
//   // workerParallelJobs: 50,
//   poolTimeout: 2000,
// }
// threadLoader.warmup(VueWorkerPool, ["vue-loader"]);
// threadLoader.warmup(JsWorkerPool, ['babel-loader'])

const WebpackCdnPlugin = require('webpack-cdn-plugin')

const commonConfig = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, '../dist'),
    // 设置主入口的名字
    filename: 'js/[name].[chunkhash:6].bundle.js',
    // 设置分包的名字
    chunkFilename: 'js/[name].[contenthash:6].chunk.js',
    publicPath: '/',
    clean: true
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    // noParse: /lodash/,
    rules: [
      // 处理图片
      {
        test: /\.(jpe?g|svg)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:6][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024
          }
        }
      },
      // 处理字体图标
      {
        test: /\.(tff|woff|ttf)$/,
        type: 'asset',
        generator: {
          filename: 'fonts/[name].[hash:6][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024
          }
        }
      },
      // babel处理js文件
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: 'swc-loader'
      },
      // 处理vue文件
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          // 如果开启另一个线程就不会有ts类型检测
          // {
          //   loader: "thread-loader",
          //   options: VueWorkerPool,
          // },
          'vue-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'vue3-CMS'
    }),
    // new WebpackCdnPlugin({
    //   modules: [
    //     {
    //       name: 'vue',
    //       var: 'Vue',
    //       path: 'dist/vue.runtime.min.js'
    //     }
    //   ]
    // }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public',
          globOptions: {
            ignore: ['**/index.html']
          }
        }
      ]
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: false
    }),
    new VueLoaderPlugin(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    // new ProgressBarPlugin(),
    // new AutomaticPrefetchPlugin()

  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src/'),
      views: '@/views'
    },
    extensions: ['.ts', '.mjs', '...']
  }
}

module.exports = (env) => {
  const mode = env.production ? 'production' : 'development'
  let config = null
  if (mode === 'production') {
    config = require('./webpack.prod')
  } else {
    config = require('./webpack.dev')
  }
  return merge(commonConfig, config)
  // return smp.wrap(merge(commonConfig, config))
}
