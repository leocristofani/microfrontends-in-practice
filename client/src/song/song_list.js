import React from 'react';
import PropTypes from 'prop-types';

import './song_list.css';

class SongList extends React.Component {
  componentDidMount() {
    this.props.fetchSongs();
  }

  renderFetching() {
    return <div>Fetching...</div>
  }

  renderList(songs) {
    return songs.map(song => (
      <div className="song_list__item" key={song.id}>{song.name}</div>
    ));
  }

  render() {
    const { songs, fetchingSongs } = this.props;
    return (
      <div className="song_list">
        {fetchingSongs ? this.renderFetching() : this.renderList(songs)}
      </div>
    )
  }
}

SongList.propTypes = {
  songs: PropTypes.array,
  fetchingSongs: PropTypes.bool.isRequired,
  fetchSongs: PropTypes.func.isRequired
};

SongList.defaultProps = {
  songs: []
};

export default SongList;