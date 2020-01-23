import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import postsReducer from './reducers/posts';
import commentsReducer from './reducers/comments';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export const initStore = (initialState) => {
  return createStore(combineReducers({
    posts: postsReducer,
    comments: commentsReducer
  }),initialState, bindMiddleware([thunkMiddleware]))
}
