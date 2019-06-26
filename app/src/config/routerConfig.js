
import Bundle from '@/lib/bundle'

let webConfig = [
    {
        path: '/',
        title: '首页',
        exact: true,
        component: Bundle(() => import(
            /* webpackChunkName: "index" */
            '@/view/web/home'
        )),
    },
    {
        path: '/arrange',
        title: '归档',
        exact: true,
        component: Bundle(() => import(
            /* webpackChunkName: "arrange" */
            '@/view/web/arrange'
        )),
    },
    {
        path: '/categories',
        title: '分类',
        exact: true,
        component: Bundle(() => import(
            /* webpackChunkName: "categories" */
            '@/view/web/categories'
        )),
    },
    {
        path: '/about',
        title: '关于',
        exact: true,
        component: Bundle(() => import(
            /* webpackChunkName: "about" */
            '@/view/web/about'
        )),
    },
    {
        path: '/article',
        title: '文章列表',
        exact: true,
        component: Bundle(() => import(
            /* webpackChunkName: "index" */
            '@/view/web/home'
        )),
    },
    {
        path: '/article/:id',
        title: '文章详情',
        exact: true,
        component: Bundle(() => import(
            /* webpackChunkName: "articleDetail" */
            '@/view/web/articleDetail'
        )),
    },
    {
        path: '/tag/:name',
        title: '标签归档',
        exact: true,
        component: Bundle(() => import(
            /* webpackChunkName: "arrange" */
            '@/view/web/arrange'
        )),
    },
    {
        path: '/category/:name',
        title: '分类归档',
        exact: true,
        component: Bundle(() => import(
            /* webpackChunkName: "arrange" */
            '@/view/web/arrange'
        )),
    },
]

let adminConfig = [
    {
        path: '/admin',
        title: '首页',
        exact: true,
        component: Bundle(() => import(
            /* webpackChunkName: "admin-index" */
            '@/view/admin/home'
        )),
    },
    {
        path: '/admin/article/add',
        title: '创建文章页',
        exact: true,
        component: Bundle(() => import(
            /* webpackChunkName: "articleAdd" */
            '@/view/admin/articleEdit'
        )),
    },
    {
        path: '/admin/article/edit/:id',
        title: '文章编辑页',
        exact: true,
        component: Bundle(() => import(
            /* webpackChunkName: "articleEdit" */
            '@/view/admin/articleEdit'
        )),
    },
    {
        path: '/admin/user/list',
        title: '用户管理',
        exact: true,
        component: Bundle(() => import(
            /* webpackChunkName: "userList" */
            '@/view/admin/userList'
        )),
    },
]

export {
    webConfig, adminConfig
}