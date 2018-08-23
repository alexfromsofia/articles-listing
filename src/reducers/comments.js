import { FETCH_COMMENTS, ADD_COMMENT } from '../actions/comments';

const initialState = {
  commentsById: {},
  commentsIds: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return action.payload
    case ADD_COMMENT:
      const { payload } = action;
      const { commentsIds } = state;
      const commentsById = Object.assign({}, state, {
        commentsById: Object.assign({}, state.commentsById, {
          [payload.id]: { ...payload }
        })
      })

      return {
        ...commentsById,
        commentsIds: [...commentsIds, payload.id],
      }

    default:
      return state
  }
}
