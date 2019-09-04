import React from 'react'
import '../NoteList.scss'
import Note from './Note'

export default class SearchResults extends React.Component {

  // setModNum = () => {
  //   if(this.props.mod === '0'){
  //     return 'Pre-Work'
  //   } else {
  //     return 'Mod ' + this.props.mod
  //   }
  // };


  render() {
    // const modNum = this.setModNum();
    return(

      <div {...{ className: "wrapper" }}>
        <h2>Search Results</h2>
        <ul {...{ className: "accordian-list" }}>
          {this.props.notes.map((note, key) => {
            return (
              <li {...{ className: "accordian-list__item", key }}>
                <Note {...note} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

// <h1>{modNum}</h1>
