import { takeLatest, call, put, actionChannel } from 'redux-saga/effects';
import request from 'utils/request';

import { FETCH_ARTISTS } from './constants';
import { fetchArtistsSuccess, fetchArtistsError } from './actions';

export function* fetchArtists({searchField}) {
  let requestURL = `http://www.theaudiodb.com/api/v1/json/1/search.php?s=${searchField}`;

  try {
    const response = yield call(request, requestURL);
    yield put(fetchArtistsSuccess(response));
  } catch (err) {
    yield put(fetchArtistsError(err));
  }
}
export default function* defaultSaga() {
  yield [takeLatest(FETCH_ARTISTS, fetchArtists)];
}
