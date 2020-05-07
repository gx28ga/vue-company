module.exports = {
  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach((item) => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Or array of paths
          resources: ['./src/styles/vars.scss', './node_modules/bootstrap/scss/bootstrap/_variables.scss']
        })
        .end()
    })
  },
  configureWebpack: {
    plugins: []
  }
}
