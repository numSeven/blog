const CopyWebpackPlugin = require("copy-webpack-plugin")
const path = require("path")
console.log('11111111111111111111111111',__dirname);


module.exports = {
  plugins: [
    {
      from: __dirname + " docs\.vuepress\dist",
      to: __dirname + "/dist",
      ignore: [".*"]
    }
  ]
}
