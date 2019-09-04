import React from 'react';
// import classnames from 'classnames';
import NoteContent from './NoteContent';
import RefContent from './RefContent';

// import style from '../Note.css'

export default class Note extends React.Component {
<<<<<<< HEAD
  state = { opened: false,
            editing: false }

  openEdit = () => {
    console.log("editing")
    this.setState({ editing: true })
    // Change text to form textarea for editing.  Add Return btn listener to save edits.
  }

  saveEdit = (e) => {
    if(e.keyCode === 13) {
      console.log("saving")
      this.setState({ editing: false })
    } else {
      console.log("e")
    }
  };

  handleDelete() {
    console.log("deleting")
    // Delete fetch to server, unrender notelist item.
=======

  constructor(props, context){
    super(props, context);
    this.state = { opened: false,
              editing: false,
              bodyHtml: this.props.body,
              refHtml: this.props.quick_ref }
  }

  handleBodyEdit = (e) => {
    console.log('editing' + e)
    this.setState({ bodyHtml: e.target.value})
  };

  sendBodyEdit = (e) => {
    let note = {...this.props}
    console.log(note)
    note.body = e.target.parentNode.children[0].innerText
    this.props.handleNoteChange(note)
  }

  sendRefEdit = (e) => {
    let note = this.props
    note.quick_ref = e.target.parentNode.children[0].innerText
    this.props.handleNoteChange(note)
  }

  handleRefEdit = (e) => {
    console.log('editing' + e)
    this.setState({ refHtml: e.target.value})
  };

  toggleEditable = () => {

    this.setState({
      editing: !this.state.editing
    })
>>>>>>> f94e88b42e6ae55aa57eb0b993f5a45a2c2515ce
  }

  render() {
    // console.log(this.props)
    const {
      // props: { note },
      state: { opened }
         } = this

    let element;
    if(this.state.editing) {
      element = (
        <div {...{ className: 'accordion-item__inner' }}>
          <div {...{ className: 'accordion-item__content' }} onKeyPress={this.saveEdit}>
              <p {...{ className: 'accordion-item__body' }}>
                {body}
              </p>
              <button id="delete-btn" onClick={this.handleDelete}>Delete</button>
          </div>
        </div>
      )} else {
        element = (<div {...{ className: 'accordion-item__inner' }}>
          <div {...{ className: 'accordion-item__content' }} onDoubleClick={this.openEdit}>
              <p {...{ className: 'accordion-item__body' }}>
                {body}
              </p>
              <button id="delete-btn" onClick={this.handleDelete}>Delete</button>
          </div>
        </div>
      )}
    return (
      <div
        {...{ className: `accordion-item, ${opened && 'accordion-item--opened'}`,

      }} >
        <div {...{ className: 'accordion-item__line', onClick: () => { this.setState({ opened: !opened }) } }}>
            <h3 {...{ className: 'accordion-item__title' }}>
              {this.props.title}
            </h3>
            <h4 {...{ className: 'accordion-item__ref' }} onDoubleClick={this.toggleEditable}>
            <RefContent html={this.state.refHtml} editing={this.state.editing} onChange={this.handleRefEdit} /></h4>
            <span {...{ className: 'accordion-item__icon' }}/>
        </div>
<<<<<<< HEAD
        {element}
      </div>
    )
  };
=======
        <div >
            <div {...{ className: 'accordion-item__inner' }}>
              <div {...{ className: 'accordion-item__content' }}>
                  <div {...{ className: 'accordion-item__body' }} >
                    <NoteContent html={this.state.bodyHtml} editing={this.state.editing} onChange={this.handleBodyEdit} />
                  </div>
                  <button id="edit-btn" onClick={this.sendBodyEdit}>Edit</button>
                  <button id="delete-btn" onClick={this.handleDelete}>Delete</button>
              </div>
            </div>
        </div>
      </div>
    )};
>>>>>>> f94e88b42e6ae55aa57eb0b993f5a45a2c2515ce

}

// {classnames({
//   [style.editing]: this.state.editing,
//   [style.normal]: !this.state.editing
// })}
