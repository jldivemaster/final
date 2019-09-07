
import React from 'react';
import '../Header.css';
import '../App.scss';
import '../logo512.png'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, InputBase, Divider, IconButton, Button, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AssignmentIcon from '@material-ui/icons/Assignment';


const useStyles = makeStyles(theme => ({
  container: {
    // display: 'grid',
    width: '100%',
  },
  root: {
    padding: '3px 3px 3px',
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    marginLeft: theme.spacing(3),
    // marginBottom: theme.spacing(0),
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
    float: 'right',
    marginLeft: theme.spacing(3),
    display: 'block',
    // position: 'relative',
    // marginBottom: theme.spacing(0),
  }
}));

export default function Header(props) {

  const [values, setValues] = React.useState({
    keyword: ""
  })

  const classes = useStyles();

  const updateKW = input => (e) => {
    setValues({...values, [input]: e.target.value })
  }

  const onSearch = () => {
    // e.persist();
    let keyword = values.keyword
    props.onSearch(keyword);
  }

  function showSearchBar () {

    if(props.showSearchBar) {
    return(
      <div>
      <Grid className={classes.container} spacing={4} className={classes.container}>
      <Grid item xs={9}>
      <Paper id="search-bar" className={classes.root}>
        <InputBase
          className={classes.input}
          name="keyword"
          placeholder="Search by Keyword"
          inputProps={{ 'aria-label': 'search by keyword' }}
          onChange={updateKW('keyword')}
          value={values.keyword}
        />
        <IconButton onClick={() => onSearch()} className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton color="primary" className={classes.iconButton} aria-label="assignment">
          <AssignmentIcon />
        </IconButton>
      </Paper>
      </Grid>
      <Grid item xs={2} className={classes.button}>
      <Button variant="contained" onClick={props.onSignOut}>
        Log Out</Button>
      </Grid>
      </Grid>
    </div>
    )
  }};

  let bg = require('../logo512.png')
  return (
    <div className="header" style ={ { backgroundImage: "url("+bg+")" } }>
        <h2 className='head-title'>Header</h2>
        {showSearchBar()}
    </div>
  );
}

// url('https://lh3.googleusercontent.com/MOf9Kxxkj7GvyZlTZOnUzuYv0JAweEhlxJX6gslQvbvlhLK5_bSTK6duxY2xfbBsj43H=w300')
