import React, { Component } from 'react';
import { BrowserRouter, browserHistory } from 'react-router-dom';

import './App.scss';

import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';
import Main from './Main';

export default class App extends Component {
  render() {
    return (

      <BrowserRouter history={browserHistory}>
        <div className="app-container">
          <Header />
          <div className="middle-container">
            <NavBar />
            <Main />
          </div>
          <Footer />
        </div>
      </BrowserRouter>

    );
  }
}
