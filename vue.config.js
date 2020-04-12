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
