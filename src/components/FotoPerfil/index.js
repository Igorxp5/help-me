import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    marginTop:50,
    margin: 10,
    width: 150,
    height: 150,
    backgroundColor: red[500],
    fontSize: 40
  },
});

export default function ImageAvatars(props) {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar aria-label="recipe" className={classes.bigAvatar} src={props.avatar}>
          {props.name.toUpperCase()[0]}
      </Avatar>
    </Grid>
  );
}