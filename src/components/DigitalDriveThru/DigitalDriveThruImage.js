import React from "react";
import "./DigitalDriveThruImage.css";

const DigitalDriveThruImage = props => (
  <div className="ddt-image-container">
    <img className="ddt-image" src={props.image} alt="Loading Error" />
    <button className="ddt-btn">{`DDT${props.i}`}</button>
  </div>
);

export default DigitalDriveThruImage;
