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

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


import {ThemeContext, theme} from './theme.js';
import './common.css';

import Login from './login.js'
import Signup from './signup.js'
import Main from './main.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: theme,
    };
  };

  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
        </ThemeProvider>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));