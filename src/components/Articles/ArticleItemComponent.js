import React, { Component } from 'react';
import ArticleItemComments from '../../containers/ArticleCommentsContainer';

export default class ArticleItemComponent extends Component {
  componentDidMount() {
    const { commentsCount, onFetchArticleComments } = this.props;

    if (!commentsCount) return;

    onFetchArticleComments({
      articleId: this.props.id,
    })
  }

  renderComments() {
    const { commentsCount } = this.props;

    if (!commentsCount) {
      return (
        <div>No comments</div>
      )
    }

    return (
      <ArticleItemComments />
    )
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>,
        {this.renderComments()}
      </div>
    )
  }
}
