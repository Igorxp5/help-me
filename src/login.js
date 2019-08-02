import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: 40,
        height: '100%'
    },
    title: {
        marginBottom: 20,
        fontSize: '1.9rem'
    },
    textField: {
        width: '100%'
    },
    button: {
        marginTop: 25,
    },
    footer: {
        marginTop: 20,
        textAlign: 'center'
    }
}));

function Login(props) {
  const classes = useStyles();
  const { theme } = props

  return (
    <Grid container className={classes.root} alignContent="center">
      <Grid item xs={12}>
              <Typography variant="h4" className={classes.title} color="primary" theme={theme}>
          Bem vindo(a)! <br/>
          Faça login <br/>
          <strong>para ajudar pessoas ou para ser ajudado</strong>
          </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="login-field"
          label="E-mail"
          className={classes.textField}
          margin="normal"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="password-field"
          label="Senha"
          type="password"
          className={classes.textField}
          margin="normal"
        />
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Button variant="contained" size="large" className={classes.button} color="primary" onClick={logar}>Entrar</Button>
      </Grid>
      <Grid item xs={12} className={classes.footer}>
        <Typography>
          Ainda não tem conta?
          <Link to="/signup">
          <strong id="signup"> Cadastre-se</strong>
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Login;




function logar(){
  let ok = false
  let URL = "https://hidden-atoll-76455.herokuapp.com/login/"
  let user = document.getElementById("login-field").value
  let pass = document.getElementById("password-field").value
  URL = URL + user +'/'+ pass
  console.log(URL)
  var client = new HttpClient();
  client.get(URL, function(response) {
    if(response == "ok"){
      document.location = '/main'
      
    }else if(response == "fail to login"){
      alert("Senha Incorreta")
    }
  });
}

var HttpClient = function() {
  this.get = function(aUrl, aCallback) {
      var anHttpRequest = new XMLHttpRequest();
      anHttpRequest.onreadystatechange = function() { 
          if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
              aCallback(anHttpRequest.responseText);
      }

      anHttpRequest.open( "GET", aUrl, true );            
      anHttpRequest.send( null );
  }
}