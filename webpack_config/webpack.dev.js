const ForkTsCheckerWebapckPlugin = require('fork-ts-checker-webpack-plugin')
const { DefinePlugin } = require('webpack')
const EslintWebpackPlugin = require('eslint-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    // script引入js前加的前缀，如果不加会找不到文件。
    // publicPath: '/'
  },
  devServer: {
    hot: true,
    // 处理刷新路由不显示的问题
    historyApiFallback: {
      rewrites: [
        {
          // 匹配所有路径，映射到/index.html文件
          from: /\.*/,
          to: '/index.html'
        }
      ]
    },
    // 消除热替换打印信息
    client: {
      logging: 'none'
    },
    compress: true
  },
  module: {
    rules: [
      // 处理css
      {
        test: /.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          // 'babel-loader'
          // {
          //   loader: "ts-loader",
          //   // 处理setup lang=ts
          //   options: {
          //     appendTsSuffixTo: [/\.vue$/],
          //     transpileOnly: true,
          //   },
          // },
          {
            loader: 'swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'typescript'
                }
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebapckPlugin({}),
    new DefinePlugin({
      __VUE_PROD_DEVTOOLS__: true
    }),
    new EslintWebpackPlugin({
      extensions: ['.vue', '.ts', '.js', '.tsx'],
      fix: true,
      cache: true,
      emitError: true,
      emitWarning: false,
      eslintPath: 'eslint'
    })
  ]
}
