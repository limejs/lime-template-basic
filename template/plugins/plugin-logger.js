const kLogger = require('koa-logger')

module.exports = function(options) {
  return {
    middleware(app, config) {
      app.use(kLogger((str, args) => {
        // 依赖前置的 global-logger 插件
        logger.info('[REQUEST LOG]', str)
      }))
    }
  }
}
