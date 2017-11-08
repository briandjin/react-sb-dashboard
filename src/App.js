import React, { Component } from 'react';
// Custom Components
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import FrontCounter from './components/FrontCounter/FrontCounter';
import DigitalDriveThru from './components/DigitalDriveThru/DigitalDriveThru';
import CrewFaceScreen from './components/CrewFaceScreen/CrewFaceScreen';
// Css
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Navbar />
          <Header />
          <FrontCounter />
          <hr />
          <DigitalDriveThru />
          <hr />
          <CrewFaceScreen />
          <div />
        </div>
      </div>
    );
  }
}

export default App;
