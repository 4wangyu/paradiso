import _ from 'lodash';
import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import axios from '../axios-movies';
import SearchLogo from '../static/images/search-icon.svg';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolling: false,
      userInput: '',
    };
    // use to debounce api call
    this.makeAipCall = _.debounce(this.makeAipCall, 1000);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  /** changes the scrolling state depending on the Y-position */
  handleScroll = (event) => {
    if (window.scrollY === 0) {
      this.setState({ scrolling: false });
    } else if (window.scrollY > 50) {
      this.setState({ scrolling: true });
    }
  };

  onChange = async (event) => {
    this.setState({ userInput: event.target.value });
    const { userInput } = this.state;

    await this.makeAipCall(userInput);
  };

  /** Make API call as soon as the user starts typing.  */
  makeAipCall = async (searchItem) => {
    if (searchItem.length === 0) {
      this.props.history.push('/');
      return;
    }
    const url = `/search/multi?api_key=${process.env.API_KEY}&language=en-US&include_adult=true&query=${searchItem}`;
    const response = await axios.get(url);
    const results = response.data.results;
    this.props.history.push({
      pathname: '/search',
      movieRows: results,
      userInput: searchItem,
    });
  };

  onLogoClick = () => {
    // reset input state
    this.setState({ userInput: '' });
  };

  render() {
    const { scrolling } = this.state;

    return (
      <nav className={'navigation ' + (scrolling ? 'black' : '')}>
        <ul className="navigation__container">
          <NavLink to="/" onClick={() => this.onLogoClick()}>
            PARADISO
          </NavLink>
          <div className="navigation__container-link pseudo-link">Videos</div>
          <div className="navigation__container-link pseudo-link">Recent</div>

          <div className="navigation__container--left">
            <SearchLogo className="logo" />
            <input
              value={this.state.userInput}
              onChange={() => this.onChange(event)}
              className="navigation__container--left__input"
              type="text"
              placeholder="Title, genres, people"
            />
          </div>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Navbar);
