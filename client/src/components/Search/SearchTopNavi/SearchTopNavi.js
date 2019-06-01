import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  toolBar: {
    backgroundColor: '#5B4FED !important',
},

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      textAlign: 'center',

    },
  },
}));

function SearchTopNavi() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <IconButton className={classes.logo}>
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Search
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


export default SearchTopNavi;