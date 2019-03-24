const serve = require('koa-static')
const path = require('path')

module.exports = function(options) {
  return {
    middleware(app, config) {
      app.use(serve(path.join(config.paths.root, './public'), {
        maxage: 365 * 24 * 3600 * 1000
      }))
    }
  }
}
