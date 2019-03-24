/* 
* @file 站点配置
*/

module.exports = {
    // 站点启动配置
    // serversrc: '../src-server', // server源码位置
    // 域名和代理配置
    proxy: false,
    subdomainOffset: 2,
    domain: 'https://www.cuiyongjian.com', // 域名
    publicPath: '/blog',
    // cookie配置
    cookieKeys: ['abc', 'def'],
    // 额外的信息（不被内核支持的）
    siteAuthor: 'sheldon'
}
