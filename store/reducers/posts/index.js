import { GET_POSTS, SET_POSTS } from '../../../constants';

export default (state = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload };
    case SET_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
}
