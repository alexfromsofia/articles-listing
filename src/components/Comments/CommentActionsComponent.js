import React, { Component } from 'react';

export default class CommentActionsComponent extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit() {
    const text = this.textarea.value;

    this.props.onSubmit({ text })
    this.textarea.value = '';
  }
  
  render() {
    return (
      <div>
        <textarea ref={(node) => {this.textarea = node;}}  />
        <button onClick={this.handleSubmit}>Submit comment</button>
      </div>
    )
  }
}
