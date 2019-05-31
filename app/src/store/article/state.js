let state = {
    articleListData: {   // 文章列表数据
        articleList: [],
        pager: {
            currentPage: 0,
            pageCount: 0,
            pageSize: 0,
            total: 0
        }
    },
    newThreeArticles: [],  // 最新的三篇文章数据
}

export default state