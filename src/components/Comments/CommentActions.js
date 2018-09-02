import React, { Component } from 'react';

export default class CommentActions extends Component {
  constructor() {
    super();

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    const { value } = this.textarea;

    if (e.keyCode === 13 && value) {
      this.props.onSubmit({ text: value });
      this.textarea.value = '';
      this.textarea.blur();
    }
  }

  render() {
    return (
      <div className="comment-actions">
        <textarea onKeyDown={this.handleKeyDown} ref={(node) => {this.textarea = node;}}  />
      </div>
    )
  }
}
