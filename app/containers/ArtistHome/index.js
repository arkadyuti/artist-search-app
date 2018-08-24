/**
 *
 * ArtistHome
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectArtistHome from './selectors';
import reducer from './reducer';
import saga from './saga';
import {fetchArtists} from './actions';

import ArtistComponents from '../../components/ArtistComponents';

/* eslint-disable react/prefer-stateless-function */
export class ArtistHome extends React.PureComponent {
  render() {
    const { artisthome, fetchArtistsDispatch } = this.props;
    return (
      <div>
        <Helmet>
          <title>ArtistHome</title>
          <meta name="description" content="Description of ArtistHome" />
        </Helmet>
        <ArtistComponents {...artisthome} fetchArtists={fetchArtistsDispatch} />
      </div>
    );
  }
}

ArtistHome.propTypes = {
  fetchArtistsDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  artisthome: makeSelectArtistHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchArtistsDispatch: searchField => dispatch(fetchArtists(searchField)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'artistHome', reducer });
const withSaga = injectSaga({ key: 'artistHome', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ArtistHome);
