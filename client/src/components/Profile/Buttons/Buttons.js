import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
// import Host from '../../../../Assets/host.png'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  paper: {
    maxWidth: 400,
    margin: 10,
    padding: 10,
    textAlign: 'center',
  },
  paperDiv: {
    maxWidth: 400,
    padding: 10,
    textAlign: 'center',
    boxShadow: 'none',

  },
  header: {
    color: '#5B4FED',
  }
});

export default function LetterAvatars() {
  const classes = useStyles();

  return (
    <div>

    <Paper className={classes.paperDiv}>

    <Grid container justify="center" alignItems="center">
    <Paper className={classes.paper}>
    <Typography className={classes.header}><b>Books Read</b>
    </Typography>
    <Typography><b> 23 </b>
    </Typography>
    </Paper>

    <Paper className={classes.paper}>
    <Typography className={classes.header}><b>Friends</b>
    </Typography>
    <Typography><b> 7 </b>
    </Typography>
    </Paper>

    </Grid>
    </Paper>
    </div>
  );
}


















// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles(theme => ({
//   button: {
//     margin: theme.spacing(1),
//   },
//   input: {
//     display: 'none',
//   },
// }));

// export default function TextButtons() {
//   const classes = useStyles();

//   return (
//     <div>
//       <Button color="primary" className={classes.button}>
//         Books Read
//       </Button>
//       <Button color="secondary" className={classes.button}>
//         Friends
//       </Button>
      
      
//     </div>
//   );
// }
