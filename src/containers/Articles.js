import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchInitialArticles } from '../actions/articles';
import { fetchArticleComments } from '../actions/comments';
import ArticleItem from '../components/Articles/ArticleItem';

class Articles extends Component {
  componentDidMount() {
    this.handleFetchInitialArticle()
  }

  handleFetchInitialArticle() {
    this.props.onFetchInitialArticles();
  };

  render() {
    const { articlesIds, articlesById, onFetchArticleComments } = this.props;

    if (!articlesIds || !articlesIds.length) return null;

    return articlesIds.map((id, i) => {
      const propsToPass = {
        key: `article-${i}`,
        onFetchArticleComments,
        ...articlesById[id],
      };

      return (
        <ArticleItem {...propsToPass} />
      );
    })
  }
}

const mapStateToProps = state => ({
  articlesById: state.articles.articlesById,
  articlesIds: state.articles.articlesIds,
});

const mapDispatchToProps = dispatch => ({
  onFetchInitialArticles: () => dispatch(fetchInitialArticles()),
  onFetchArticleComments: (options) => dispatch(fetchArticleComments(options))
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
