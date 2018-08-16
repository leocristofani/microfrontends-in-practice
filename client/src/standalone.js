import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './standalone_configure_store';

import songReducer from './song/song_reducer';
import SongListContainer from './song/song_list_container';

import './standalone.css';

const mainReducer = combineReducers({
  song: songReducer
});

ReactDOM.render((
  <Provider store={configureStore(mainReducer)}>
    <SongListContainer
      basename=""
      authToken="auth-token"
      baseApiUrl="http://localhost:3000/api"
    />
  </Provider>
), document.getElementById('root'));