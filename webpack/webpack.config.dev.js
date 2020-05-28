const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const appSrc = path.resolve(__dirname, "../src");
const appDist = path.resolve(__dirname, "../dist");
const appPublic = path.resolve(__dirname, "../public");
const appIndex = path.resolve(appSrc, "index");
const appEjs = path.resolve(appPublic,'index.ejs')
const appHtml = path.resolve(appPublic,'index.html')

module.exports = {
  entry: appIndex,
  mode:'development',
  devtool:'source-map',
  output: {
    filename: "public/js/[name]_[hash:8].js",
    path: appDist,
    publiPath: "/",
  },
  devServer:{
    
  },
  plugins:[
      new HTMLWebpackPlugin({
          template:appEjs,
          filename:'index.html'
      })
  ]
};
