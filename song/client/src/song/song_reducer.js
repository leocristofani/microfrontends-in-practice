import {
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_SUCCESS
} from './song_actions';

const initialState = {
  data: [],
  meta: {
    fetching: false
  }
};

const defaultAction = {
  payload: {}
};

export default function (state = initialState, action = defaultAction) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_SONGS_REQUEST:
      return Object.assign({}, state, {
        meta: {
          fetching: true
        }
      });
    case FETCH_SONGS_SUCCESS:
      return Object.assign({}, state, {
        data: payload.songs,
        meta: {
          fetching: false
        }
      });
    default:
      return state;
  }
}