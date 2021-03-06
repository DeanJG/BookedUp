import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/KeyboardArrowRight';
import BookPic from '../../../../Assets/50Shades.png';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';



const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '0px 20px 10px 20px',
  },
  paper: {
    margin: '20px auto 20px auto',
    maxWidth: 500,
  },
  image: {
    width: 'auto',
    height: 100,
    marginLeft: 10,
  },
  img: {
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
    color: '#5B4FED', 
    backgroundColor: 'white',
    padding: '0px',
    border: 'none',
    marginTop: '40px'
},
});

function ComplexGrid(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid className={classes.gridStyle} container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={BookPic} />
            </ButtonBase>
          </Grid>
             <Grid item xs>
               <Typography className={classes.BookTitle} variant="h6" gutterBottom>
                  50 Shade of Grey
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Fifty Shades of Grey is a 2011 erotic romance novel by British author E. L. James.
                </Typography>              
            </Grid>
        <Grid item className={classes.btnGrid}>


        <IconButton className={classes.Btn} component={ Link } to='/searchedbook'>
        <AddIcon />
        </IconButton> 
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
