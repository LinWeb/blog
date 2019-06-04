import Home from '@/view/web/home/index';
import Arrange from '@/view/web/arrange/index';
import Categories from '@/view/web/categories/index';
import About from '@/view/web/about/index';
import ArticleDetail from '@/view/web/articleDetail/index';
import AdminHome from '@/view/admin/home/index';
import ArticleEdit from '@/view/admin/articleEdit';
import UserList from '@/view/admin/userList';

export default {
    web: [
        {
            path: '/',
            title: '首页',
            exact: true,
            component: Home,
            isPrivate: false,
        },
        {
            path: '/arrange',
            title: '归档',
            exact: true,
            component: Arrange,
            isPrivate: false,
        },
        {
            path: '/categories',
            title: '分类',
            exact: true,
            component: Categories,
            isPrivate: false,
        },
        {
            path: '/about',
            title: '关于',
            exact: true,
            component: About,
            isPrivate: false,
        },
        {
            path: '/article',
            title: '文章列表',
            exact: true,
            component: Home,
            isPrivate: false,
        },
        {
            path: '/article/:id',
            title: '文章详情',
            exact: true,
            component: ArticleDetail,
            isPrivate: false,
        },
        {
            path: '/tag/:name',
            title: '标签归档',
            exact: true,
            component: Arrange,
            isPrivate: false,
        },
        {
            path: '/category/:name',
            title: '分类归档',
            exact: true,
            component: Arrange,
            isPrivate: false,
        },
    ],
    admin: [
        {
            path: '/admin',
            title: '首页',
            exact: true,
            component: AdminHome,
            isPrivate: false,
        },
        {
            path: '/admin/article/add',
            title: '创建文章页',
            exact: true,
            component: ArticleEdit,
            isPrivate: false,
        },
        {
            path: '/admin/article/edit/:id',
            title: '文章编辑页',
            exact: true,
            component: ArticleEdit,
            isPrivate: false,
        },
        {
            path: '/admin/user/list',
            title: '用户管理',
            exact: true,
            component: UserList,
            isPrivate: false,
        },
    ]
}