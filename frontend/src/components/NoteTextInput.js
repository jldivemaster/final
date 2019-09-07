import React, { Component } from 'react';
import classnames from 'classnames';
import style from '../NoteTextInput.css';
import PropTypes from 'prop-types';

export default class NoteTextInput extends Component {

  static propTypes = {


    body: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    onSave: PropTypes.func.isRequired,
    newNote: PropTypes.bool

  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      body: this.props.value || ''
    };
  }

  handleChange = (evt) => {
    console.log(evt.target)
    this.setState({ text: evt.target.value });
  };

  handleBlur = (evt) => {
    console.log(evt.target)
    // if (!this.props.newNote) {
    //   this.props.onSave(evt.target.value);
    // }
  };

  render() {
    console.log(this.props)
    return (
      <p
        className={classnames({
          [style.edit]: this.props.editing,
          [style.new]: this.props.newNote
        })}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus={true}
        value={this.state.body}
        contentEditable
        onBlur={this.handleBlur}
        onChange={this.props.handleChange}
      >{this.state.body}</p>
    );
  }
}
