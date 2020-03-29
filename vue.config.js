module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        common: '@/common',
        networks: '@/networks',
        views: '@/views',
        components: '@/components',
        routers: '@/routers'
      }
    }
  }
}
