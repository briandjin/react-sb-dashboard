import React from "react";
import "./CrewFaceScreenImage.css";

const CrewFaceScreenImage = props => (
  <div className="cfs-image-container">
    <img className="cfs-image" src={props.image} alt="Loading Error" />
    <button className="cfs-btn">{`CFS${props.i}`}</button>
  </div>
);

export default CrewFaceScreenImage;
