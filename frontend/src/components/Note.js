import React from 'react'

export default class Note extends React.Component {
  state = { opened: false }

  handleEdit() {
    console.log("editing")
    // Change text to form textarea for editing.  Add Return btn listener to save edits.
  }

  handleDelete() {
    console.log("deleting")
    // Delete fetch to server, unrender notelist item.
  }

  render() {
    const {
      props: { body, quick_ref, title },
      state: { opened }
         } = this

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
        <div {...{ className: 'accordion-item__inner' }}>
          <div {...{ className: 'accordion-item__content' }} onDoubleClick={this.handleEdit}>
              <p {...{ className: 'accordion-item__body' }}>
                {body}
              </p>
              <button id="delete-btn" onClick={this.handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    )}

}
