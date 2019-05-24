import Home from '@/view/web/home/index';
import Arrange from '@/view/web/arrange/index';
import Categories from '@/view/web/categories/index';
import About from '@/view/web/about/index';
import ArticleDetail from '@/view/web/articleDetail/index';
export default [
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
        path: '/article/id/:id',
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
]
