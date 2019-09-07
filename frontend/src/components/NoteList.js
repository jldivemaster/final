import React from 'react'
import '../NoteList.scss'
import Note from './Note'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete'
import { List, ListItem, Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  }
}));

export default class NoteList extends React.Component {

  setModNum = () => {
    if(this.props.mod === '0'){
      return 'Pre-Work'
    } else {
      return 'Mod ' + this.props.mod
    }
  };

  handleNoteDelete = (e) => {
    this.props.handleNoteDelete(e.target.id)
    alert("Note successfully deleted")
  }


  render() {
    const modNum = this.setModNum();
    return(
      <div {...{ className: "wrapper" }}>
      <h1>{modNum}</h1>
        <List {...{ className: "accordian-list" }} alignItems="flex-start">
          {this.props.notes.map((note, key) => {
            return (
              <ul {...{ className: "accordian-list__item", key }}>
              <ListItem >
                <Note {...note} handleNoteDelete={this.handleNoteDelete} />
                <Fab aria-label="delete" className='accordion-item__delete-btn' size='small' id={note.id} onClick={this.handleNoteDelete} >
                <DeleteIcon className='delete-btn' label='Delete' />
                </Fab>
              </ListItem>
              <Divider variant="inset" />
              </ul>

            )
          })}
        </List>
      </div>
    )
  }
}

// href="#card-element-189612"

// {this.props.items.map(item => (
//   <li key={item.id}>{item.text}</li>
// ))}
