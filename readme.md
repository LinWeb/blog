## 前言
此项目是个人博客，有前端界面+后台管理系统；目的是当做react和node的练手项目，同时还可以了解到服务器nginx部署web站点以及备案和域名的基本操作流程。

---
## 项目预览地址

http://39.105.133.130:8000

---

## 技术栈
#### 前端技术栈
react + antd + react-router + react-redux + axios
### 后端技术栈
koa2 + koa-router + mysql + sequelize

---

## 项目结构详解

### 后端项目结构

    ├── app                             //前端项目
    ├── config                          //项目配置
    │   ├── db.js                       //数据库配置文件
    │   └── index.js                    //token的key名
    ├── controller                      //控制器
    ├── lib                             //工具
    │   ├── bcrypt.js                   //密码加密
    │   └── token.js                    //登录token
    ├── middlewares                     //中间件
    │   ├── checkAuth.js                //检查是普通用户还是管理员
    │   ├── checkToken.js               //检查是否已经登录用户
    │   └── errorHandler.js             //错误中间件
    ├── model                           //数据表模型
    ├── router                          //路由配置
    ├── app.js                          //项目入口
    └── README.md                       //项目说明

### 前端项目结构

    └── src                             //项目主体
        ├── assets                      //资源文件夹
        ├── component                   //组件库
        │   ├── web                     //前台界面组件库
        │   ├── common                  //公共组件库
        │   └── admin                   //后台管理系统组件库
        ├── config                      //配置文件夹
        │   ├── api.js                  //接口配置文件
        │   └── routerConfig.js         //路由配置
        ├── lib                         //放置插件和工具
        │   ├── axios.js                //axios全局配置
        │   ├── checkAuth.js            //检查是否是普通用户还是管理员
        │   └── marked.js               //markdown转换器
        ├── router                      //路由
        │   ├── admin.js                //后台路由
        │   ├── index.js                //路由入口
        │   ├── main.js                 //路由中间件
        │   └── web.js                  //前台路由
        ├── service                     //接口请求
        ├── store                       //数据仓库
        ├── view                        //前台页面
        │   ├── web                     //前台界面页面
        │   ├── common                  //公共页面
        │   └── admin                   //后台管理系统页面
        └── index.js                    //项目入口

---

## 项目运行

- 配置数据库

安装mysql，新建一个名称叫“**blog**”的数据库

- 安装依赖

项目根目录和根目录的app目录下分别安装
```
npm install
```
- 启动项目

项目根目录和根目录的app目录下分别启动
```
npm start
```

---

## 后台模块
- 文章
    -  文章列表
    -  文章详情
    -  标签筛选
    -  分类筛选
    -  新增文章
    -  删除文章
    -  更新文章
- 标签  
    - 标签列表
- 分类
    - 分类列表
- 评论
    - 评论列表
    - 新增评论
    - 删除评论
- 回复
    - 新增回复
    - 删除回复
- 用户
    - 注册用户
    - 用户登录
    - 用户列表
    - 删除用户
    - 更新用户
    - 校验用户名是否已注册过

---


## 项目总结
- 开始做这个项目的时候，先明确项目的需求，然后设计好数据表，考虑到数据表的联系
- 因为项目是使用sequelize操作mysql，所以要提前了解开发文档，不然会走很多坑
- 个人来说，使用react的一个缺点是对数据监听方面没有vue用起来顺畅
- 使用antd这个react组件库，带来了界面设计方面的便利，自己只是再做一些样式的优化即可
