import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/MoreVert';
// import Logo from '../../../../../../assets/logo.png'

const useStyles = makeStyles(theme => ({
  root: {
  },
  appBar: {
    top: 0,
    bottom: 'auto',
  },
  toolBar: {
    backgroundColor: '#5B4FED !important',
},

  menuButton: {
    margin: 'none',
  },
  title: {
    flexGrow: 1,
    display: 'block',
    textAlign: 'center',
  },
}));

function TopNavi() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar className={classes.toolBar}>
          <IconButton className={classes.logo}>
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
            <MenuIcon />     
          </IconButton>
       </Toolbar>
      </AppBar>
    </div>
  );
}


export default TopNavi;