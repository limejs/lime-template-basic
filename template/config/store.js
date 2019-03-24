/* 
* @file 存储和缓存配置
*/

const env = process.env.NODE_ENV || 'development'

const dbhost = {
    development: 'localhost',
    production: '123.123.78.89'
}

module.exports = {
    // mongodb 数据库配置
    "dbhost": dbhost[env],
    "dbname": "lime",
    "dbuser": "cuiyongjian",
    "dbpwd": "CYJxtt020818",
    // redis 缓存配置
    "redishost": "",
    "redispwd": ""
}