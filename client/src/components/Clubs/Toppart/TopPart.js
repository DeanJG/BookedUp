import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Favorite';



const useStyles = makeStyles({
  card: {
    width: 'auto',
    boxShadow: 'none',
    borderRadius: '0px !important',
  },
  media: {
    height: 180,
  },
  bigAvatar: {
    width: '100px',
    height: 'auto',
    marginTop: '-70px',
    border: '5px solid white'
  },
  BookTitle: {
    color: '#5B4FED',
    textAlign: 'center',
},  
  BookBio: {
    margin: '20px',
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

 <Grid container justify="center" alignItems="center">
      <img alt="Remy Sharp" src="http://i67.tinypic.com/wk4bh2.png" className={classes.bigAvatar} />
    </Grid>

        <CardContent>
        <Typography className={classes.BookTitle} variant="h6" gutterBottom>
        BOOK TITLE HERE 
        <Fab size="small" color="secondary" aria-label="Add" className={classes.fabIcon}>
          <AddIcon />
        </Fab>
        </Typography>
       
       

        </CardContent>
      
    </Card>
  );
}

export default MediaCard;