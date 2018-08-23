import { loadArticles } from '../api/index';
import { arrangeById } from '../utils';

export const FETCH_INITIAL_ARTICLES = 'FETCH_INITIAL_ARTICLES';

export const getFirstArticle = data => data.filter((item, i) => i === 0);

export const fetchInitialArticles = () => dispatch => {
  loadArticles().then((response) => {
    const { data } = response;
    const articlesById = arrangeById(getFirstArticle(data));

    dispatch({
      type: FETCH_INITIAL_ARTICLES,
      payload: {
        articlesById,
        articlesIds: Object.keys(articlesById),
      },
    })
  })
}