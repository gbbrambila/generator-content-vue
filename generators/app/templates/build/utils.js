'use strict'

const path = require('path')

module.exports = {
  resolve: function (dir) {
    return path.join(__dirname, '..', dir)
  },

  staticPath: function (_path) {
    const assetsSubDirectory = 'static'
    return path.posix.join(assetsSubDirectory, _path)
  },

  assetsPath: function (_path) {
    const assetsSubDirectory = 'assets'
    return path.posix.join(assetsSubDirectory, _path)
  }
}