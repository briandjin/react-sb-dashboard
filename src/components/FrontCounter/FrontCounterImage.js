import React from "react";
import "./FrontCounterImage.css";

const FrontCounterImage = props => (
  <div className="fc-image-container">
    <img className="fc-image" src={props.image} alt="Loading Error" />
    <button className="fc-btn">{`FC${props.i}`}</button>
  </div>
);

export default FrontCounterImage;
