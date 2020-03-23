const CopyWebpackPlugin = require("copy-webpack-plugin")
module.exports = {
  plugins: [
    {
      from: __dirname + "/src/components",
      to: __dirname + "/dist",
      ignore: [".*"]
    }
  ]
}
