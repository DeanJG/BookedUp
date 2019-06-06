import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Katie from '../../../Assets/Katie.png'
import Quinton from '../../../Assets/Quinton.png'
import Amanda from '../../../Assets/Amanda.png'
import Q from '../../../Assets/Q.png'
import Jeff from '../../../Assets/Jeff.png'
import Justin from '../../../Assets/Justin.png'

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
})

const message1 = `Katie Lewis left a review for 50 Shades of Grey. Take a look!`
const message2 = `Qamar Stationwala has joined a bookclub, Christian Grey Lovers.`
const message3 = `Jeff Howell has joined a bookclub, Christian Grey Lovers.`
const message4 = `Amanda Pisarski has joined a bookclub, Christian Grey Lovers.`
const message5 = `Quinton Fults has joined a bookclub, Christian Grey Lovers.`
const message6 = `Katie Lewis has joined a bookclub, Christian Grey Lovers.`
const message7 = `Justin Biele started a bookclub for 50 Shades of Grey, Christian Grey Lovers, Be sure to join by June, 15, 2019!`

function AutoGridNoWrap(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar className={classes.avatar} >
              <img alt="Katie" src={Katie} />
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message1}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar className={classes.avatar} >
              <img alt="Qamar" src={Q} />
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message2}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar className={classes.avatar} >
              <img alt="Jeff" src={Jeff} />
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message3}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar className={classes.avatar} >
              <img alt="Amanda" src={Amanda} />
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message4}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar className={classes.avatar} >
              <img alt="Quinton" src={Quinton} />
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message5}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar className={classes.avatar} >
              <img alt="Katie" src={Katie} />
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message6}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar className={classes.avatar} >
              <img alt="Justin" src={Justin} />
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message7}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

AutoGridNoWrap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGridNoWrap);
