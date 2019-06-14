const { commentModel, articleModel, userModel, replyModel } = require('../model')
const { getUserInfo } = require('../lib/token')

class commentController {
    // 添加评论
    static async add(ctx) {
        let { content, articleId } = ctx.request.body
        let { id: userId } = await getUserInfo(ctx)
        let article = await articleModel.findOne({ where: { id: articleId } })
        if (!article) {
            ctx.body = {
                status: 0,
                message: '文章不存在'
            }
            return;
        }
        let response = await commentModel.create({ content, articleId, userId })
        ctx.body = {
            status: 1,
            message: '评论成功',
            response
        }
    }
    // 文章评论列表+分页
    static async list(ctx) {
        let { currentPage, pageSize, articleId } = ctx.query
        currentPage = currentPage === undefined || Number(currentPage) < 1 ? 1 : Number(currentPage)  // 当前页码
        pageSize = pageSize === undefined ? 20 : Number(pageSize)  // 每页条数
        let allResponse = await commentModel.findAll({
            where: {
                articleId
            }
        })
        let total = allResponse.length      // 全部条数
        let pageCount = Math.ceil(total / pageSize)   // 页数
        let response = await commentModel.findAll({
            offset: (currentPage - 1) * pageSize,
            limit: pageSize,
            attributes: ['id', 'content', 'createdAt', 'userId'],
            include: [
                { model: userModel, attributes: ['name', 'auth'] },
                {
                    model: replyModel,
                    attributes: ['id', 'content', 'createdAt', 'userId', 'commentId'],
                    include: [{ model: userModel, attributes: ['name', 'auth'] }],
                    order: [['createdAt', 'DESC']]
                }
            ],
            where: {
                articleId
            },
            order: [['createdAt', 'DESC']]
        })
        ctx.body = {
            status: 1,
            message: '查询成功',
            response,
            pager: {
                total,
                currentPage,
                pageSize,
                pageCount,
            }
        }

    }
    // 删除评论
    static async del(ctx) {
        let { id } = ctx.request.body;
        let response = await commentModel.destroy({
            where: {
                id: id
            }
        })
        if (response === 1) {
            await replyModel.destroy({ where: { commentId: null } }) // 删除回复
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

module.exports = commentController