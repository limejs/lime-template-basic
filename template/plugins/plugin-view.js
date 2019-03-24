// DEBUG=koa-views
const koaViews = require("koa-views");
const path = require("path");

module.exports = function(options) {
  return {
    middleware(app, config) {
      app.use(koaViews(path.join(config.paths.src, "views"), {
        map: {
          'hbs': 'handlebar'
        }
      }))
    },
    view(proto, config) {
      // 视图插件
      const v = koaViews(path.join(config.paths.src, "views"), {
        extension: "hbs"
      });
      proto.render = (...args) => {
        return this.ctx.render(...args);
      };
    }
  }
}
