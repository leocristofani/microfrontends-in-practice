import SongListContainer from './song/song_list_container';
import songsReducer from './song/song_reducer';
import * as songsActions from './song/song_actions';

export const Component = SongListContainer;
export const reducer = songsReducer;
export const actions = songsActions;