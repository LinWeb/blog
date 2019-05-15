import Home from '@/view/web/home/index';
import About from '@/view/web/about/index';

export default [
    {
        path: '/',
        title: '首页',
        exact: true,
        component: Home,
        isPrivate: false,
    }, {
        path: '/about',
        title: '关于',
        exact: true,
        component: About,
        isPrivate: false,
    },
]
