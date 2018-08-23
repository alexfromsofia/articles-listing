import React, { Component } from 'react';

export default class CommentItemComponent extends Component {
  render() {
    const { id, text, author, createdAt } = this.props;

    return (
      [
        <p key={`comment-author-${id}`}>Author: {author}</p>,
        <p key={`comment-created-at-${id}`}>{`Created At: ${new Date(createdAt)}`}</p>,
        <p key={`comment-comment-${id}`}>Comment: {text}</p>,
      ]
    )
  }
}
