import React, { Component } from 'react';
import FrontCounterImage from './FrontCounterImage';
import MDSpinner from 'react-md-spinner';
import './FrontCounter.css';

class FrontCounter extends Component {
  constructor(props) {
    super();
    this.state = {
      images: [
        'https://us.mcd.switchboardcms.com/device/03381-171/screenshot/HDMI1/150/150',
        'https://us.mcd.switchboardcms.com/device/03381-172/screenshot/HDMI1/150/150',
        'https://us.mcd.switchboardcms.com/device/03381-173/screenshot/HDMI1/150/150',
        'https://us.mcd.switchboardcms.com/device/03381-174/screenshot/HDMI1/150/150',
        'https://us.mcd.switchboardcms.com/device/03381-174/screenshot/HDMI1/150/150'
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
      <div className="front-counter-container">
        <div className="front-counter-icon-container">
          <i className="fa fa-user-o fa-4x" />
          <h5 className="front-counter-title">FrontCounter (FC)</h5>
        </div>
        <div className="front-counter-images-container">
          <div className="front-counter-images">
            {this.state.images.map((image, i) => (
              <FrontCounterImage updateImgStatus={this.updateImgStatus} key={i} image={image} j={++i} />
            ))}
          </div>
        </div>
        <div className="status-icon">{this.renderStatusIcon()}</div>
      </div>
    );
  }
}

export default FrontCounter;
