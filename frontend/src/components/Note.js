import React from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import NoteTextInput from './NoteTextInput'
import  style from '../Note.css'

export default class Note extends React.Component {

  static propTypes = {
    note: PropTypes.object.isRequired,
    editNote: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired
  };

  constructor(props){
    super(props);
    this.state = { opened: false,
                editing: false }
  }
  handleEdit = () => {
    console.log("editing")
    this.setState({ editing: true })
    // Change text to form textarea for editing.  Add Return key listener to save edits.
  }

  handleSave(text) {
    const { note, deleteNote, editNote } = this.props;
    if(text == ""){
      deleteNote(note.id);
    } else {
      editNote(note.id, text);
    }
    this.setState({ editing: false })
  };

  handleDelete() {
    console.log("deleting")
    // Delete fetch to server, unrender notelist item.
  }

  editView() {
    const {
      props: { note },
      state: { opened }
         } = this

    // let element;
    if(this.state.editing) {
      return (
        <NoteTextInput
          body={note.body}
          editing={this.state.editing}
          onSave={this.handleSave}
        />
      )} else {
      return (
      <div
        {...{ className: `accordion-item, ${opened && 'accordion-item--opened'}`,

      }} >
        <div {...{ className: 'accordion-item__line', onClick: () => { this.setState({ opened: !opened }) } }}>
            <h3 {...{ className: 'accordion-item__title' }}>
              {note.title}
            </h3>
            <p {...{ className: 'accordion-item__ref' }}>{note.quick_ref}</p>
            <span {...{ className: 'accordion-item__icon' }}/>
        </div>
        <div {...{ className: 'accordion-item__inner' }}>
          <div {...{ className: 'accordion-item__content' }} onDoubleClick={this.handleEdit}>
              <p {...{ className: 'accordion-item__body' }}>
                {note.body}
              </p>
              <button id="delete-btn" onClick={this.handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    )}
  };

  setClassName() {
    if ([style.editing]) {
      return this.state.editing;
    } else if([style.normal]) {
      return !this.state.editing;
    }
  }

  render() {
    return (
      <div

        className={this.setClassName()}
      >
        {this.editView()}
      </div>
    )};

}

// {classnames({
//   [style.editing]: this.state.editing,
//   [style.normal]: !this.state.editing
// })}
