import React from 'react';
import PropTypes from 'prop-types';

import SongsListItem from './songs_list_item';

import './songs.css';

export default class Songs extends React.Component {
  static propTypes = {
    artist: PropTypes.string.isRequired,
    songs: PropTypes.arrayOf(PropTypes.string).isRequired
  };
  renderSong = song => (
    <SongsListItem key={song} song={song} artist={this.props.artist} />
  );
  render() {
    return this.props.songs.map(this.renderSong);
  }
}