import React, { Component } from 'react';
import DigitalDriveThruImage from './DigitalDriveThruImage';
import MDSpinner from 'react-md-spinner';
import './DigitalDriveThru.css';

class DigitalDriveThru extends Component {
  constructor(props) {
    super();
    this.state = {
      lanes: [
        [
          'https://us.mcd.switchboardcms.com/device/03381-181/screenshot/HDMI1/150/150',
          'https://us.mcd.switchboardcms.com/device/03381-182/screenshot/HDMI1/150/150',
          'https://us.mcd.switchboardcms.com/device/03381-183/screenshot/HDMI1/150/150'
        ],
        [
          'https://us.mcd.switchboardcms.com/device/03381-184/screenshot/HDMI1/150/150',
          'https://us.mcd.switchboardcms.com/device/03381-185/screenshot/HDMI1/150/150',
          'https://us.mcd.switchboardcms.com/device/03381-186/screenshot/HDMI1/150/150'
        ]
      ],
      // DashBoard Image Statuses
      imageStatus: []
    };
  }

  // Will add bool if depending on if image has loaded
  updateImgStatus = bool => {
    this.setState({ imageStatus: [...this.state.imageStatus, bool] });
  };

  renderStatusIcon = (total = 0) => {
    // Calculate total images from all lanes
    this.state.lanes.forEach(lane => {
      total += lane.length;
    });
    // Renders spinner if total does not equal imageStatus length
    if (total !== this.state.imageStatus.length) {
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
      <div className="ddt-container">
        <div className="ddt-icon-container">
          <i className="fa fa-car fa-4x" />
          <h5 className="ddt-title">Digital Drive Thru (DDT)</h5>
        </div>
        <div className="ddt-lanes-container">
          <div className="ddt-lanes">
            {this.state.lanes.map((lane, i) => (
              <div className="ddt-lane" key={i}>
                {lane.map((image, j) => (
                  <DigitalDriveThruImage key={j} updateImgStatus={this.updateImgStatus} image={image} i={i + 1} />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="status-icon">{this.renderStatusIcon()}</div>
      </div>
    );
  }
}

export default DigitalDriveThru;
