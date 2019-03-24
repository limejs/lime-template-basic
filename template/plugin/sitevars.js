// 一个把自己额外添加的 站点自定义配置信息挂载到ctx上的中间件

const siteInfo = require('../config/site')

module.exports = {
    // 插件: 一般是修改app或app.context原型的内容；会在 Koa 初始化时调用
    install(app, context) {
        app.context.domain = siteInfo.domain
    },
    // 中间件：用来注册在每个请求生命周期的路由之前 在日志、session中间件之后调用
    middleware(app) {
        app.use(async (ctx, next) => {
            ctx.state = siteInfo
            await next()
        })
    },
    // controller 插件 （用于修改或增加controller继承的原型对象的属性或方法，一般通过this调用）; 
    // 由于controlller代理了Koa context，因此不要覆盖context已有的属性和方法
    controller(proto) {
        proto.myjson = (data) => {
            return this.body = {
                status: 0,
                msg: 'OK',
                data: data
            }
        },
        proto.myerror = (code, data, msg) => {
            return this.json({
                status: code,
                msg: msg || 'ERROR',
                data: data
            })
        }
    },
    view(proto) {
        // 视图插件
    }
}