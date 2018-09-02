import React, { Component } from 'react';
import { connect } from 'react-redux';

import { submitComment, fetchArticleComments } from '../actions/comments';

import CommentItem from '../components/Comments/CommentItem';
import CommentActions from '../components/Comments/CommentActions';

class ArticleComments extends Component {
  constructor() {
    super();

    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit({ parentCommentId = null, text = '' }) {
    const { articleId } = this.props;

    if (!text) return;

    this.props.onSubmitComment({ articleId, parentCommentId, text })
  }

  renderComments() {
    const { articleId, commentsById, commentsIds, onFetchArticleComments } = this.props;

    return commentsIds.map((id) => {
      const propsToPass = {
        articleId,
        key: `comment-item-${id}`,
        ...commentsById[id],
        onFetchArticleComments,
      };

      return (
        <CommentItem {...propsToPass} />
      )
    })
  }

  renderCommentActions() {
    return (
      <CommentActions onSubmit={this.handleCommentSubmit} />
    )
  }

  render() {
    return (
      <div className="article-comments-container">
        Comments:
        {this.renderCommentActions()}
        {this.renderComments()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  commentsById: state.comments.commentsById,
  commentsIds: state.comments.commentsIds,
});

const mapDispatchToProps = dispatch => ({
  onFetchArticleComments: (options) => dispatch(fetchArticleComments(options)),
  onSubmitComment: (options) => dispatch(submitComment(options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleComments);
