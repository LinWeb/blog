import { createStore, combineReducers, applyMiddleware } from 'redux'
import user from './user/reducer'
import article from './article/reducer'
import tag from './tag/reducer'
import category from './category/reducer'
import common from './common/reducer'
import comment from './comment/reducer'
import reply from './reply/reducer'
import thunkMiddleware from 'redux-thunk'
// import { createLogger } from 'redux-logger'
// const loggerMiddleware = createLogger()
const reducers = combineReducers({
  user, article, tag, category, common, comment, reply
})
const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware, // 允许我们 dispatch() 函数
    // loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
  )
)

export default store