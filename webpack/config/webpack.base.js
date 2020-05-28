const path = require("path");
const autoprefixer = require("autoprefixer");
const resolve = require("./resolve");

const appPublic = path.resolve(__dirname, "../../public");
const appSrc = path.resolve(__dirname, "../../src");
const appIndex = path.resolve(appSrc, "index");
const appEjs = path.resolve(appPublic, "index.ejs");

const HTMLWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: appIndex,
  resolve,
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        loader: "babel-loader",
        include: [appSrc],
        exclude: /node_modules/,
        options: {
          plugins: [
            [
              "import",
              {
                libraryName: "antd",
                style: true,
              },
            ],
          ],
        },
      },
    
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader", //配置css modules
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[name]_[local].[hash:8]",
            },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [autoprefixer()],
            },
          },
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.(css|less)$/,
        include: /node_modules/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader", //css module
            options: {},
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [autoprefixer()],
            },
          },
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins:[
    new HTMLWebpackPlugin({
        template: appEjs,
        filename: "index.html",
      }),
  ]
};
