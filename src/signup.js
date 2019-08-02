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

import theme from './theme.js';
import './common.css';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: 40,
        height: '100%',
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

export default function Signup() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} alignContent="center">
            <Grid item xs={12}>
                <Typography variant="h4" className={classes.title} color="primary">
                    Bem vindo(a)! <br />
                    Cadastre-se <br />
                    <strong>para ajudar pessoas ou para ser ajudado</strong>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="login-field"
                    label="Usuário"
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
            <Grid item xs={12}>
                <TextField
                    id="email"
                    label="E-mail"
                    className={classes.textField}
                    margin="normal"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="birthday-field"
                    label="Data de Nascimento"
                    className={classes.textField}
                    margin="normal"
                />
            </Grid>
            <Grid container item xs={12} justify="space-between">
                <Link to="/">
                    <Button variant="contained" size="large" className={classes.button} color="primary">Voltar</Button>
                </Link>
                <Button variant="contained" size="large" className={classes.button} color="primary" onClick={logar}>Cadastrar</Button>
            </Grid>
        </Grid>
    );
}



function logar(){
    let URL = "https://hidden-atoll-76455.herokuapp.com/new-profile/"
    console.log(localStorage.getItem("userID"))
    let user = document.getElementById("login-field").value
    let pass = document.getElementById("password-field").value
    let birth = document.getElementById("birthday-field").value
    let email = document.getElementById("email").value

    //ocalhost:3000/new-profile/:name/:bitrhday/:email/:pass
    URL = URL + user +'/'+ birth+'/'+email+'/'+pass
    console.log(URL)
    var client = new HttpClient();
    client.get(URL, function(response) {
        console.log(response)
      if(response.includes("Thank you")){
        //adicionar home do app
        console.log(response)
        document.location = '/'
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