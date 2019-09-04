import React from 'react';
// import classnames from 'classnames';
import NoteContent from './NoteContent';
import RefContent from './RefContent';

// import style from '../Note.css'

export default class Note extends React.Component {

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

  handleRefEdit = (e) => {
    console.log('editing' + e)
    this.setState({ refHtml: e.target.value})
  };

  toggleEditable = () => {
    this.setState({
      editing: !this.state.editing
    })
  }

  render() {

    const {
      props: { lab_title, quick_ref, body },
      state: { opened }
         } = this

    return (
      <div
        {...{ className: `accordion-item, ${opened && 'accordion-item--opened'}`,

      }} >
        <div {...{ className: 'accordion-item__line', onClick: () => { this.setState({ opened: !opened }) } }}>
            <h3 {...{ className: 'accordion-item__title' }}>
              {this.props.lab_title}
            </h3>
            <h4 {...{ className: 'accordion-item__ref' }} onDoubleClick={this.toggleEditable}>
            <RefContent html={this.state.refHtml} editing={this.state.editing} onChange={this.handleRefEdit} /></h4>
            <span {...{ className: 'accordion-item__icon' }}/>
        </div>
        <div >
            <div {...{ className: 'accordion-item__inner' }}>
              <div {...{ className: 'accordion-item__content' }}>
                  <div {...{ className: 'accordion-item__body' }} >
                    <NoteContent html={this.state.bodyHtml} editing={this.state.editing} onChange={this.handleBodyEdit} />
                  </div>
                  <button id="edit-btn" onClick={this.toggleEditable}>Edit</button>
                  <button id="delete-btn" onClick={this.handleDelete}>Delete</button>
              </div>
            </div>
        </div>
      </div>
    )};

}

// {classnames({
//   [style.editing]: this.state.editing,
//   [style.normal]: !this.state.editing
// })}
