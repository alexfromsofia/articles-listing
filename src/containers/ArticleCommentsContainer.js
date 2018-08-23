import React, { Component } from 'react';
import { connect } from 'react-redux';

import { submitComment } from '../actions/comments';

import CommentItemComponent from '../components/Comments/CommentItemComponent';
import CommentActionsComponent from '../components/Comments/CommentActionsComponent';

class ArticleCommentsContainer extends Component {
  constructor() {
    super();

    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }
  
  handleCommentSubmit({ parentCommentId = null, text = '' }) {
    const { articleId } = this.props;
    
    if (!text) return

    this.props.onSubmitComment({ articleId, parentCommentId, text })
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

  renderCommentActions() {
    return (
      <CommentActionsComponent onSubmit={this.handleCommentSubmit} />
    )
  }

  render() {
    return (
      <div>
        {this.renderCommentActions()}
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
