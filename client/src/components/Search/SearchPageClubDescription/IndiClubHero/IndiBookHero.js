import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import BackgroundPic from '../../../../Assets/background_IndiClub.png';
import BookPic from '../../../../Assets/50Shades.png';




const useStyles = makeStyles({
  card: {
    width: 'auto',
    boxShadow: 'none',
    borderRadius: '0px !important',
    textAlign: 'center',
    marginBottom: 'none',
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
    margin: '20px 20px 0px 20px',
  },
  button: {
    backgroundColor: '#5B4FED',
    color: 'white',
    textAlign: 'center',
  },
});

function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={BackgroundPic}
          title="hero"
        />

 <Grid container justify="center" alignItems="center">
      <img alt="Remy Sharp" src={BookPic} className={classes.bigAvatar} />
    </Grid>

        <CardContent>
        <Typography className={classes.BookTitle} variant="h6" gutterBottom>
        Christian Grey Lovers
       
        </Typography>
        <Button variant="contained" className={classes.button}>
        Join Book Club
      </Button>
   

        </CardContent>
      
    </Card>
  );
}

export default MediaCard;
