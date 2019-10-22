import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Work from '../Work/Work';
import About from '../About/About';
import Contact from '../Contact/Contact';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div className='container'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/work'>
            <Work />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
        </div>
      </Router>
    );
  }
}