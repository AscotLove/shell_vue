const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}


module.exports = {
  devServer: {
    open:true,
    port: 7900,
    overlay: {
      warnings: false,
      errors: false
    },
  },

  configureWebpack: {

    resolve: {
      alias: {
        "@pages": resolve('src/pages'),
        "@store": resolve('src/store'),
      }
    },
  }
}