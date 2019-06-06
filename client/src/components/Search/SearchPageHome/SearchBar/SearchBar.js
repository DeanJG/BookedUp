import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: '20px',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    marginLeft: 0,
    width: '100%',
    border: '1.5px solid #5B4FED',
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#5B4FED',
  },
  inputRoot: {
    color: '#5B4FED',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

function SearchAppBar(props) {
  const classes = useStyles()
  console.log(props)
  const [title, setTitle] = React.useState('')
  function updateTitle(e) {
    setTitle(e.target.value)
  }
  console.log('here are props: ', props)
  return (
    <div className={classes.root}>
        <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <IconButton component={ Link } to='/searchedbook'>
                {/* <div onClick={() => props.getBookInfo(title)}>
                  <SearchIcon />
                </div> */}
              </IconButton>
            </div>
            <InputBase
              placeholder="Search…"
              id="title"
              value={title}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={updateTitle}
            />
          </div>
          <button onClick={() => props.getBookInfo(title)}>fdioafdoia</button>
        </Toolbar>
    </div>
  );
}

export default SearchAppBar;
