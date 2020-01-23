import axios from 'axios';
import fetch from 'isomorphic-fetch'
import { API_URL, GET_COMMENTS } from '../../../constants';


export const getComments = (postId) => async dispatch => {
  const commentsFetch = await fetch(`${API_URL}/comments`)
  const allComments = await commentsFetch.json();
  const comments = allComments.filter(comment => comment.postId===postId)
  dispatch({
    type: GET_COMMENTS,
    payload: postId ? comments : allComments
  })
  return comments;
}
