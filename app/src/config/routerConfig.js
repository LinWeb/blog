
import Bundle from '@/lib/bundle'

let webConfig = [
    {
        path: '/',
        title: '首页',
        exact: true,
        component: Bundle(() => import('@/view/web/home/index')),
        isPrivate: false,
    },
    {
        path: '/arrange',
        title: '归档',
        exact: true,
        component: Bundle(() => import('@/view/web/arrange/index')),
        isPrivate: false,
    },
    {
        path: '/categories',
        title: '分类',
        exact: true,
        component: Bundle(() => import('@/view/web/categories/index')),
        isPrivate: false,
    },
    {
        path: '/about',
        title: '关于',
        exact: true,
        component: Bundle(() => import('@/view/web/about/index')),
        isPrivate: false,
    },
    {
        path: '/article',
        title: '文章列表',
        exact: true,
        component: Bundle(() => import('@/view/web/home/index')),
        isPrivate: false,
    },
    {
        path: '/article/:id',
        title: '文章详情',
        exact: true,
        component: Bundle(() => import('@/view/web/articleDetail/index')),
        isPrivate: false,
    },
    {
        path: '/tag/:name',
        title: '标签归档',
        exact: true,
        component: Bundle(() => import('@/view/web/arrange/index')),
        isPrivate: false,
    },
    {
        path: '/category/:name',
        title: '分类归档',
        exact: true,
        component: Bundle(() => import('@/view/web/arrange/index')),
        isPrivate: false,
    },
]

let adminConfig = [
    {
        path: '/admin',
        title: '首页',
        exact: true,
        component: Bundle(() => import('@/view/admin/home/index')),
        isPrivate: false,
    },
    {
        path: '/admin/article/add',
        title: '创建文章页',
        exact: true,
        component: Bundle(() => import('@/view/admin/articleEdit')),
        isPrivate: false,
    },
    {
        path: '/admin/article/edit/:id',
        title: '文章编辑页',
        exact: true,
        component: Bundle(() => import('@/view/admin/articleEdit')),
        isPrivate: false,
    },
    {
        path: '/admin/user/list',
        title: '用户管理',
        exact: true,
        component: Bundle(() => import('@/view/admin/userList')),
        isPrivate: false,
    },
]

export {
    webConfig, adminConfig
}