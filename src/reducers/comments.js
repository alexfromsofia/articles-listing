import { FETCH_COMMENTS } from '../actions/comments';

const initialState = {
  commentsById: {},
  commentsIds: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return action.payload
    default:
      return state
  }
}
