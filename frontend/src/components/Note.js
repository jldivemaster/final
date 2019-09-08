import React from 'react';
// import classnames from 'classnames';
import NoteContent from './NoteContent';
import RefContent from './RefContent';
import NoteTextInput from './NoteTextInput'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit'
import { RIEToggle, RIEInput, RIETextArea, RIETags, RIESelect } from 'riek'
import _ from 'lodash'
import style from '../Note.css'

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  }
}));

export default class Note extends React.Component {

  constructor(props, context){
    super(props, context);
    this.state = { opened: false,
              // editingRef: false,
              editing: false,
              message: this.props.message,
              body: this.props.body,
              ref: this.props.quick_ref }
  }

  handleEdit = (e) => {
    console.log('editing' + e)
    // this.setState({ body: e.target.value})
  };

  // handleRefEdit = (e) => {
  //   console.log('editing' + e)
  //   this.setState({ ref: e.target.value})
  // };

  // toggleRefEdit = () => {
  //   this.setState({
  //     editingRef: !this.state.editingRef
  //   })
  // }

  toggleEdit = () => {
    this.setState({
      editing: !this.state.editing
    })
  }

  handleChange = name => (e) => {
    // console.log(name, e[name])
     this.setState({ [name]: e[name] })
     console.log(this.state)
  }


  handleDelete = (e) => {
    e.persist();
    console.log(e.target.id)
    let id = e.target.id.split("-")[1]
    this.props.handleNoteDelete(id)
  }

  setValue = (value) => {
    if(value == null) {
      return "none"
    } else {
      return value
    }
  }

  refView = () => {
    if(this.state.editing) {
      return(
        <NoteTextInput name="ref" value={this.state.ref} handleChange={this.handleChange('ref')} />
      )} else {
        return(
          <h3>{this.setValue(this.state.ref)}</h3>
        )}
  }

  bodyView = () => {
    if(this.state.editing) {
      return(
        <NoteTextInput name="body" value={this.state.body} handleChange={this.handleChange('body')} />
      )} else {
        return(
          <h4>{this.setValue(this.state.body)}</h4>
        )}
  };

  setEditPrompt = () => {
    console.log("prompt fired")
    if(this.state.editing) {
      return(<p className='edit-prompt'>...Editing - Click to save</p>)
    } else {
      return(<p className='edit-prompt'>Click to edit</p>)
    }
  }

  render() {
    // let id = "deletebtn-" + this.props.id
    // console.log(this.props)
    const {
      props: { lab_title, quick_ref, body,  },
      state: { opened }
         } = this



    return (
      <div
        {...{ className: `accordion-item, ${opened && 'accordion-item--opened'}`,
      }} >
        <div {...{ className: 'accordion-item__line' }}>
            <h3 {...{ className: 'accordion-item__title', onClick: () => { this.setState({ opened: !opened }) } }}>
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
    )};

}


// <button id={id} onClick={this.handleDelete}>Delete</button>
// <NoteContent html={this.state.bodyHtml} editing={this.state.editing} onChange={this.handleBodyEdit} />
// <RefContent html={this.state.refHtml} editing={this.state.editing} onChange={this.handleRefEdit} />
// {classnames({
//   [style.editing]: this.state.editing,
//   [style.normal]: !this.state.editing
// })}
