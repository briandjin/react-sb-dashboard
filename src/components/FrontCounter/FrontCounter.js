import React, { Component } from "react";
import FrontCounterImage from "./FrontCounterImage";
import "./FrontCounter.css";

class FrontCounter extends Component {
  constructor(props) {
    super();
    this.state = {
      images: [
        "https://us.mcd.switchboardcms.com/device/03381-171/screenshot/HDMI1/150/150",
        "https://us.mcd.switchboardcms.com/device/03381-172/screenshot/HDMI1/150/150",
        "https://us.mcd.switchboardcms.com/device/03381-173/screenshot/HDMI1/150/150",
        "https://us.mcd.switchboardcms.com/device/03381-174/screenshot/HDMI1/150/150",
        "https://us.mcd.switchboardcms.com/device/03381-174/screenshot/HDMI1/150/150",
        "https://us.mcd.switchboardcms.com/device/03381-174/screenshot/HDMI1/150/150",
        "https://us.mcd.switchboardcms.com/device/03381-174/screenshot/HDMI1/150/150",
        "https://us.mcd.switchboardcms.com/device/03381-174/screenshot/HDMI1/150/150"
      ]
    };
  }
  render() {
    return (
      <div className="front-counter-container">
        <div className="front-counter-icon-container">
          <i className="fa fa-user-o fa-4x" />
          <h5 className="front-counter-title">FrontCounter (FC)</h5>
        </div>
        <div className="front-counter-images-container">
          <div className="front-counter-images">
            {this.state.images.map((image, i) => <FrontCounterImage key={i} image={image} i={i + 1} />)}
          </div>
        </div>
        <div className="status-icon">
          <i className="fa fa-check-circle-o fa-4x" aria-hidden="true" />
        </div>
      </div>
    );
  }
}

export default FrontCounter;
