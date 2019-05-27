


const hostname = window.location.hostname;
const protocol = window.location.protocol;
const BASE_URL = `${protocol}//${hostname}:3000`;
const GET_ARTICLES_URL = '/article/list';
const GET_TAGS_URL = '/tag/list';
const GET_CATEGORIES_URL = '/category/list';
const REGISTER_URL = '/user/register';
const LOGIN_URL = '/user/login';
export {
    BASE_URL,
    GET_ARTICLES_URL,
    GET_TAGS_URL,
    GET_CATEGORIES_URL,
    REGISTER_URL,
    LOGIN_URL
}