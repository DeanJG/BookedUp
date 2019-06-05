import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Input from '../input'

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    textAlign: 'center',
    boxShadow: 'none',
  },
  img: {
    marginTop: '10px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
      <img className={classes.img} alt="complex" src="http://i67.tinypic.com/wk4bh2.png" />
      <Input />

      </CardContent>
    </Card>
  );
}