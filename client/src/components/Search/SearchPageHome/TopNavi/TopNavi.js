import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/KeyboardBackspace';
import Dropdown from './Dropdown'

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0px'
  },
  appBar: {
    top: 0,
    bottom: 'auto',
    margin: '0px',
    boxShadow: 'none',

  },
  toolBar: {
    backgroundColor: '#5B4FED !important',
    margin: 'none'
},

  menuButton: {
    margin: 'none',
  },
  title: {
    flexGrow: 1,
    display: 'block',
    textAlign: 'center',
  },
  logo: {
    color: '#5B4FED',
  }
}));

function TopNavi() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar className={classes.toolBar}>
          <IconButton className={classes.logo}>
          <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Booked Up
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Open drawer"
          >
            <Dropdown />
          </IconButton>
       </Toolbar>
      </AppBar>
    </div>
  );
}


export default TopNavi;