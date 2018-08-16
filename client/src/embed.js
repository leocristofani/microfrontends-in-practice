import Songs from './song/song_list_container';
import songsReducer from './song/song_reducer';
import songsActions from './song/song_actions';

/**
 * To be exposed as an AMD module
 */
const embed = {
  Songs,
  songsReducer,
  songsActions
};