const webpack = require('webpack')

module.exports = {
  output: {
    publicPath: './'
  },
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
