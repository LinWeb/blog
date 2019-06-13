const { articleModel, tagModel, categoryModel, commentModel, replyModel } = require('../model')
const Sequelize = require('sequelize');
const Op = Sequelize.Op

class articleController {
    // 添加文章
    static async add(ctx) {
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
    }
    // 文章列表+分页
    static async list(ctx) {
        let { currentPage, pageSize, keyword, tagName, categoryName, attributes } = ctx.query
        currentPage = currentPage === undefined || Number(currentPage) < 1 ? 1 : Number(currentPage)  // 当前页码
        pageSize = pageSize === undefined ? 20 : Number(pageSize)  // 每页条数
        keyword = keyword === undefined || keyword === '' ? '%' : `%${decodeURIComponent(keyword)}%` // 关键词
        attributes = attributes === undefined ? undefined : attributes.split(',')
        let where = {},
            include = [],
            tagWhere = tagName ? { name: tagName } : {}, // 标签名
            categoryWhere = categoryName ? { name: categoryName } : {} // 分类名
        if (attributes === undefined) {
            // 没有指定返回字段的情况下返回全部字段
            where = {
                title: {
                    [Op.like]: keyword
                }
            }
            include = [
                { model: tagModel, where: tagWhere, attributes: ['name'] },
                { model: categoryModel, where: categoryWhere, attributes: ['name'] },
                { model: commentModel, attributes: ['id'] },  // 怎么计算评论数
            ]
        } else {
            include = [
                { model: tagModel, where: tagWhere, attributes: [] },
                { model: categoryModel, where: categoryWhere, attributes: [] },
            ]
        }
        let allResponse = await articleModel.findAll({ where, include })
        let total = allResponse.length // 全部条数
        let pageCount = Math.ceil(total / pageSize)   // 页数

        let response = await articleModel.findAll({
            offset: (currentPage - 1) * pageSize,
            limit: pageSize,
            where,
            include,
            attributes,
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
    // 删除文章
    static async del(ctx) {
        let { id } = ctx.request.body
        let response = await articleModel.destroy({
            where: { id },
            cascade: true,
        })
        if (response === 1) {
            await tagModel.destroy({ where: { articleId: null } })  // 删除标签
            await categoryModel.destroy({ where: { articleId: null } }) // 删除分类
            await commentModel.destroy({ where: { articleId: null } }) // 删除评论
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
    // 更新文章
    static async update(ctx) {
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

    }
    // 文章详情
    static async detail(ctx) {
        let { id } = ctx.query
        let response = await articleModel.findOne({
            where: { id },
            include: [
                { model: tagModel, attributes: ['name'] },
                { model: categoryModel, attributes: ['name'] },
            ]
        })
        let count = response.readCount
        await articleModel.update({ readCount: ++count }, { where: { id } })
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

    }
    // 通过标签查询
    static async byTag(ctx) {
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
    }
    // 通过分类查询
    static async byCategory(ctx) {
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
    }
}

module.exports = articleController