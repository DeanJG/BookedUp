import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Katie from '../../../Assets/Katie.png'
import Quinton from '../../../Assets/Quinton.png'


const styles = theme => ({
  root: {
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 300,
    margin: '40px 0px 10px 0px',
    padding: theme.spacing(2),
    
  },
  header: {
    paddingTop: 10,
    color: '#5B4FED',
  }
});



function AutoGridNoWrap(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>

            <img alt="Katie" src={Katie} />

            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography>Loving the book so far. My favorite read this month.</Typography>
          </Grid>
        </Grid>    
      </Paper>


      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>

            <img alt="Quinton" src={Quinton} />

            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography>Interesting read...</Typography>
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
