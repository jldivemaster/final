import React from 'react';
import { Grid, Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import style from '../Note.css';

export default class Note extends React.Component {

  constructor(props, context){
    super(props, context);
    this.state = { opened: false,
              // editingRef: false,
              editing: false,
              id: this.props.note.id,
              body: this.props.note.body,
              ref: this.props.note.quick_ref }
  };

  openClose = () => {
    if(this.state.opened){
      this.setState({ editing: false })
    }
    this.setState({ opened: !this.state.opened })

  };

  handleEdit = (e) => {
    console.log('editing' + e)
    // this.setState({ body: e.target.value})
  };


  toggleEdit = (e) => {
    if(this.state.editing){
      console.log('save edit', e, this.state)
      this.props.handleNoteEdit(this.state)
    }
    this.setState({
      editing: !this.state.editing
    })
  };

  handleChange = name => (e) => {
    // console.log(e.target)
     this.setState({ [name]: e.target.value })
     this.autoExpand(e)
  };


  handleDelete = (e) => {
    e.persist();
    // console.log(e.target.id)
    let id = e.target.id.split("-")[1]
    this.props.handleNoteDelete(id)
  };

  setValue = (value) => {
    if(value == null) {
      return "none"
    } else {
      return value
    }
  };

  refView = () => {
    if(this.state.editing) {
      return(
        <input type="text" className='ref-input' name="ref" value={this.state.ref} onChange={this.handleChange('ref')} />
      )} else {
        return(
          this.setValue(this.state.ref)
        )}
  };

  bodyView = () => {
    if(this.state.editing) {
      return(
        <textarea cols='40' className='body-input' name="body" value={this.state.body} onChange={this.handleChange('body')}>{this.state.body}</textarea>
      )} else {
        return(
          this.setValue(this.state.body)
        )}
  };

  setEditPrompt = () => {
    // console.log("prompt fired")
    if(this.state.editing) {
      return(<p className='edit-prompt'>...Editing - Click to save</p>)
    } else {
      return(<p className='edit-prompt'>Click to edit</p>)
    }
  };

  autoExpand = (e) => {
    // console.log(e.target)
    let field = e.target
    field.style.height = "inherit";
    let computed = window.getComputedStyle(field)
    let height = parseInt(computed.getPropertyValue('border-top-width'), 10)
               + parseInt(computed.getPropertyValue('padding-top'), 10)
               + field.scrollHeight
               + parseInt(computed.getPropertyValue('padding-bottom'), 10)
               + parseInt(computed.getPropertyValue('border-bottom-width'), 10);
    field.style.height = height + 'px';
  };

  render() {
    const {
      props: { lab_title, quick_ref, body,  },
      state: { opened }
         } = this

    return (
      <div className='acc-item'>
      <div
        {...{ className: `accordion-item, ${opened && 'accordion-item--opened'}`,
      }} >
        <div {...{ className: 'accordion-item__line' }}>
            <h3 {...{ className: 'accordion-item__title' }} onClick={this.openClose} >
              {this.props.note.lab_title}
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
                  <Grid container>
                    <Grid>
                      <Fab color="primary" aria-label="add" className='accordion-item__edit-btn' size='small' onClick={this.toggleEdit} >
                        <EditIcon />
                      </Fab>
                    </Grid>
                    <Grid>
                      <div className='p' {...{ className: 'accordian-item__prompt' }}>{this.setEditPrompt()}</div>
                    </Grid>
                  </Grid>
              </div>
            </div>
        </div>
      </div>
      </div>
    )};
}
