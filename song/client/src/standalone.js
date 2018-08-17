import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './standalone_configure_store';

import songReducer from './song/song_reducer';
import SongListContainer from './song/song_list_container';

import './standalone.css';

const mainReducer = combineReducers({
  /**
   * The wrapper app will add the exposed reducer to the store
   */
  song: songReducer
});

const store = configureStore(mainReducer);

ReactDOM.render((
  <Provider store={store}>
    <SongListContainer
      /**
       * If there's routing without SongList, this is where routing will start from.
       * When embeded, this component may live within a page like /music/songs/
       */
      basename=""
      /**
       * Authentication is done by the wrapping application. The authentication
       * token needs to be passed to the micro-frontend so it can communicate securely with it's backend.
       */
      authToken="auth-token"
      /**
       * Url to api
       */
      baseApiUrl="http://localhost:3000/api"
    />
  </Provider>
), document.getElementById('root'));