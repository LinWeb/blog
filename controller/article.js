const articleModel = require('../model/article')


class articleController {
    // 添加文章
    static async add(ctx) {
        try {
            let params = ctx.request.body
            let response = await articleModel.create(params)
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
    static async list(ctx) {
        let res = await articleModel.findAll()
        ctx.body = res
    }
    // 删除文章
    static async del(ctx) {
        try {
            let { id } = ctx.params;
            let response = await articleModel.destroy({
                where: {
                    id: Number(id)
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
    // 更新文章
    static async update(ctx) {
        try {
            let { id, ...rest } = ctx.request.body
            let response = await articleModel.update({ ...rest }, {
                where: {
                    id: Number(id)
                }
            })
            if (response[0] === 1) {
                ctx.body = {
                    status: 1,
                    message: '更新成功'
                }
            } else {
                ctx.body = {
                    status: 0,
                    message: '更新失败'
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

module.exports = articleController