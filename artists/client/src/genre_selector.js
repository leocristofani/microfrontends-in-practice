import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GenreSelector extends Component {
  static propTypes = {
    genres: PropTypes.object.isRequired,
    selectGenre: PropTypes.func.isRequired,
    selectedGenre: PropTypes.string.isRequired
  };
  onChange = event => {
    this.props.selectGenre(event.target.value);
  };
  render() {
    const { genres, selectedGenre } = this.props;
    return (
      <select
        value={selectedGenre}
        onChange={this.onChange}
        className="artists__genre_selector">
        {Object.values(genres).map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
    );
  }
}
