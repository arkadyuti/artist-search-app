/**
 *
 * ArtistComponents
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArtistTable from './ArtistTable';

/* eslint-disable react/prefer-stateless-function */
class ArtistComponents extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchField: '',
    };
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleSearchOnClick = (e) => {
    e.preventDefault()
    const { fetchArtists } = this.props;
    const { searchField } = this.state;
    fetchArtists(searchField);
  };
  render() {
    const { searchField } = this.state;
    const { listOfArtist, isLoading, hasError } = this.props;
    return (
      <Grid container justify="center">
        <Grid item>
          <form action="" onSubmit={this.handleSearchOnClick}>
            <TextField
              id="search"
              label="Search field"
              type="search"
              margin="normal"
              value={searchField}
              onChange={this.handleChange('searchField')}
            />
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              onClick={this.handleSearchOnClick}
            >
              Submit
            </Button>
            <ArtistTable
              isLoading={isLoading}
              hasError={hasError}
              listOfArtist={listOfArtist}
            />
          </form>
        </Grid>
      </Grid>
    );
  }
}

ArtistComponents.propTypes = {
  fetchArtists: PropTypes.func.isRequired,
};

export default ArtistComponents;
