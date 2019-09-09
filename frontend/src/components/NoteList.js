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
    opacity: '0.4'
  }
}));

export default function NoteList(props) {

  const classes = useStyles();

  const setModNum = () => {
    if(props.mod === '0'){
      return 'Pre-Work'
    } else {
      return 'Mod ' + props.mod
    }
  };

  const handleNoteDelete = (e) => {
    props.handleNoteDelete(e.target.id)
    alert("Note successfully deleted")
  }



    // const modNum = this.setModNum();
    return(
      <div {...{ className: "wrapper" }}>
      <h2>{setModNum()}</h2>
        <List {...{ className: "accordian-list" }} >
          {props.notes.map((note, key) => {
            return (
              <ul {...{ className: "accordian-list__item", key }}>
              <ListItem >
                <Note note={note} handleNoteDelete={handleNoteDelete} handleNoteEdit={props.handleNoteEdit} />
                <Fab aria-label="delete" className={classes.fab} size='small' id={note.id} onClick={handleNoteDelete} >
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

// href="#card-element-189612"

// {this.props.items.map(item => (
//   <li key={item.id}>{item.text}</li>
// ))}
