


const hostname = window.location.hostname;
const protocol = window.location.protocol;
const API = {
    BASE_URL: `${protocol}//${hostname}:3000`,
    GET_ARTICLES_URL: '/article/list',
    GET_TAGS_URL: '/tag/list',
    GET_CATEGORIES_URL: '/category/list',
}
export default API 