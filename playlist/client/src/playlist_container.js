import React, { Component } from 'react';

import ErrorBoundary from './error_boundary';
import Playlist from './playlist';

const SONGS_SELECT_SONG = 'songs:select:song';

export default class PlaylistContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: []
    };
  }
  componentDidMount = () => {
    window.addEventListener(SONGS_SELECT_SONG, this.addToPlaylist);
  }
  componentWillMount = () => {
    window.removeEventListener(SONGS_SELECT_SONG, this.addToPlaylist);
  }
  addToPlaylist = ({ detail: { song, artist } }) => {
    this.setState(prevState => ({
      playlist: [...prevState.playlist, { song, artist }]
    }));
  }
  render() {
    return (
      <ErrorBoundary>
        <Playlist playlist={this.state.playlist} />
      </ErrorBoundary>
    );
  }
}