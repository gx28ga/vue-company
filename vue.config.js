/*
 * @Author: your name
 * @Date: 2020-04-14 15:29:21
 * @LastEditTime: 2020-04-14 16:03:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-company\vue.config.js
 */
const webpack = require('webpack')

module.exports = {
  chainWebpack: (config) => {
    config.externals({
      vue: 'Vue'
    })
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  }
}
