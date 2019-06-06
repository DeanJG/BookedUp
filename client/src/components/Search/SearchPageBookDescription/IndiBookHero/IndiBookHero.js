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
import BookPic from '../../../../Assets/50Shades.png';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import { withTheme } from '@material-ui/styles';


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
    margin: '20px 20px 0px 20px',
  },
  fabIcon: {
    boxShadow: 'none',
    margin: '0px 10px 0px 10px',

  },
  button: {
    backgroundColor: '#5B4FED',
    color: 'white',
    textAlign: 'center',
    marginTop: '20px',
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
      <img alt="Remy Sharp" src={BookPic} className={classes.bigAvatar} />
    </Grid>

        <CardContent>
        <Typography className={classes.BookTitle} variant="h6" gutterBottom>
        50 Shades of Grey
        <Fab size="small" color="secondary" aria-label="Add" className={classes.fabIcon}>
          <AddIcon /><br></br>
        </Fab>

        <Button className={classes.button}>
        <IconButton className={classes.logo} component={ Link } to='/createclub'>
          </IconButton>
        Create New Book Club
        <IconButton className={classes.logo} component={ Link } to='/createclub'>
          </IconButton>
          </Button>

        </Typography>
    
        <Typography className={classes.BookBio} variant="body2" color="textSecondary">
        Fifty Shades of Grey is a 2011 erotic romance novel by British author E. L. James.[1] It became the first instalment in the Fifty Shades novel series that follows the deepening relationship between a college graduate, Anastasia Steele, and a young business magnate, Christian Grey. It is notable for its explicitly erotic scenes featuring elements of sexual practices involving BDSM (bondage/discipline, dominance/submission, and sadism/masochism). Originally self-published as an ebook and print-on-demand in June 2011, the publishing rights to the novel were acquired by Vintage Books in March 2012.
        </Typography>

        </CardContent>
      
    </Card>
  );
}

export default MediaCard;
