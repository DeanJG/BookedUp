import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Host from '../../../Assets/Deansmall.png'

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    padding: 10,
    margin: '10px 0px 10px 0px',

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
         <Avatar>
         <img alt="Remy Sharp" src={Host} />

         </Avatar>
      </Paper>
    </div>
  );
}

AutoGridNoWrap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGridNoWrap);
