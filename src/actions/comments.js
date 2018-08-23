import { addComment, loadComments } from '../api/index';
import { arrangeById } from '../utils';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';


export const fetchArticleComments = (options) => (dispatch, getState) => {
  loadComments(options).then((response) => {
    const { data } = response;
    const commentsById = arrangeById(data);

    dispatch({
      type: FETCH_COMMENTS,
      payload: {
        commentsById,
        commentsIds: Object.keys(commentsById),
      },
    })
  })
}

export const submitComment = ({ articleId = null, parentCommentId = null, text = null, }) =>
  (dispatch, getState) => {    
    addComment({ text, parentCommentId, articleId }).then((response) => {
      dispatch({
        type: ADD_COMMENT,
        payload: response.data,
      })
    })
  }
