const { userModel } = require('../model')
const Sequelize = require('sequelize');
const Op = Sequelize.Op

class userController {
    // 注册用户
    static async register(ctx) {
        try {
            let params = ctx.request.body
            let { username } = params
            params.name = username
            let response = await userModel.create(params)
            ctx.body = {
                status: 1,
                message: '注册成功',
                response
            }
        } catch (err) {
            ctx.body = {
                status: 0,
                message: err.errors
            }
        }
    }
    // 用户列表+搜索+分页
    static async list(ctx) {
        try {
            let { currentPage, pageSize, keyword } = ctx.query
            currentPage = currentPage === undefined || Number(currentPage) < 1 ? 1 : Number(currentPage)  // 当前页码
            pageSize = pageSize === undefined ? 20 : Number(pageSize)  // 每页条数
            keyword = keyword === undefined || keyword === '' ? '%' : `%${keyword}%` // 关键词
            let allResponse = await userModel.findAll({
                where: {
                    name: {
                        [Op.like]: keyword
                    }
                }
            })
            let total = allResponse.length      // 全部条数
            let pageCount = Math.ceil(total / pageSize)   // 页数
            let response = await userModel.findAll({
                offset: (currentPage - 1) * pageSize,
                limit: pageSize,
                where: {
                    name: {
                        [Op.like]: keyword
                    }
                }
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
        } catch (err) {
            ctx.body = {
                status: 0,
                message: err.errors
            }
        }
    }
    // 删除用户
    static async del(ctx) {
        try {
            let { id } = ctx.params;
            let response = await userModel.destroy({
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
}

module.exports = userController