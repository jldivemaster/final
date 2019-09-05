import React from 'react';
// import classnames from 'classnames';
import NoteContent from './NoteContent';
import RefContent from './RefContent';
import { RIEToggle, RIEInput, RIETextArea, RIETags, RIESelect } from 'riek'
import _ from 'lodash'
// import style from '../Note.css'

export default class Note extends React.Component {

  constructor(props, context){
    super(props, context);
    this.state = { opened: false,
              editingRef: false,
              editingBody: false,
              body: this.props.body,
              ref: this.props.quick_ref }
  }

  handleBodyEdit = (e) => {
    console.log('editing' + e)
    this.setState({ body: e.target.value})
  };

  handleRefEdit = (e) => {
    console.log('editing' + e)
    this.setState({ ref: e.target.value})
  };

  toggleRefEdit = () => {
    this.setState({
      editingRef: !this.state.editingRef
    })
  }

  toggleBodyEdit = () => {
    this.setState({
      editingBody: !this.state.editingBody
    })
  }

  handleChange = name => (e) => {
    // console.log(name, e[name])
     this.setState({ [name]: e[name] })
  }


  handleDelete = (e) => {
    e.persist();
    console.log(e.target.id)
    let id = e.target.id.split("-")[1]
    this.props.handleNoteDelete(id)
  }

  refView = () => {
    if(this.state.editingRef) {
      return(
        <RIEInput name="ref" value={this.state.ref} change={this.handleChange('ref')} propName='ref' validate={_.isString} />
      )} else {
        return(
          <h3>{this.state.ref}</h3>
        )}
  }

  bodyView = () => {
    if(this.state.editingBody) {
      return(
        <RIEInput name="body" value={this.state.body} change={this.handleChange('body')} propName='body' validate={_.isString} />
      )} else {
        return(
          <h4>{this.state.body}</h4>
        )}
  }

  render() {
    let id = "deletebtn-" + this.props.id
    // console.log(this.props)
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
            <h4 {...{ className: 'accordion-item__ref' }} onDoubleClick={this.toggleRefEdit}>
            {this.refView()}
            </h4>
            <span {...{ className: 'accordion-item__icon' }}/>
        </div>
        <div >
            <div {...{ className: 'accordion-item__inner' }}>
              <div {...{ className: 'accordion-item__content' }}>
                  <div {...{ className: 'accordion-item__body' }} onDoubleClick={this.toggleBodyEdit}>
                   {this.bodyView()}
                  </div>
                  <button id="edit-btn" onClick={this.handleEdit}>Edit</button>
                  <button id={id} onClick={this.handleDelete}>Delete</button>
              </div>
            </div>
        </div>
      </div>
    )};

}

// <NoteContent html={this.state.bodyHtml} editing={this.state.editing} onChange={this.handleBodyEdit} />
// <RefContent html={this.state.refHtml} editing={this.state.editing} onChange={this.handleRefEdit} />
// {classnames({
//   [style.editing]: this.state.editing,
//   [style.normal]: !this.state.editing
// })}
