import React, { Component } from 'react';

class Home extends Component {
  state = {
    /** Toggles the modal when a movie is clicked. */
    toggleModal: false,
    /** Holds the movie information for a single movie. */
    movieOverview: {},
  };

  closeModal = () => {
    this.setState({ toggleModal: false });
  };

  render() {
    return (
      <>
        <div className="main-content"></div>
      </>
    );
  }
}

export default Home;
