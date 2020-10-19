// vue.config.js
const webpack = require("webpack");
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ],
    externals: {
      echarts: "echarts"
    }
  }
};
