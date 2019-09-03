
import React, { Component } from 'react';
import classnames from 'classnames';
import style from '../NoteTextInput.css';

export default class NoteTextInput extends Component {

  // static propTypes = {

  //
  //   body: PropTypes.string,
  //   placeholder: PropTypes.string,
  //   editing: PropTypes.bool,
  //   onSave: PropTypes.func.isRequired,
  //   newNote: PropTypes.bool

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
      <textarea
        className={classnames({
          [style.edit]: this.props.editing,
          [style.new]: this.props.newNote
        })}
        type="text"
        rows="15" cols="100"
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
