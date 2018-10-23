import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import 'typeface-roboto';

// components
import TopMenu from './components/TopMenu';
import Landing from './components/Landing';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
        <Landing />
        <Projects />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
