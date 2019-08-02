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
import AccountCircle from '@material-ui/icons/AccountCircle';

import './common.css';

import Feed from './components/feed'

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
    padding: '0 30px',
    marginBottom: 10
  },
  textField: {
    width: '100%'
  },
  publishButton: {
    marginTop: 10,
    marginBottom: 30,
    width: 100
  },
  sectionTitle: {
    borderBottom: '1px solid #ccc',
    marginBottom: 20
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

  // let feeds = [
  //   { avatar: 'https://avatars2.githubusercontent.com/u/8163093?s=460&v=4', name: 'Igor Fernandes', date: '02/08/2019', description: 'Bla bla bla.', location:'CIn UFPE'},
  //   {avatar: null, name: 'Luana Mayara', date: '02/04/2019', description: 'Hahahahah.', location: 'CIn UFPE'}
  // ];
  let feeds = []


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
            <IconButton
              edge="start"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              style={{alignSelf: 'fkex-end'}}
            >
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <Typography variant="h6" color="inherit" className={classes.sectionTitle}>Pedir ajuda</Typography>
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <TextField
          id="location-field"
          multiline
          rows="1"
          rowsMax="4"
          placeholder="Onde você está?"
          onChange={handleChange('multiline')}
          className={classes.textField}
          variant="outlined"
          width="100%"
        />
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <TextField
          id="order-field"
          multiline
          rows="1"
          rowsMax="4"
          placeholder="Digite um pedido aqui :D"
          onChange={handleChange('multiline')}
          className={classes.textField}
          variant="outlined"
          width="100%"
        />
      </Grid>
      <Grid item xs={12} className={classes.gridItem} style={{ textAlign: 'center' }}>
        <Button variant="contained" size="large" className={classes.publishButton} color="primary" onClick={logar}>Publicar</Button>
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <Typography variant="h6" color="inherit" className={classes.sectionTitle}>Feed de Ajudas</Typography>
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        {
          feeds.map((item) => {
            return <Feed avatar={item.avatar} name={item.name} date={item.date} description={item.description} location={item.location}/>
          })
        }
      </Grid>
    </Grid>
  );
}




function logar(){
  let ok = false
  let URL = "https://hidden-atoll-76455.herokuapp.com/new-request/"
  let loca = document.getElementById("location-field").value.replace(/\s+/g,"_")
  let order = document.getElementById("order-field").value.replace(/\s+/g,"_")
  let id = localStorage.getItem("userID")
  let secondURL = "https://hidden-atoll-76455.herokuapp.com/get-profile/" + id
  var client0 = new HttpClient();
  
  client0.get(secondURL, function(response) {
    console.log(response)
    response = JSON.parse(response)
    console.log(response)
    localStorage.setItem("newId", response.id)
  })
  id = localStorage.getItem("newId")
  URL = URL + id+'/' +loca +'/'+ order
  //new-request/:id/:place/:request
  console.log(URL)
  var client = new HttpClient();
  client.get(URL, function(response) {
    console.log(response)
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

//
function array(){
  var URL = "https://hidden-atoll-76455.herokuapp.com/get-requests/"
  var client = new HttpClient();
  client.get(URL, function(response) {
    localStorage.setItem("Array",response)
  })
  let js = JSON.parse(localStorage.getItem("Array"))
  console.log(js)
  var resposta = []
  for(let i = 0; i < js.length; i++ ){
    resposta.push({
      avatar: null, 
      name: js[i].userName, 
      date: '02/04/2019', 
      description: js[i].request.replace("_",/\s+/g), 
      location: js[i].place.replace("_",/\s+/g)
    })
  }
  console.log(resposta)
}