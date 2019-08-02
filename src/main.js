import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import './common.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    marginBottom: 20
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  gridItem: {
    padding: '0 30px'
  },
  textField: {
    width: '100%'
  },
  publishButton: {
    marginTop: 10,
    width: 100
  }
}));

export default function Main() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Grid container className={classes.root} alignContent="center">
      <Grid item xs={12}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar variant="dense">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">Início</Typography>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <TextField
          id=""
          label="Pedir ajuda"
          multiline
          rows="1"
          rowsMax="4"
          placeholder="Digite um pedido aqui :D"
          onChange={handleChange('multiline')}
          className={classes.textField}
          margin="normal"
          variant="outlined"
          width="100%"
        />
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <Button variant="contained" size="large" className={classes.publishButton} color="primary">Publicar</Button>
      </Grid>
    </Grid>
  );
}