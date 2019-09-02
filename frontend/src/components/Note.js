import React from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames';
import NoteTextInput from './NoteTextInput'
import  style from '../Note.css'

export default class Note extends React.Component {

  // static propTypes = {
  //   note: PropTypes.object.isRequired,
  //   editNote: PropTypes.func.isRequired,
  //   deleteNote: PropTypes.func.isRequired
  // };

  constructor(props, context){
    super(props, context);
    this.state = { opened: false,
                editing: false }
  }
  handleEdit = () => {
    console.log("editing")
    this.setState({ editing: true })
    // Change text to form textarea for editing.  Add Return key listener to save edits.
  }

  // handleSave = (text) => {
  //   const { note, deleteNote, editNote } = this.props;
  //   if(text == ""){
  //     deleteNote(note);
  //   } else {
  //     editNote(note, text);
  //   }
  //   this.setState({ editing: false })
  // };

  handleDelete() {
    console.log("deleting")
    // Delete fetch to server, unrender notelist item.
  }

  // editView() {
  //   const {
  //     props: { note },
  //     state: { opened }
  //        } = this
  //
  //   // let element;
  //   if(this.state.editing) {
  //     return (
  //       <NoteTextInput
  //         body={note.body}
  //         editing={this.state.editing}
  //         onSave={this.handleSave}
  //       />
  //     )} else {
  //     return (
  //     <div
  //       {...{ className: `accordion-item, ${opened && 'accordion-item--opened'}`,
  //
  //     }} >
  //       <div {...{ className: 'accordion-item__line', onClick: () => { this.setState({ opened: !opened }) } }}>
  //           <h3 {...{ className: 'accordion-item__title' }}>
  //             Note.Title
  //           </h3>
  //           <p {...{ className: 'accordion-item__ref' }}>Note.quick_ref</p>
  //           <span {...{ className: 'accordion-item__icon' }}/>
  //       </div>
  //       <div {...{ className: 'accordion-item__inner' }}>
  //         <div {...{ className: 'accordion-item__content' }} onDoubleClick={this.handleEdit}>
  //             <p {...{ className: 'accordion-item__body' }}>
  //               note.body
  //             </p>
  //             <button id="delete-btn" onClick={this.handleDelete}>Delete</button>
  //         </div>
  //       </div>
  //     </div>
  //   )}
  // };
  //
  // setClassName() {
  //   if ([style.editing]) {
  //     return this.state.editing;
  //   } else if([style.normal]) {
  //     return !this.state.editing;
  //   }
  // }

  render() {
    const {
      // props: { note },
      state: { opened }
         } = this

    let element;
    if(this.state.editing) {
      element = (
        <div {...{ className: 'accordion-item__inner' }}>
          <div {...{ className: 'accordion-item__content' }} onDoubleClick={this.handleEdit}>
            <div {...{ className: 'accordion-item__body' }}>
           <NoteTextInput body={this.props.body} editing={this.state.editing} onSave={this.handleSave} />
            </div>
             <button id="delete-btn" onClick={this.handleDelete}>Delete</button>
           </div>
         </div>
      )
    } else {
      element = (

          <div {...{ className: 'accordion-item__inner' }}>
            <div {...{ className: 'accordion-item__content' }} onDoubleClick={this.handleEdit}>
                <p {...{ className: 'accordion-item__body' }}>
                  {this.props.body}
                </p>
                <button id="delete-btn" onClick={this.handleDelete}>Delete</button>
            </div>
          </div>
      )
    }
    return (
      <div
        {...{ className: `accordion-item, ${opened && 'accordion-item--opened'}`,

      }} >
        <div {...{ className: 'accordion-item__line', onClick: () => { this.setState({ opened: !opened }) } }}>
            <h3 {...{ className: 'accordion-item__title' }}>
              {this.props.title}
            </h3>
            <p {...{ className: 'accordion-item__ref' }}>{this.props.quick_ref}</p>
            <span {...{ className: 'accordion-item__icon' }}/>
        </div>
      <div
      className={classnames({
                [style.editing]: this.state.editing,
                [style.normal]: !this.state.editing
              })}
            >
              {element}
      </div>
      </div>
    )};

}

// {classnames({
//   [style.editing]: this.state.editing,
//   [style.normal]: !this.state.editing
// })}
