import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Dean from '../../../Assets/Dean.png';



const useStyles = makeStyles({
  card: {
    width: 'auto',
    boxShadow: 'none',
    borderRadius: '0px !important',
    margin: 'none',
    paddingBottom: 'none',
  },
  media: {
    height: 180,
    paddingBottom: 'none',
    margin: 'none',
  },
  bigAvatar: {
    width: '100px',
    height: 'auto',
    marginTop: '-50px',
  },
  BookTitle: {
    color: '#5B4FED',
    textAlign: 'center',
  },
  fabIcon: {
    boxShadow: 'none',
    margin: '0px 10px 0px 10px',

  },
});

function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="http://i67.tinypic.com/2mhttvs.png"
          title="hero"
        />

 <Grid container justify="center" alignItems="center" style={{margin: 'none', padding: 'none'}}>
      <img alt="Remy Sharp" src={Dean} className={classes.bigAvatar} />
      {/* This is the code needed to be changed from the book cover to the profile picture.  */}
    </Grid>

        <CardContent style={{margin: 'none', paddingBottom: 'none'}}>
        <Typography className={classes.BookTitle} variant="h6" gutterBottom>
        Dean Gutterman
        </Typography>
       
       

        </CardContent>
      
    </Card>
  );
}

export default MediaCard;