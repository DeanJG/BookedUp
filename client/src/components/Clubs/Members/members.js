import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Katie from '../../../Assets/Katie.png'
import Quinton from '../../../Assets/Quinton.png'
import Amanda from '../../../Assets/Amanda.png'
import Q from '../../../Assets/Q.png'
import Jeff from '../../../Assets/Jeff.png'


const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  paper: {
    maxWidth: 400,
    margin: 20,
    padding: 5,
  },
  header: {
    color: '#5B4FED',
    margin: '5px 0px 0px 5px',
  }
});

export default function LetterAvatars() {
  const classes = useStyles();

  return (
    <div>
    <Paper className={classes.paper}>

    <Grid container alignItems="left">
    <Avatar className={classes.avatar} >
         <img alt="Katie" src={Katie} />
    </Avatar> 
    <Avatar className={classes.avatar} >
         <img alt="Quinton" src={Quinton} />
    </Avatar> 
    <Avatar className={classes.avatar}>
         <img alt="Amanda" src={Amanda} />
    </Avatar>  
    <Avatar className={classes.avatar}>
         <img alt="Q" src={Q} />
    </Avatar> 
    <Avatar className={classes.avatar}>
         <img alt="Jeff" src={Jeff} />
    </Avatar> 


    </Grid>
    </Paper>
    </div>
  );
}