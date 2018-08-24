import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the artistHome state domain
 */

const selectArtistHomeDomain = state => state.get('artistHome', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ArtistHome
 */

const makeSelectArtistHome = () =>
  createSelector(selectArtistHomeDomain, substate => substate.toJS());

export default makeSelectArtistHome;
export { selectArtistHomeDomain };
