import React from 'react';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import Home from './components/Home'
import About from './components/About';
import {Route} from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'
import Styles from './components/Styles';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

// Background Color for whole Site/App
const theme = createMuiTheme({
  palette: {
    background: {
      default: "#ebf0f6"
    }
  }
});

function App() {
  const classes = Styles()
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <Route exact path='/' component={Home}/>
          <Route path='/About' component={About}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/contact' component={Contact}/>
        </CssBaseline>
      </MuiThemeProvider>
    </>  
  );
}

export default App;
