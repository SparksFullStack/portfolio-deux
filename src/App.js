import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// components
import TopMenu from './components/TopMenu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
      </div>
    );
  }
}

export default App;
