import axios from 'axios';
import { API_URL, GET_COMMENTS, GET_POSTS, SET_POSTS } from '../../../constants';
import fetch from 'isomorphic-fetch'


export const getPosts = () => async dispatch => {
  const postsFetch = await fetch(`${API_URL}/posts`)
  const posts = await postsFetch.json();
  dispatch({
    type: GET_POSTS,
    payload: posts
  })
  return posts;
}
