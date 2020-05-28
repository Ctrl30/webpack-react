/**
 * css-loader：处理 css 文件中的 url() 等。
 * style-loader：将 css 插入到页面的 style 标签。
 * less-loader：是将 less 文件编译成 css。
 * postcss-loader：可以集成很多插件，用来操作 css。我们这里使用它集成 autoprefixer 来自动添加前缀。
*/
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDEV = process.env.NODE_ENV === "development";

const devCssLoader = ["style-loader", "css-loader", "postcss-loader"];
const lessLoader = [
  "css-loader",
  "postcss-loader",
  {
    loader: "less-loader",
    options: {
      javascriptEnabled: true,
    //   modifyVars: { "@primary-color": "#1DA57A" },
    },
  },
];
const devLessLoader = ["style-loader"].concat(lessLoader);

// MiniCssExtractPlugin.loader 压缩CSS
const prodCssloader = [MiniCssExtractPlugin.loader].concat(devCssLoader);
const prodLessLoader = [MiniCssExtractPlugin.loader].concat(lessLoader);

const rules = [
  {
    test: /\.css$/,
    use: isDEV ? devCssLoader : prodCssloader,
  },
  {
    test: /\.less$/,
    use: isDEV ? devLessLoader : prodLessLoader,
  },
];

module.exports = rules;
