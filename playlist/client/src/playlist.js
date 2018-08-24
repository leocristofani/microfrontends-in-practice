import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './playlist.css';

export default class Playlist extends Component {
  static propTypes = {
    playlist: PropTypes.arrayOf(PropTypes.shape({
      song: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired
    })),
  };
  render() {
    const { playlist } = this.props;
    return <div className="playlist">Playlist ({playlist.length})</div>;
  }
}