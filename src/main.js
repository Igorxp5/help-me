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
import { createVerify } from 'crypto';

const useStyles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    marginBottom: 20,
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
};

var HttpClient = function () {
  this.get = function (aUrl, aCallback) {
    var anHttpRequest = new XMLHttpRequest();
    anHttpRequest.onreadystatechange = function () {
      if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
    }

    anHttpRequest.open("GET", aUrl, true);
    anHttpRequest.send(null);
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: []
    }
    setInterval(this.updateFeed.bind(this), 2000);
  }

  updateFeed() {
    var URL = "https://hidden-atoll-76455.herokuapp.com/get-requests/"
    fetch(URL).then((responseText) => responseText.json()).then(function(data) {
      var resposta = [];
      for (let i = 0; i < data.length; i++) {
        resposta.push({
          avatar: null,
          name: data[i].userName,
          date: '02/04/2019',
          description: data[i].request.replace("_", ' '),
          location: data[i].place.replace("_", ' ')
        });
      }
      this.setState({ feeds: resposta });
    }.bind(this));
  }

  publish() {
    let ok = false
    let URL = "https://hidden-atoll-76455.herokuapp.com/new-request/"
    let loca = document.getElementById("location-field").value.replace(/\s+/g, "_")
    let order = document.getElementById("order-field").value.replace(/\s+/g, "_")
    let id = localStorage.getItem("userID")
    let secondURL = "https://hidden-atoll-76455.herokuapp.com/get-profile/" + id
    var client0 = new HttpClient();

    client0.get(secondURL, function (response) {
      console.log(response)
      response = JSON.parse(response)
      console.log(response)
      localStorage.setItem("newId", response.id)
    })
    id = localStorage.getItem("newId")
    URL = URL + id + '/' + loca + '/' + order
    //new-request/:id/:place/:request
    console.log(URL)
    var client = new HttpClient();
    client.get(URL, function (response) {
      console.log(response)
    });
  }

  render() {
    return (
      <Grid container style={useStyles.root} alignContent="center">
        <Grid item xs={12}>
          <AppBar position="static" style={useStyles.appBar}>
            <Toolbar variant="dense" style={{ justifyContent: 'space-between'}}>
              <IconButton edge="start" style={useStyles.menuButton} color="inherit" aria-label="menu">
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
        <Grid item xs={12} style={useStyles.gridItem}>
          <Typography variant="h6" color="inherit" style={useStyles.sectionTitle}>Pedir ajuda</Typography>
        </Grid>
        <Grid item xs={12} style={useStyles.gridItem}>
          <TextField
            id="location-field"
            multiline
            rows="1"
            rowsMax="4"
            placeholder="Onde você está?"
            style={useStyles.textField}
            variant="outlined"
            width="100%"
          />
        </Grid>
        <Grid item xs={12} style={useStyles.gridItem}>
          <TextField
            id="order-field"
            multiline
            rows="1"
            rowsMax="4"
            placeholder="Digite um pedido aqui! :D"
            style={useStyles.textField}
            variant="outlined"
            width="100%"
          />
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Button variant="contained" size="large" style={useStyles.publishButton} color="primary" onClick={this.publish}>Publicar</Button>
        </Grid>
        <Grid item xs={12} style={useStyles.gridItem}>
          <Typography variant="h6" color="inherit" style={useStyles.sectionTitle}>Feed de Ajudas</Typography>
        </Grid>
        <Grid item xs={12} style={useStyles.gridItem}>
          {
            this.state.feeds.map((item) => {
              return <Feed avatar={item.avatar} name={item.name} date={item.date} description={item.description} location={item.location}/>
            })
          }
        </Grid>
        <Grid item xs={12} style={useStyles.gridItem}>
        </Grid>
      </Grid>
    );
  }
}

function publicar(){
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

export default Main;