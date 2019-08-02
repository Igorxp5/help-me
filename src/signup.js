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
                <Button variant="contained" size="large" className={classes.button} color="primary">Cadastrar</Button>
            </Grid>
        </Grid>
    );
}