import React, { Component } from 'react';
import Modal from 'react-modal';
import MDSpinner from 'react-md-spinner';
import './FrontCounterImage.css';

class FrontCounterImage extends Component {
  constructor(props) {
    super();
    this.state = {
      modalIsOpen: false,
      lgImage: '',
      loading: true
    };
  }

  componentWillMount() {
    const lgImage = this.props.image.replace('150/150', '800/800');
    this.setState({ lgImage });
  }

  toggleModal = modalImage => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen, modalImage: modalImage });
  };

  refreshImage = () => {
    // Resize image
    const lgImage = this.props.image.replace('150/150', '800/800');
    // Current time
    const currDate = new Date().getTime();
    const updatedImage = `${lgImage}?${currDate}`;

    this.setState({ lgImage: updatedImage });
  };

  handleImageLoaded = () => {
    this.setState({ loading: false });
  };

  // Conditionally renders image or loading icon based on loading state
  renderSpinner = () => {
    return this.state.loading === false ? (
      <button
        className="refresh-btn"
        onClick={() => {
          this.setState({ loading: true });
          this.refreshImage();
        }}
      >
        Refresh
      </button>
    ) : (
      <MDSpinner className="refresh-btn" />
    );
  };

  render() {
    return (
      <div className="fc-image-container">
        <img
          className="fc-image"
          src={this.props.image}
          alt="Loading Error"
          onError={() => this.props.updateImgStatus(false)}
          onLoad={() => this.props.updateImgStatus(true)}
        />
        <button className="fc-btn" onClick={this.toggleModal}>{`FC${this.props.j}`}</button>
        <Modal
          className="modal"
          isOpen={this.state.modalIsOpen}
          style={{ overlay: { background: 'linear-gradient(rgba(33, 33, 33, 0.75), rgba(33, 33, 33, 0.75))' } }}
        >
          <span className="btn-close" onClick={this.toggleModal}>
            &times;
          </span>
          <div className="lg-image-container">
            <img
              src={this.state.lgImage}
              className="lgImage"
              onLoad={this.handleImageLoaded.bind(this)}
              onError={() => {
                console.log('error');
              }}
            />
          </div>
          {this.renderSpinner()}
        </Modal>
      </div>
    );
  }
}

export default FrontCounterImage;
