import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function TextButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button color="primary" className={classes.button}>
        Books Read
      </Button>
      <Button color="secondary" className={classes.button}>
        Friends
      </Button>
      <Button color="primary" className={classes.button}>
        Following
      </Button>
      
    </div>
  );
}
