/*
 *
 * ArtistHome actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_ARTISTS,
  FETCH_ARTISTS_SUCCESS,
  FETCH_ARTISTS_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function fetchArtists(searchField) {
  return {
    type: FETCH_ARTISTS,
    searchField,
  };
}
export function fetchArtistsSuccess(response) {
  return {
    type: FETCH_ARTISTS_SUCCESS,
    response,
  };
}
export function fetchArtistsError(error) {
  return {
    type: FETCH_ARTISTS_ERROR,
    error,
  };
}
