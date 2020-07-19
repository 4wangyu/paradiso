import React, { Component } from 'react';

export default class MovieGenre extends Component {
  state = {
    toggleModal: false,
  };

  handleToggleModal = () => {
    this.setState({ toggleModal: true });
  };

  closeModal = () => {
    this.setState({ toggleModal: false });
  };

  render() {
    let netflixUrl = false;
    if (
      this.props.url ===
      `/discover/tv?api_key=${process.env.API_KEY}&with_networks=213`
    ) {
      netflixUrl = true;
    }

    return (
      <>
        <div
          onClick={() => this.handleToggleModal()}
          className={
            'movieShowcase__container--movie' + (netflixUrl ? '__netflix' : '')
          }
        >
          <img
            src={this.props.posterUrl}
            className="movieShowcase__container--movie-image"
          />
        </div>
      </>
    );
  }
}
