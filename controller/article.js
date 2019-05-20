const { articleModel, tagModel, categoryModel, commentModel } = require('../model')
const Sequelize = require('sequelize');
const Op = Sequelize.Op

class articleController {
    // 添加文章
    static async add(ctx) {
        try {
            let params = ctx.request.body
            params.tags = params.tags.map(name => ({ name }))
            params.categories = params.categories.map(name => ({ name }))
            let response = await articleModel.create(params, {
                include: [tagModel, categoryModel]
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
                }, include: [tagModel, categoryModel, commentModel]
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
            await tagModel.destroy({ where: { articleId: id } })  // 为啥只是置空articleId字段
            await categoryModel.destroy({ where: { articleId: id } })
            let response = await articleModel.destroy({ where: { id }, cascade: true })
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
            let { id, tags, categories, ...rest } = ctx.request.body
            tags = tags.map(name => ({ name, articleId: id }))
            categories = categories.map(name => ({ name, articleId: id }))
            let response = await articleModel.update({ ...rest }, { where: { id } })
            await tagModel.destroy({ where: { articleId: id } })
            await tagModel.bulkCreate(tags)
            await categoryModel.destroy({ where: { articleId: id } })
            await categoryModel.bulkCreate(categories)
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
    // 文章详情
    static async detail(ctx) {
        try {
            let { id } = ctx.query
            let response = await articleModel.findOne({ where: { id }, include: [tagModel, categoryModel, commentModel] })
            if (response) {
                ctx.body = {
                    status: 1,
                    message: '请求成功',
                    response
                }
            } else {
                ctx.body = {
                    status: 0,
                    message: '请求失败'
                }
            }
        } catch (err) {
            ctx.body = {
                status: 0,
                message: err.errors
            }
        }
    }
    static async byTag(ctx) {
        try {
            let { name } = ctx.query
            let response = await articleModel.findAll({
                attributes: ['id', 'title', 'createdAt'],
                include: [{ model: tagModel, where: { name }, attributes: [] }]
            })
            ctx.body = {
                status: 1,
                message: '请求成功',
                response
            }
        } catch (err) {
            ctx.body = {
                status: 0,
                message: err.errors
            }
        }
    }
    static async byCategory(ctx) {
        try {
            let { name } = ctx.query
            let response = await articleModel.findAll({
                attributes: ['id', 'title', 'createdAt'],
                include: [{ model: categoryModel, where: { name }, attributes: [] }]
            })
            ctx.body = {
                status: 1,
                message: '请求成功',
                response
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