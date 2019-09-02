import React from 'react'

export default class Note extends React.Component {
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
  }

  render() {
    const {
      props: { body, quick_ref, title },
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
              {title}
            </h3>
            <p {...{ className: 'accordion-item__ref' }}>{quick_ref}</p>
            <span {...{ className: 'accordion-item__icon' }}/>
        </div>
        {element}
      </div>
    )
  };

}
