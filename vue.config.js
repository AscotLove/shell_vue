const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}


module.exports = {
  devServer: {
    port: 7900,
    overlay: {
      warnings: true,
      errors: true
    },
  },

  configureWebpack: {

    resolve: {
      alias: {
        '@pages': resolve('src/pages'),
      }
    },
  }
}