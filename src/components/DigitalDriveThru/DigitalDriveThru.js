import React, { Component } from "react";
import DigitalDriveThruImage from "./DigitalDriveThruImage";
import "./DigitalDriveThru.css";

class DigitalDriveThru extends Component {
  constructor(props) {
    super();
    this.state = {
      images: [
        "https://us.mcd.switchboardcms.com/device/03381-181/screenshot/HDMI1/150/150",
        "https://us.mcd.switchboardcms.com/device/03381-182/screenshot/HDMI1/150/150",
        "https://us.mcd.switchboardcms.com/device/03381-183/screenshot/HDMI1/150/150"
      ]
    };
  }
  render() {
    return (
      <div className="ddt-container">
        <div className="ddt-icon-container">
          <i className="fa fa-car fa-4x" />
          <h5 className="ddt-title">Digital Drive Thru (DDT)</h5>
        </div>
        <div className="ddt-images-container">
          <div className="ddt-images">
            {this.state.images.map((image, i) => <DigitalDriveThruImage key={i} image={image} i={i + 1} />)}
          </div>
        </div>
        <div className="status-icon">
          <i className="fa fa-check-circle-o fa-4x" aria-hidden="true" />
        </div>
      </div>
    );
  }
}

export default DigitalDriveThru;
