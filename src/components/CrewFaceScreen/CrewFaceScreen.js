import React, { Component } from "react";
import CrewFaceScreenImage from "./CrewFaceScreenImage";
import "./CrewFaceScreen.css";

class CrewFaceScreen extends Component {
  constructor(props) {
    super();
    this.state = {
      images: [
        "https://us.mcd.switchboardcms.com/device/03381-162/screenshot/HDMI1/150/150",
        "https://us.mcd.switchboardcms.com/device/03381-163/screenshot/HDMI1/150/150",
        "https://us.mcd.switchboardcms.com/device/03381-164/screenshot/HDMI1/150/150"
      ]
    };
  }
  render() {
    return (
      <div className="cfs-container">
        <div className="cfs-icon-container">
          <i className="fa fa-money fa-4x" />
          <h5 className="cfs-title">Crew Face Screen (CFS)</h5>
        </div>
        <div className="cfs-images-container">
          <div className="cfs-images">
            {this.state.images.map((image, i) => <CrewFaceScreenImage key={i} image={image} i={i + 1} />)}
          </div>
        </div>
        <div className="status-icon">
          <i className="fa fa-check-circle-o fa-4x" aria-hidden="true" />
        </div>
      </div>
    );
  }
}

export default CrewFaceScreen;
