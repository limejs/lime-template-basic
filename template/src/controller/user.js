

const UserController = {
    // 查询用户列表
    async list(ctx) {
        userModel = this.model('../model/user')
        let userLists = await userModel.find()
        await this.render('user', {
            userlist: userLists,
            state: ctx.state,
            domain: ctx.domain
        });
    },
    // 添加一个用户
    async add(ctx) {
        
    }
}

module.exports = UserController