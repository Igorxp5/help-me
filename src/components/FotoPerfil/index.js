import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    marginTop:50,
    margin: 10,
    width: 150,
    height: 150,
  },
});

export default function ImageAvatars(props) {
  const classes = useStyles();
  let fotoperfil = props.fotoperfil
  console.log(fotoperfil)
  return (
    
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Foto de perfil" src={fotoperfil} className={classes.bigAvatar} />
    </Grid>
  );
}