import React, { Component } from 'react';
import { Button } from '@material-ui/core';


export default class NewNote extends Component {
    constructor(props){
      super(props)
      this.state = {
        title: '',
        ref: '',
        body: ''
      }
    };

    handleChange = name => (e) => {
      this.setState({ [name]: e.target.value })
    };

    handleClick = (e) => {
      e.persist();
      this.props.onNewNote(e)
      this.props.onToggle()
    }

  render() {
    return(
      <div className='new-note'>
        <h3>New Note Form</h3>
        <form className='new-form'>
        <input type="text" className='new-title-input' placeholder="title" name="title" value={this.state.title} onChange={this.handleChange('title')} />
        <input type="text" className='new-ref-input' placeholder="ref" name="ref" value={this.state.ref} onChange={this.handleChange('ref')} />
        <textarea cols='40' className='new-body-input' placeholder="body" name="body" value={this.state.body} onChange={this.handleChange('body')}>{this.state.body}</textarea>
        <br />
        <p>Mod # {this.props.mod}</p>

        <Button className='new-btn' variant='contained' onClick={this.handleClick}>Save New Note</Button>
        </form>
      </div>
    )
  };
}
