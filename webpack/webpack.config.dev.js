const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const webpack = require("webpack");

const appSrc = path.resolve(__dirname, "../src");
const appDist = path.resolve(__dirname, "../dist");
const appPublic = path.resolve(__dirname, "../public");
const appIndex = path.resolve(appSrc, "index");
const appEjs = path.resolve(appPublic, "index.ejs");
const appHtml = path.resolve(appPublic, "index.html");

module.exports = {
  entry: appIndex,
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "public/js/[name]_[hash:8].js",
    path: appDist,
    publicPath: "/", //output中的publicPath影响资源生成路径
  },
  devServer: {
    // publicPath:'', //devServer中的publicPath影响资源在本地开发环境中的访问
    contentBase: appPublic /** 
    contentbase代表html页面所在的相对目录如果我们不配置项，devServer默认html所在的目录就是项目的根目录

    设置server对外服务的内容来源，只有在提供静态文件访问的情况下才需要使用该配置。
    devServer.publicPath会被用来设置提供bundles文件的位置，而且会优先考虑该配置的路径。
    默认情况下会使用当前运行命令的文件夹作为内容源

    */,
    hot: true, // 热更新
    host: "localhost", // 本地调试的时候可配置自己的ip 然后其他设备通过本机ip访问
    port: 8000,
    open: true,
    historyApiFallback: true, //当使用html5 history api,将会在响应404时返回index.html
    overlay: true, // 是否将错误展示在浏览器蒙层
    inline: true /**切换dev-server的两种模式，默认情况server使用inline mode。
    这种情况下，live reload及构建信息的相关代码会被插入到bundle中。
    另外一种模式位iframe mode.使用iframe mode会在通知栏下方
    显示构建信息
     */,
    stats:
      "errors-only" /**针对bundle打印的信息进行精确控制。
     使用场景为，当只想看一些想看到的信息，而不想看到所有的打印信息，
     这种情况下，使用quiet或noInfo是不合适的，因为还希望关注一部分信息。
     此种场景下就需要使用stats来控制日志内容的输出

      stats有一些可用的预设值

      Preset	Alternative	Description
      errors-only	none	只在产生error时打印日志
      minimal	none	只打印errors或文件第一次被编译时
      none	false	禁止打印日志
      normal	true	标准打印日志
      verbose	none	打印所有日志

      */,
    // compress: true, //对所有请求启用gzip压缩
    /**
    像所有的请求添加headers */
    // headers: {
    //   "X-Custom-Foo": "bar"
    // },
    /**
    未来保证在同一域名下，请求一些在其他域名下的api接口时会用到该配置。
    dev-server使用http-proxy-middleware包
     */
    proxy: {
      "/api": {
        target: "http://10.11.110.110:8080/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader?cacheDirectory",
        include: [appSrc],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: appEjs,
      filename: "index.html",
    }),
    new FriendlyErrorsWebpackPlugin(),
    // 启用热加载
    new webpack.HotModuleReplacementPlugin(),
  ],
};
