const { userModel, commentModel, replyModel } = require('../model')
const Sequelize = require('sequelize');
const Op = Sequelize.Op
const { passwordHash, passwordCompare } = require('../lib/bcrypt')
const { createToken, getUserInfo } = require('../lib/token')

class userController {
    // 用户注册
    // 校验用户名是否已经注册，密码加密处理
    static async register(ctx) {
        let params = ctx.request.body
        let { username, password, name } = params
        let user = await userModel.findOne({ where: { username } }) // 校验是否用户名是否已经注册
        if (user) {
            ctx.body = {
                status: 0,
                message: "此用户名已注册过"
            }
        } else {
            let bcryptPassword = await passwordHash(password)  // 密码加密
            let response = await userModel.create({ username, name, password: bcryptPassword })
            if (response) {
                ctx.body = {
                    status: 1,
                    message: '注册成功'
                }
            } else {
                ctx.body = {
                    status: 0,
                    message: '注册失败'
                }
            }
        }
    }
    // 检验用户名是否已经注册
    static async checkUsername(ctx) {
        let { username } = ctx.request.body
        let response = await userModel.findOne({ where: { username } })
        if (response) {
            ctx.body = {
                status: 0,
                message: '此电子邮箱已经被注册',
            }
        } else {
            ctx.body = {
                status: 1,
                message: '此电子邮箱可用'
            }
        }

    }
    // 用户登录
    static async login(ctx) {
        let { username, password, type } = ctx.request.body
        let where = {}
        if (type === 'admin') {
            where = { username, auth: 1 }
        } else {
            where = { username }
        }
        let response = await userModel.findOne({ where })
        if (response) {
            let isSame = await passwordCompare(password, response.password)  // 校验密码是否正确
            if (isSame) {
                let { id, username, name, auth } = response
                let token = await createToken({ id, username, auth })
                ctx.body = {
                    status: 1,
                    message: '登录成功',
                    response: { id, username, name, token }
                }
            } else {
                ctx.body = {
                    status: 0,
                    message: '密码不正确'
                }
            }
        } else {
            if (type === 'admin') {
                ctx.body = {
                    status: 0,
                    message: '管理员账号不存在'
                }
            } else {
                ctx.body = {
                    status: 0,
                    message: '用户不存在'
                }
            }
        }
    }
    // 用户列表+搜索+分页
    static async list(ctx) {
        let { currentPage, pageSize, keyword } = ctx.query
        currentPage = currentPage === undefined || Number(currentPage) < 1 ? 1 : Number(currentPage)  // 当前页码
        pageSize = pageSize === undefined ? 20 : Number(pageSize)  // 每页条数
        keyword = keyword === undefined || keyword === '' ? '%' : `%${keyword}%` // 关键词
        let allResponse = await userModel.findAll({
            where: {
                username: {
                    [Op.not]: 'admin',
                    [Op.like]: keyword
                }
            }
        })
        let total = allResponse.length      // 全部条数
        let pageCount = Math.ceil(total / pageSize)   // 页数
        let response = await userModel.findAll({
            offset: (currentPage - 1) * pageSize,
            limit: pageSize,
            attributes: ['id', 'createdAt', 'username'],
            where: {
                username: {
                    [Op.not]: 'admin',
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

    }
    // 修改用户昵称/密码
    static async update(ctx) {
        let { name, newPassword, password } = ctx.request.body;
        let { id } = await getUserInfo(ctx)  // 用户id
        let user = await userModel.findOne({ where: { id } })
        if (user) {
            let isSame = await passwordCompare(password, user.password)  // 校验密码是否正确
            if (isSame) {
                let atrr = {}
                if (name) {
                    atrr = { name }
                } else {
                    let bcryptPassword = await passwordHash(newPassword)  // 新密码加密
                    atrr = { password: bcryptPassword }
                }
                let response = await userModel.update(atrr, {
                    where: { id }
                })
                if (response[0] === 1) {
                    ctx.body = {
                        status: 1,
                        message: '修改成功'
                    }
                } else {
                    ctx.body = {
                        status: 0,
                        message: '修改失败',
                    }
                }
            } else {
                ctx.body = {
                    status: 0,
                    message: '密码不正确'
                }
            }
        } else {
            ctx.body = {
                status: 0,
                message: '用户不存在'
            }
        }
    }
    // 删除用户
    static async del(ctx) {
        let { id } = ctx.request.body
        let response = await userModel.destroy({
            where: { id }
        })
        if (response === 1) {
            await commentModel.destroy({ where: { userId: null } }) // 删除评论
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

module.exports = userController