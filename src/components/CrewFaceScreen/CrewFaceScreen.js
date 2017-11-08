import React, { Component } from 'react';
import CrewFaceScreenImage from './CrewFaceScreenImage';
import MDSpinner from 'react-md-spinner';
import './CrewFaceScreen.css';

class CrewFaceScreen extends Component {
  constructor(props) {
    super();
    this.state = {
      images: [
        'https://us.mcd.switchboardcms.com/device/03381-162/screenshot/HDMI1/150/150',
        'https://us.mcd.switchboardcms.com/device/03381-163/screenshot/HDMI1/150/150',
        'https://us.mcd.switchboardcms.com/device/03381-164/screenshot/HDMI1/150/150'
      ],
      // DashBoard Image Statuses
      imageStatus: []
    };
  }

  // Will add bool if depending on if image has loaded
  updateImgStatus = bool => {
    this.setState({ imageStatus: [...this.state.imageStatus, bool] });
  };

  renderStatusIcon = () => {
    // Renders spinner if images length does not equal imageStatus length
    if (this.state.images.length !== this.state.imageStatus.length) {
      return <MDSpinner />;
    }
    // Renders error status icon
    if (this.state.imageStatus.includes(false)) {
      return <i className="fa fa-times-circle-o fa-4x" aria-hidden="true" />;
    }
    // Renders success status icon
    return <i className="fa fa-check-circle-o fa-4x" aria-hidden="true" />;
  };

  render() {
    return (
      <div className="cfs-container">
        <div className="cfs-icon-container">
          <i className="fa fa-money fa-4x" />
          <h5 className="cfs-title">Crew Face Screen (CFS)</h5>
        </div>
        <div className="cfs-images-container">
          <div className="cfs-images">
            {this.state.images.map((image, i) => (
              <CrewFaceScreenImage
                imageLoadingError={this.imageLoadingError}
                updateImgStatus={this.updateImgStatus}
                key={i}
                image={image}
                j={++i}
              />
            ))}
          </div>
        </div>
        <div className="status-icon">{this.renderStatusIcon()}</div>
      </div>
    );
  }
}

export default CrewFaceScreen;
