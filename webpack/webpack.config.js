const merge = require("webpack-merge");
const baseConfig = require("./config/webpack.base");
const developmentConfig = require("./config/webpack.config.dev");
const productionConfig = require("./config/webpack.config.prod");
const isDEV = process.env.NODE_ENV === "development";
let config;
if (isDEV) {
  // 开发环境下的webpack配置
  config = merge(baseConfig, developmentConfig);
} else {
  // 生产环境下的webpack配置
  config = merge(baseConfig, productionConfig);
}

module.exports = config;
