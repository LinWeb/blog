const { articleModel, tagModel } = require('../model')
const Sequelize = require('sequelize');
const Op = Sequelize.Op

class articleController {
    // 添加文章
    static async add(ctx) {
        try {
            let params = ctx.request.body
            // params.tags = [{ name: 'react' }, { name: 'koa' }]
            let response = await articleModel.create(params, {
                include: [tagModel]
            })
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
    // 文章列表+分页
    static async list(ctx) {
        try {
            let { currentPage, pageSize, keyword } = ctx.query
            currentPage = currentPage === undefined || Number(currentPage) < 1 ? 1 : Number(currentPage)  // 当前页码
            pageSize = pageSize === undefined ? 20 : Number(pageSize)  // 每页条数
            keyword = keyword === undefined || keyword === '' ? '%' : `%${keyword}%` // 关键词

            let allResponse = await articleModel.findAll({
                where: {
                    title: {
                        [Op.like]: keyword
                    }
                }
            })
            let total = allResponse.length      // 全部条数
            let pageCount = Math.ceil(total / pageSize)   // 页数
            let response = await articleModel.findAll({
                offset: (currentPage - 1) * pageSize,
                limit: pageSize,
                where: {
                    title: {
                        [Op.like]: keyword
                    }
                }, include: [{
                    model: tagModel
                }]
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
                message: err
            }
        }
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