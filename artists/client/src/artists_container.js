import axios from 'axios';
import React, { Component } from 'react';

import Artists from './artists';
import GenreSelector from './genre_selector';
import ErrorBoundary from './error_boundary';

export default class ArtistsContainer extends Component {
  static filterByGenre(artists, genre) {
    return artists.filter(artist => artist.genre === genre);
  }
  state = {
    genres: {},
    artists: [],
    selectedGenre: '',
    selectedArtist: ''
  };
  componentDidMount() {
    axios.all([
      axios.get(`${process.env.REACT_APP_LOCAL_API_URL}/genres`),
      axios.get(`${process.env.REACT_APP_LOCAL_API_URL}/artists`)
    ]).then(axios.spread((genres, artists) => {
      this.setState({
        genres: genres.data,
        artists: artists.data,
        selectedGenre: 'Pop/Rock'
      })
    }));
  }
  onSelectGenre = (selectedGenre) => {
    this.setState({ selectedGenre });
  }
  onSelectArtist = (selectedArtist) => {
    this.setState({ selectedArtist });
  }
  render() {
    const {
      artists,
      selectedGenre,
      selectedArtist
    } = this.state;
    return (
      <ErrorBoundary>
        <GenreSelector
          genres={this.state.genres}
          selectGenre={this.onSelectGenre}
          selectedGenre={selectedGenre}
        />
        <Artists
          selectedArtist={selectedArtist}
          selectArtist={this.onSelectArtist}
          artists={ArtistsContainer.filterByGenre(artists, selectedGenre)}
        />
        <button onClick={() => { throw new Error('Error') }}>Cause an error, please!</button>
      </ErrorBoundary>
    );
  }
}