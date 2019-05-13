const replyModel = require('../model/reply')


class replyController {
    // 添加回复
    static async add(ctx) {
        try {
            let params = ctx.request.body
            let response = await replyModel.create(params)
            ctx.body = {
                status: 1,
                message: '添加成功',
                response
            }
        } catch (err) {
            ctx.body = {
                status: 0,
                message: err.errors
            }
        }
    }
    // 删除评论
    static async del(ctx) {
        try {
            let { id } = ctx.params;
            let response = await replyModel.destroy({
                where: {
                    id: id
                }
            })
            if (response === 1) {
                ctx.body = {
                    status: 1,
                    message: '删除成功'
                }
            } else {
                ctx.body = {
                    status: 0,
                    message: '删除失败'
                }
            }
        } catch (err) {
            ctx.body = {
                status: 0,
                message: err.errors
            }
        }

    }
}

module.exports = replyController