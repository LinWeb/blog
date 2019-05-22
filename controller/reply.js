const { replyModel } = require('../model')

class replyController {
    // 添加回复
    static async add(ctx) {
        let params = ctx.request.body
        let response = await replyModel.create(params)
        ctx.body = {
            status: 1,
            message: '添加成功',
            response
        }

    }
    // 删除评论
    static async del(ctx) {
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

    }
}

module.exports = replyController