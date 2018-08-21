import React from 'react';
import PropTypes from 'prop-types';

import './artists.css';


export default class Artists extends React.Component {
  static propTypes = {
    artists: PropTypes.arrayOf(
      PropTypes.shape({
        genre: PropTypes.string.isRequired,
        name: PropTypes.shape.isRequired
      })).isRequired,
    selectArtist: PropTypes.func.isRequired,
    selectedArtist: PropTypes.string.isRequired
  };
  static defaultProps = {
    selectedArtist: ''
  };
  renderArtist = ({ name }) => (
    <button
      key={name}
      onClick={() => this.props.selectArtist(name)}
      className={`artists__list_item ${this.props.selectedArtist === name ? 'artists__list_item--selected' : ''}`}
    >
      {name}
    </button>
  );
  render() {
    return this.props.artists.map(this.renderArtist);
  }
}