import React from 'react';
import PropTypes from 'prop-types';

const SONGS_SELECT_SONG = 'songs:select:song';

export default class SongsListItem extends React.Component {
  static propTypes = {
    artist: PropTypes.string.isRequired,
    song: PropTypes.string.isRequired
  }
  onClick = (e) => {
    window.dispatchEvent(
      new CustomEvent(SONGS_SELECT_SONG, {
        detail: {
          song: this.props.song,
          artist: this.props.artist
        }
      })
    );
  }
  render() {
    const { song } = this.props;
    return (
      <button key={song} onClick={this.onClick} className="songs__list_item">
        {song}
      </button>
    )
  }
}