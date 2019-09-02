import React, { Component } from 'react';
import classnames from 'classnames';
import style from '../NoteTextInput.css';

export default class NoteTextInput extends Component {

  // static propTypes = {
  //   onSave: PropTypes.func.isRequired,
  //   text: PropTypes.string,
  //   placeholder: PropTypes.string,
  //   editing: PropTypes.bool,
  //   newTodo: PropTypes.bool
  // };

  constructor(props, context) {
    super(props, context);
    this.state = {
      body: this.props.body || ''
    };
  }

  handleSubmit = (evt) => {
    const text = evt.target.value.trim();
    if (evt.which === 13) {
      console.log()
      this.props.onSave(text);
      if (this.props.newNote) {
        this.setState({ text: '' });
      }
    }
  };

  handleChange = (evt) => {
    this.setState({ text: evt.target.value });
  };

  handleBlur = (evt) => {
    // if (!this.props.newNote) {
    //   this.props.onSave(evt.target.value);
    // }
  };

  render() {
    return (
      <input
        className={classnames({
          [style.edit]: this.props.editing,
          [style.new]: this.props.newNote
        })}
        type="textarea"
        placeholder={this.props.placeholder}
        autoFocus={true}
        value={this.state.body}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}
