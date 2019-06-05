import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Host from '../../../../Assets/host.png'
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

    <Grid container justify="center" alignItems="left">
    <Paper className={classes.paper}>
    <Typography className={classes.header}><b>Start Date</b>
    </Typography>
    <Typography><b>June 15, 2019</b>
    </Typography>
    </Paper>

    <Paper className={classes.paper}>
    <Typography className={classes.header}><b>Book Pace</b>
    </Typography>
    <Typography><b>1 Chapter Per Week</b>
    </Typography>
    </Paper>

    </Grid>
    </Paper>
    </div>
  );
}
