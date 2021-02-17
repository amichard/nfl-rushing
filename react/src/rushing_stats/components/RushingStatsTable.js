import PropTypes from 'prop-types';
import React from 'react';
import ReactTable from 'react-table';

import playerColumns from './RushingStatsTable/playerColumns';
import rushingStatsColumns from './RushingStatsTable/rushingStatsColumns';
import teamColumns from './RushingStatsTable/teamColumns';

const RushingStatsTable = (props) => {
  const columns = [{
    Header: 'Player',
    columns: playerColumns,
  }, {
    Header: 'Team',
    columns: teamColumns,
  }, {
    Header: 'Rushing Stats',
    columns: rushingStatsColumns,
  }];

  const {
    data, loading, onFetchData, pages,
  } = props;

  return (
    <ReactTable
      columns={columns}
      data={data}
      defaultSorted={[{ id: 'player-name', desc: false }]}
      filterable
      loading={loading}
      manual
      onFetchData={onFetchData}
      pages={pages}
      sortable
    />
  );
};

RushingStatsTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  loading: PropTypes.bool.isRequired,
  onFetchData: PropTypes.func.isRequired,
  pages: PropTypes.number.isRequired,
};

export default RushingStatsTable;
