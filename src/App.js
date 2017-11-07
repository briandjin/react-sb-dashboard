import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import FrontCounter from "./components/FrontCounter/FrontCounter";
import DigitalDriveThru from "./components/DigitalDriveThru/DigitalDriveThru";
import CrewFaceScreen from "./components/CrewFaceScreen/CrewFaceScreen";
import "./App.css";
// import data from "./data.json";

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
