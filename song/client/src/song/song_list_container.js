import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SongList from './song_list';
import { fetchSongs } from './song_actions';

function mapStateToProps(state) {
  const { data, meta } = state.song;
  return {
    songs: data,
    fetchingSongs: meta.fetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSongs }, dispatch);
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, stateProps, {
    fetchSongs() {
      dispatchProps.fetchSongs(ownProps.baseApiUrl);
    }
  });
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SongList);