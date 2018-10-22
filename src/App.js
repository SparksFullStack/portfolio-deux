import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// components
import TopMenu from './components/TopMenu';
import Landing from './components/Landing';
import Projects from './components/Projects';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
        <Landing />
        <Projects />
        <About />
      </div>
    );
  }
}

export default App;
