const { replyModel, commentModel, userModel } = require('../model')

class replyController {
    // 回复评论
    static async add(ctx) {
        let { content, commentId, userId } = ctx.request.body
        let comment = await commentModel.findOne({ where: { id: commentId } })
        if (!comment) {
            ctx.body = {
                status: 0,
                message: '评论不存在'
            }
            return;
        }
        let user = await userModel.findOne({ where: { id: userId } })
        if (!user) {
            ctx.body = {
                status: 0,
                message: '用户不存在'
            }
            return;
        }
        let response = await replyModel.create({ content, commentId, userId })
        ctx.body = {
            status: 1,
            message: '回复成功',
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