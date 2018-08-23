import { FETCH_INITIAL_ARTICLES } from '../actions/articles';

const initialState = {
  articlesById: {},
  articlesIds: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INITIAL_ARTICLES:
      return action.payload
    default:
      return state
  }
}
