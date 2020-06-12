import React from 'react';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import Home from './components/Home'
import About from './components/About';
import {Route} from 'react-router-dom';

function App() {
  return (
    <>
      <CssBaseline>
        <Route exact path='/' component={Home}/>
        <Route path='/About' component={About}/>
      </CssBaseline>
    </>  
  );
}

export default App;
