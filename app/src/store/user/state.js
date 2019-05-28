
let userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}')
let state = {
    userId: userInfo ? userInfo.userId : '',
    username: userInfo ? userInfo.username : '',
    name: userInfo ? userInfo.name : '',
    token: localStorage.getItem('token'),
}

export default state