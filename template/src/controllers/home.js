
module.exports = {
  async index(ctx) {
    ctx.body = 'hello'
  }
}



// const UserController = {
//     // 查询用户列表
//     async index(ctx, next) {
//         let UserModel = this.model('../model/user')
//         let userLists = await UserModel.find()
//         // ctx.throw(403, 'helloboy', {expose: false, headers: {
//         //     me: 'gag'
//         // }})
//         // await Promise.reject('xxx').then(res => {
//         //     this.view.render('home', {
//         //         userlist: userLists,
//         //         state: ctx.state,
//         //         domain: ctx.domain
//         //     });
//         // }).catch(err => {
//         //     console.log('出错了')
//         //     this.body = 'hello boy'
//         //     // next()
//         //     var e = new Error('hihi')
//         //     e.status = 404
//         //     throw e
//         // })
//         await this.view.render('home', {
//           userlist: userLists,
//           state: ctx.state,
//           domain: ctx.domain
//       });
//     },
//     // 添加一个用户
//     async add(ctx) {
//         let username = ctx.request.query.username
//         let password = ctx.request.query.password
//         let phone = ctx.request.query.phone
//         let UserModel = this.model('../model/user')
//         let newUsers = new UserModel({
//             username,
//             password,
//             phone
//         })
//         let result = await newUsers.save()
//         // await this.myjson(result)
//         this.body = 'ok'
//         // await ctx.render('../view/add', {
//         //     success: true
//         // })
//     }
// }

// module.exports = UserController
