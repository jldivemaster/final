
import React from 'react';
import '../Header.css';
import '../App.scss';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, InputBase, Divider, IconButton, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AssignmentIcon from '@material-ui/icons/Assignment';


const useStyles = makeStyles(theme => ({
  root: {
    padding: '1.5px 3px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  button: {
    alignSelf: 'flex-end',
  }
}));

export default function Header(props) {

  const classes = useStyles();


  function showSearchBar () {
    if(props.showSearchBar) {
    return(
      <div className="header">
      <Paper id="search-bar" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search by Keyword"
          inputProps={{ 'aria-label': 'search by keyword' }}
          onChange={props.onFilter}
        />
        <IconButton className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton color="primary" className={classes.iconButton} aria-label="assignment">
          <AssignmentIcon />
        </IconButton>
      </Paper>
      <Button variant="contained" color="primary" className={classes.button} onClick={props.onLogout}>
        Log Out</Button>
    </div>
    )
  }};


  return (
    <div id="header">
        <h2>Header</h2>
        <div>{showSearchBar()}</div>
    </div>
  );
}
