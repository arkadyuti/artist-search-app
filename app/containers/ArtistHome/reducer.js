/*
 *
 * ArtistHome reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  FETCH_ARTISTS,
  FETCH_ARTISTS_SUCCESS,
  FETCH_ARTISTS_ERROR,
} from './constants';

export const initialState = fromJS({
  listOfArtist: [],
  hasError: false,
  isLoading: false,
});

function artistHomeReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case FETCH_ARTISTS:
      return state.set('hasError', false).set('isLoading', true);
    case FETCH_ARTISTS_SUCCESS:
      return state
        .set('listOfArtist', action.response && action.response.artists)
        .set('hasError', false)
        .set('isLoading', false);
    case FETCH_ARTISTS_ERROR:
      return state
        .set('hasError', true)
        .set('isLoading', false);
    default:
      return state;
  }
}

export default artistHomeReducer;
