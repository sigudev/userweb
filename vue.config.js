const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'./',
  configureWebpack:{
    resolve:{
      alias:{
        'components':"@/components",
        'api':"@/api"
      }
    }
  },
  devServer:{
    host:'0.0.0.0',
    port:'5555'
  }
})
