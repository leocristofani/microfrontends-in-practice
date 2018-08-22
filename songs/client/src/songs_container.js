import axios from 'axios';
import React, { Component } from 'react';

import Songs from './songs';

const ARTISTS_SELECT_ARTIST = 'artists:select:artist';

export default class SongsContainer extends Component {
  state = {
    artist: 'Eminem',
    songs: []
  };
  componentDidMount = () => {
    window.addEventListener(ARTISTS_SELECT_ARTIST, this.fetchSongs);
    this.fetchSongs({ detail: { artist: this.state.artist } });
  }
  componentWillMount = () => {
    window.removeEventListener(ARTISTS_SELECT_ARTIST, this.fetchSongs);
  }
  fetchSongs = ({ detail: { artist } }) => {
    axios.get(`${process.env.REACT_APP_LOCAL_API_URL}/songs`, { params: { artist } })
      .then(({ data }) => {
        this.setState({ songs: data })
      });
  }
  render() {
    const { artist, songs } = this.state;
    return <Songs artist={artist} songs={songs} />;
  }
}