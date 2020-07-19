import React, { Component } from 'react';
import MainContent from './MainContent';

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
        <div className="main-content">
          <MainContent />
        </div>
      </>
    );
  }
}

export default Home;
