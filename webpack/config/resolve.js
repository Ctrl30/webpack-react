const path = require("path");
const appSrc = path.resolve(__dirname, "../src");
module.exports = {
  extensions: [".js", ".ts", ".tsx", ".jsx"],
  alias: {
    "~": appSrc,
  },
};
