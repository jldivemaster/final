import React from 'react'
import '../NoteList.scss'
import Note from './Note'
import NewNote from './NewNote'
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete'
import { List, ListItem, Divider, Fab, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    opacity: '0.4'
     }
}) );

export default function NoteList(props) {

  const [values, setValues] = React.useState({
    newNote: false
  });

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
  };

  const toggleView = () => {
    setValues({...values, newNote: !values.newNote })
  };

  const newNoteView = () => {
    if(values.newNote){
      return(
        <NewNote mod={props.mod} onNewNote={props.newNote} onToggle={toggleView}/>
    )} else {
      return(
        <Button className='new-btn' variant='contained' onClick={toggleView}>Add A Note</Button>
    )}
  };

    return(
      <div {...{ className: "wrapper" }}>
      <h2>{setModNum()}</h2>
         <Grid container className='new-note-container'>{newNoteView()}</Grid>
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
