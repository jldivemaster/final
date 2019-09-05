import React from 'react'
import '../NoteList.scss'
import Note from './Note'

export default class NoteList extends React.Component {

  setModNum = () => {
    if(this.props.mod === '0'){
      return 'Pre-Work'
    } else {
      return 'Mod ' + this.props.mod
    }
  };


  render() {
    const modNum = this.setModNum();
    return(
      <div {...{ className: "wrapper" }}>
      <h1>{modNum}</h1>
        <ul {...{ className: "accordian-list" }}>
          {this.props.notes.map((note, key) => {
            return (
              <li {...{ className: "accordian-list__item", key }}>
                <Note {...note} handleNoteDelete={this.props.handleNoteDelete}/>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

// href="#card-element-189612"

// {this.props.items.map(item => (
//   <li key={item.id}>{item.text}</li>
// ))}
