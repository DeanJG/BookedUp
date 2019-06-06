import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Background from '../../Assets/background.png';



const useStyles = makeStyles({
  card: {
    width: '100%',
    boxShadow: 'none',
    borderRadius: '0px !important',
    margin: 'none',
    paddingBottom: 'none',
    bottom: '0px',

  },
  background: {
    position: 'fixed',
    width: '100%',
    bottom: '0px',

  }
  
 
});

function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <img alt="favorites" src={Background} className={classes.background} />
      
    </Card>
  );
}

export default MediaCard;