import React, { Component } from 'react';
import ArticleCommentsContainer from '../../containers/ArticleComments';

export default class ArticleItem extends Component {
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
      <ArticleCommentsContainer articleId={this.props.id} />
    )
  }

  render() {
    return (
      <div className="article-item">
        <h1>{this.props.title}</h1>
        <img src={this.props.imageUrl} alt="" />
        <p>{this.props.text}</p>
        {this.renderComments()}
      </div>
    )
  }
}
