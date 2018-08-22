import React from 'react';
import PropTypes from 'prop-types';

import ArtistsListItem from './artists_list_item';

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
    <ArtistsListItem
      key={name}
      name={name}
      selectArtist={this.props.selectArtist}
      selected={this.props.selectedArtist === name}
    />
  );
  render() {
    return this.props.artists.map(this.renderArtist);
  }
}