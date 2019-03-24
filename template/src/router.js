/* 
* @file 路由配置
*/

module.exports = (router) => {
    router.get('/', 'home@index')
    // router.get('/static/*', router.static('./view'))
    // router.get('/detail', 'home@detail')
}
