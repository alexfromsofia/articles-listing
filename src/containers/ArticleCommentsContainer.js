import React, { Component } from 'react';
import { connect } from 'react-redux';

import { submitComment } from '../actions/comments';

import CommentItemComponent from '../components/Comments/CommentItemComponent';
import CommentActionsComponent from '../components/Comments/CommentActionsComponent';

class ArticleCommentsContainer extends Component {
  handleCommentSubmit(commentId, parentCommentId) {
    this.props.onSubmitComment({ commentId, parentCommentId })
  }

  renderComments() {
    const { commentsById, commentsIds } = this.props;

    return commentsIds.map((id) => {
      const propsToPass = {
        key: `comment-item-${id}`,
        ...commentsById[id],
      }

      return (
        <CommentItemComponent {...propsToPass} />
      )
    })
  }

  renderComentActions() {
    return (
      <CommentActionsComponent onSubmit={this.handleCommentSubmit} />
    )
  }

  render() {
    return (
      <div>
        {this.renderComentActions()}
        Comments:
        {this.renderComments()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  commentsById: state.comments.commentsById,
  commentsIds: state.comments.commentsIds,
})

const mapDispatchToProps = dispatch => ({
  onSubmitComment: (options) => dispatch(submitComment(options)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleCommentsContainer);
