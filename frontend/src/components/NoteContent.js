import React, { Component } from 'react';
import NoteTextInput from './NoteTextInput';

export default class NoteContent extends Component {

  shouldComponentUpdate(nextProps){
    return nextProps.html !== this.nodeSelect.innerHTML
  };

  componentDidUpdate() {
    if(this.props.html !== this.nodeSelect.innerHTML) {
      this.nodeSelect.innerHTML = this.props.html;
    }
  };


  emitChange = () => {
    let html = this.nodeSelect.innerHTML;
    if(this.props.onChange && html !== this.lastHtml) {
      this.props.onChange({
        target: {
          value: html
        }
      })
    }
    this.lastHtml = html;
  };

  render() {
    console.log(this.props)
    const { ...otherAttributes } = this.props;
    return(
      <p ref={(ref) => {this.nodeSelect = ref} }
            onInput={this.emitChange}
            onBlur={this.emitChange}
            contentEditable
            dangerouslySetInnerHTML={{__html: this.props.html}}>{this.props.value}</p>
    )
  }

}