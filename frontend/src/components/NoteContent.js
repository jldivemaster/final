import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import NoteTextInput from './NoteTextInput';
import style from '../NoteContent.css';

export default class NoteContent extends Component {

  // static propTypes = {
  //   note: PropTypes.object.isRequired,
  //   editNote: PropTypes.func.isRequired,
  //   deleteNote: PropTypes.func.isRequired
  // };

  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
  }

  handleDoubleClick = () => {
    this.setState({ editing: true });
  };

  handleSave = (text) => {
    const { note, deleteNote, editNote } = this.props;
    if (text.length === 0) {
      deleteNote(note.id);
    } else {
      editNote(note.id, text);
    }
    this.setState({ editing: false });
  };


  handleDelete = () => {
    const { note, deleteNote } = this.props;
    deleteNote(note.id);
  };

  render() {
    const { note } = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <NoteTextInput
          body={note.body}
          editing={this.state.editing}
          onSave={this.handleSave}
        />
      );
    } else {
      element = (
        <div className={style.view}>
          <input
            className={style.toggle}
            type="checkbox"
            checked={note.completed}
            onChange={this.handleComplete}
          />
          <label onDoubleClick={this.handleDoubleClick}>
            {note.body}
          </label>
          <button
            className={style.destroy}
            onClick={this.handleDelete}
          />
        </div>
      );
    }

    return (
      <li
        className={classnames({
          [style.completed]: note.completed,
          [style.editing]: this.state.editing,
          [style.normal]: !this.state.editing
        })}
      >
        {element}
      </li>
    );
  }
}
