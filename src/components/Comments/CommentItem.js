import React, { Component } from 'react';
import moment from 'moment';

export default class CommentItem extends Component {
  constructor() {
    super()


  }

  componentDidMount() {
    const { articleId, id, repliesCount, onFetchArticleComments } = this.props;
    if (repliesCount > 0) {
      onFetchArticleComments({ parentCommentId: id, articleId })
    }
  }

  render() {
    const { text, author, createdAt, repliesCount } = this.props;

    return (
      <div className='comment-item'>
        <div className="comment-header">
          <p>
            <span>{author}</span>
            { moment.duration(moment(createdAt).diff(new Date())).humanize() }
          </p>
          <div className="comment-info">
            <p className="replies-count">{repliesCount}</p>
            <button className="reply">Reply</button>
          </div>
        </div>
        <div className="comment-container">
          {text}
        </div>
      </div>
    )
  }
}
