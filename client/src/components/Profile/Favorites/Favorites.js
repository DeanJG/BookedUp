import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
// import Host from '../../../../Assets/host.png'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  paper: {
    maxWidth: 400,
    margin: 10,
    padding: 10,
    textAlign: 'center',
  },
  paperDiv: {
    maxWidth: 400,
    padding: 10,
    textAlign: 'center',
    boxShadow: 'none',

  },
  header: {
    color: '#5B4FED',
  }
});

export default function LetterAvatars() {
  const classes = useStyles();

  return (
    <div>
    <Paper className={classes.paperDiv}>

    <Grid container justify="center" alignItems="center">
    <Paper className={classes.paper}>
    <Typography className={classes.header}><b>Favorites!</b>
    </Typography>
    <Grid container justify="center" alignItems="center">
      <i class="material-icons">keyboard_arrow_left</i>
      <img alt="Remy Sharp" src="http://i67.tinypic.com/wk4bh2.png" className={classes.bigAvatar} />
      <img alt="Remy Sharp" src="http://i67.tinypic.com/wk4bh2.png" className={classes.bigAvatar} />
      <i class="material-icons">keyboard_arrow_right</i>
    </Grid>
    

    </Paper>
    </Grid>
    </Paper>
    </div>
  );
}