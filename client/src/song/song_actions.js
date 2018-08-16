import axios from 'axios';

export const FETCH_SONGS_REQUEST = 'FETCH_SONGS_REQUEST';
export const FETCH_SONGS_SUCCESS = 'FETCH_SONGS_SUCCESS';

export function fetchSongs(baseApiUrl) {
  return dispatch => {
    dispatch({
      type: FETCH_SONGS_REQUEST
    });
    axios.get(`${baseApiUrl}/songs`)
      .then(({ data }) => {
        dispatch({
          type: FETCH_SONGS_SUCCESS,
          payload: { songs: data }
        });
      })
      .catch(console.log);
  };
}