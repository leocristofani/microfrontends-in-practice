import React from 'react';

const ARTISTS_SELECT_ARTIST = 'artists:select:artist';

export default class ArtistsListItem extends React.Component {
  onClick = (e) => {
    const { name, selectArtist } = this.props;
    selectArtist(name);
    window.dispatchEvent(
      new CustomEvent(ARTISTS_SELECT_ARTIST, { detail: { artist: name } })
    );
  }
  render() {
    const { name, selected } = this.props;
    return (
      <button
        key={name}
        onClick={this.onClick}
        className={`artists__list_item ${selected ? 'artists__list_item--selected' : ''}`}
      >
        {name}
      </button>
    )
  }
}