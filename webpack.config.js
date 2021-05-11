var path = require('path')
var webpack = require('webpack')

const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV == 'development';

module.exports = {
  entry: isDev ? './src/main.js' : './src/components/layout/index.js',
  output: {
    path: isDev ? path.resolve(__dirname, './dist') : path.resolve(__dirname, './lib'),
    publicPath: '/dist/',
    filename: isDev ? 'build.js' : 'vue-simple-layout.js',
    // library: 'vue-simple-layout',
    // libraryTarget: 'umd',
    // umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     'vue-style-loader',
      //     'css-loader',
      //     'sass-loader'
      //   ],
      // },
      // {
      //   test: /\.sass$/,
      //   use: [
      //     'vue-style-loader',
      //     'css-loader',
      //     'sass-loader?indentedSyntax'
      //   ],
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            // 'scss': [
            //   'vue-style-loader',
            //   'css-loader',
            //   'sass-loader'
            // ],
            // 'sass': [
            //   'vue-style-loader',
            //   'css-loader',
            //   'sass-loader?indentedSyntax'
            // ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = false
  // module.exports.devtool = '#source-map'
  module.exports.externals = /^vue/
  // 配置打包成npm包的output [start]
  module.exports.output.library = 'vue-simple-layout'
  module.exports.output.libraryTarget = 'umd'
  module.exports.output.umdNamedDefine = true
  // [end]
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
