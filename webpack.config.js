const path = require("path"); //处理路径的
//自动生成HTML文件的
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development", //development不压缩代码 production 会进行压缩
  devtool: "source-map", //不需开发的source-map文件
  entry: {
    main:"./src/main.js",
    index:"./src/index.js"
  }, //入口模 块
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  //在webpack解析loader的时候会走这个配置//此处配置模块
  resolveLoader: {
    alias: {
      'babel-loader':path.resolve(__dirname,'loaders','babel-loader.js'),
      'babel-loader2':path.resolve(__dirname,'loaders','babel-loader2.js'),
      'file-loader':path.resolve(__dirname,'loaders','file-loader.js'),
    },

  },
  module: {
    //配置模块的转换规则
    rules: [
      {
        "test": /\.js$/,
        use:[
          'babel-loader2','babel-loader'
        ]
      },
      {
        "test": /\.png$/,
        use:[
          {
            loader: "file-loader",
            options: {
              filename:'[hash].[ext]'
            }
          }
        ]
      }

    ]
  },
  plugins: [//每一个插件都会有一个apply方法
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
  ],
};

/**
 * 如果我希望加载一个自定义loader,如何加载呢?
 * 1.设置成绝对路径
 * 2.配置resolveLoader
 */
