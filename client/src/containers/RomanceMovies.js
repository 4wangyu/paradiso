import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getMovieRows } from '../getMovie';
import { fetchRomanceMovies } from '../store/actions/index';

class RomanceMovies extends Component {
  componentDidMount() {
    this.props.fetchRomanceMovies();
  }

  render() {
    let movies;
    // Call getMoviesRows function only when we get the data back
    // from the API through redux
    if (this.props.movies.data) {
      const url = `/discover/tv?api_key=${process.env.API_KEY}&with_genres=10749`;
      movies = getMovieRows(this.props.movies.data, url);
    }
    return (
      <>
        <h1 className="movieShowcase__heading">Romance Movies</h1>
        <div className="movieShowcase__container">{movies}</div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { movies: state.romance };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchRomanceMovies }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RomanceMovies);
