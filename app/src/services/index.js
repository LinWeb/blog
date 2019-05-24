import axios from 'axios'
// import { Toast } from 'antd-mobile';
// import * as USER from './user';
// import * as COMMENT from './comment'
import * as ARTICLE from './article'
import * as TAG from './tag'
import * as CATEGORY from './category'
import API from '@/config/api'
// import checkLogin from '../check/check_login'

axios.defaults.baseURL = API.BASE_URL;
axios.interceptors.request.use((config) => {
    // if (config.params) config.params.per_page_count = 4 // 测试
    // Toast.loading('', 0)
    // if (PRIVATE_URLS.includes(config.url)) {
    //     // 判断哪些url需要验证是否已登录
    //     // 要怎么跳转？要怎么取消请求？
    //     if (!checkLogin()) {
    //         window.location = '#login'
    //         return new Error('no login')
    //     }
    // }
    // config.withCredentials = true  // 设置浏览器自动存储服务器cookie
    return config
}, (error) => {
    return Promise.reject(error)
})
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    if (response.data.status !== 1) {
        // Toast.fail(response.data.msg, 1);
        return null
    } else {
        // Toast.success(response.data.msg, 1);
        return response.data
    }
}, function (error) {
    console.log(error)
    // Toast.fail(error.message, 1);
    return Promise.reject(error);
});


export default {
    ...ARTICLE, ...TAG, ...CATEGORY
}