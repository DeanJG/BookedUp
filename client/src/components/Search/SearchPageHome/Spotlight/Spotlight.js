import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '0px 20px 10px 20px',
  },
  paper: {
    padding: '20px',
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 'auto',
    height: 150,
  },
  img: {
    margin: '0px 20px 20px 20px',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  BookTitle: {
      color: '#5B4FED',
  },  
  gridStyle: {
  flexWrap: 'nowrap',
  },    
   Btn: {
    color: 'white', 
    backgroundColor: '#5B4FED',
    width: '100%',
    borderRadius: '20px',   
}
});

function ComplexGrid(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid className={classes.gridStyle} container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="http://i67.tinypic.com/wk4bh2.png" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Club Spotlight
                </Typography>
                <Typography className={classes.BookTitle} variant="h6" gutterBottom>
                  Queen Bey
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Beyonce is theeee queen of queens. Read this book if you're a beyonce fan like ya boi Justin.
                </Typography>
              </Grid>
              <Grid item>
              <Button className={classes.Btn}>
                Join
            </Button>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplexGrid);
