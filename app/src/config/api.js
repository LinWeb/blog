const hostname = window.location.hostname;
const protocol = window.location.protocol;
// const BASE_URL = process.env.NODE_ENV === 'production' ?
//     `${protocol}//${hostname}/api` :
//     `${protocol}//${hostname}:3000/api`;
const BASE_URL='https://www.lxsblog.cn/api'
const GET_ARTICLES_URL = '/article/list';
const GET_ARTICLE_DETAIL_URL = '/article/detail';
const GET_TAGS_URL = '/tag/list';
const GET_CATEGORIES_URL = '/category/list';
const REGISTER_URL = '/user/register';
const CHECK_USERNAME_URL = '/user/checkUsername';
const LOGIN_URL = '/user/login';
const UPDATE_USER_URL = '/user/update';
const COMMENT_ADD_URL = '/comment/add';
const COMMENT_DEL_URL = '/comment/del';
const GET_COMMENTS_URL = '/comment/list';
const REPLY_ADD_URL = '/reply/add';
const REPLY_DEL_URL = '/reply/del';
const ARTICLE_ADD_URL = '/article/add';
const ARTICLE_UPDATE_URL = '/article/update';
const ARTICLE_DEL_URL = '/article/del';
const GET_USERS_URL = '/user/list';
const USER_DEL_URL = '/user/del';

export {
    BASE_URL,
    GET_ARTICLES_URL,
    GET_ARTICLE_DETAIL_URL,
    GET_TAGS_URL,
    GET_CATEGORIES_URL,
    REGISTER_URL,
    LOGIN_URL,
    CHECK_USERNAME_URL,
    UPDATE_USER_URL,
    COMMENT_ADD_URL,
    COMMENT_DEL_URL,
    GET_COMMENTS_URL,
    REPLY_ADD_URL,
    REPLY_DEL_URL,
    ARTICLE_ADD_URL,
    ARTICLE_UPDATE_URL,
    ARTICLE_DEL_URL,
    GET_USERS_URL,
    USER_DEL_URL,
}