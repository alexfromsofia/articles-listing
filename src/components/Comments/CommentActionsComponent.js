import React, { Component } from 'react';

export default class CommentActionsComponent extends Component {
  render() {
    const { onSubmit } = this.props;

    return (
      <div>
        <textarea name="" id="" cols="30" rows="10" />
        <button onClick={onSubmit}>Submit comment</button>
      </div>
    )
  }
}
