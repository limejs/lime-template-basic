

module.exports = {

  // lime config
  env: process.env.NODE_ENV,
  host: process.env.HOST || '127.0.0.1',
  port: process.env.PORT || 3000,
  publicPath: '/',

  // user config
  siteName: 'LIME.JS官网',
  siteDesc: 'LIME.js 是一款基于 Koa2 开发的 Node.js Web 开发框架，小巧而灵活',

  // plugin config
  redis: {
    user: '',
    pass: ''
  }

}
