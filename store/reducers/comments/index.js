import { GET_COMMENTS } from '../../../constants';

export default (state = [], action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, comments: action.payload };
    default:
      return state;
  }
}
