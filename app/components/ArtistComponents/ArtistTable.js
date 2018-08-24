/**
 *
 * ArtistTable
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';

const ROWS_PER_PAGE = 5;

const StyledImg = styled.img`
  width: 38px;
`;
/* eslint-disable react/prefer-stateless-function */
class ArtistTable extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };
  }
  handleChangePage = (event, page) => {
    this.setState({ page });
  };
  constructTableData = tableData => {
    tableData = tableData.slice(
      this.state.page * ROWS_PER_PAGE,
      this.state.page * ROWS_PER_PAGE + ROWS_PER_PAGE,
    );
    return tableData.map(item => ({
      strArtist: item.strArtist,
      idArtist: item.idArtist,
      strArtistThumb: item.strArtistThumb,
    }));
  };
  render() {
    const { listOfArtist, isLoading,hasError } = this.props;
    const { page } = this.state;
    console.log(listOfArtist)
    if (isLoading) {
      return (
        <div>
          <CircularProgress color="primary" />
        </div>
      );
    }
    if(hasError){
      return (
        <div>Failed to fetch data</div>
      )
    }
    if(listOfArtist === null) {
      return (
        <div>No artist found</div>
      )
    }
    if (!listOfArtist || (listOfArtist && listOfArtist.length <= 0)) {
      return null;
    }
    const finalTableData = this.constructTableData(listOfArtist);
    return (
      <div>
        <Table aria-labelledby="tableTitle">
          <TableHead>
            <TableRow>
              <TableCell>One</TableCell>
              <TableCell>Two</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {finalTableData &&
              finalTableData.map(n => {
                return (
                  <TableRow key={n.idArtist}>
                    <TableCell>
                      <StyledImg src={n.strArtistThumb} alt={n.strArtist} />
                    </TableCell>
                    <TableCell>{n.strArtist}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={listOfArtist.length}
          rowsPerPage={ROWS_PER_PAGE}
          page={page}
          rowsPerPageOptions={[]}
          labelRowsPerPage={null}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
        />
      </div>
    );
  }
}

ArtistTable.propTypes = {};

export default ArtistTable;
