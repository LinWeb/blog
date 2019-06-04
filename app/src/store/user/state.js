
let userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}')
let state = {
    userId: userInfo ? userInfo.userId : '',
    username: userInfo ? userInfo.username : '',
    name: userInfo ? userInfo.name : '',
    token: localStorage.getItem('token'),
    userListData: {
        userList: [],
        pager: {
            currentPage: 0,
            pageCount: 0,
            pageSize: 0,
            total: 0
        }
    },
}

export default state