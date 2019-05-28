


const hostname = window.location.hostname;
const protocol = window.location.protocol;
const BASE_URL = `${protocol}//${hostname}:3000`;
const GET_ARTICLES_URL = '/article/list';
const GET_TAGS_URL = '/tag/list';
const GET_CATEGORIES_URL = '/category/list';
const REGISTER_URL = '/user/register';
const CHECK_USERNAME_URL = '/user/checkUsername';
const LOGIN_URL = '/user/login';
const UPDATE_USER_URL = '/user/update';

export {
    BASE_URL,
    GET_ARTICLES_URL,
    GET_TAGS_URL,
    GET_CATEGORIES_URL,
    REGISTER_URL,
    LOGIN_URL,
    CHECK_USERNAME_URL,
    UPDATE_USER_URL
}