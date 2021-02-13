import axios from 'axios';
import React, { useState } from 'react';
import ReactTable from 'react-table';

const playerColumns = [{
  accessor: (item) => (`${item.player.last_name}, ${item.player.first_name}`),
  className: 'text-left',
  filterBy: 'player',
  Header: 'Name',
  headerClassName: 'text-left',
  id: 'player-name',
  sortBy: ['player__last_name', 'player__first_name'],
  width: 200,
}, {
  accessor: 'player.position',
  filterBy: 'player__position',
  Header: 'Pos',
  id: 'player-position',
  sortBy: 'player__position',
}];

const rushingStatsColumns = [{
  accessor: 'att_per_game',
  Cell: (item) => (item.value.toFixed(1)),
  className: 'text-right',
  Header: 'Att/G',
}, {
  accessor: 'att_total',
  className: 'text-right',
  Header: 'Att',
}, {
  accessor: 'yds_total',
  className: 'text-right',
  Header: 'Yds',
}, {
  accessor: 'yds_avg_per_att',
  Cell: (item) => (item.value.toFixed(1)),
  className: 'text-right',
  Header: 'Avg',
}, {
  accessor: 'yds_per_game',
  Cell: (item) => (item.value.toFixed(1)),
  className: 'text-right',
  Header: 'Yds/G',
}, {
  accessor: 'td_total',
  className: 'text-right',
  Header: 'TD',
}, {
  accessor: (item) => (`${item.rush_max}${item.rush_max_td ? 'T' : ''}`),
  Cell: (item) => (
    <>
      <span>{item.original.rush_max}</span>
      <span className={item.original.rush_max_td ? 'visible' : 'invisible'}>T</span>
    </>
  ),
  className: 'text-right',
  Header: 'Lng',
  id: 'longest-rush',
}, {
  accessor: 'rush_1st',
  className: 'text-right',
  Header: '1st',
}, {
  accessor: 'rush_1st_pct',
  Cell: (item) => (item.value.toFixed(1)),
  className: 'text-right',
  Header: '1st%',
}, {
  accessor: 'rush_20_yds',
  className: 'text-right',
  Header: '20+',
}, {
  accessor: 'rush_40_yds',
  className: 'text-right',
  Header: '40+',
}, {
  accessor: 'fumbles_total',
  className: 'text-right',
  Header: 'FUM',
}];

const teamColumns = [{
  accessor: (item) => (`${item.player.team.t_name} (${item.player.team.t_code})`),
  className: 'text-left',
  filterBy: 'team',
  Header: 'Name (Code)',
  id: 'team',
  sortBy: ['player__team__t_name', 'player__team__t_code'],
  width: 250,
}];

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

const findFilterBy = (columns, id) => {
  let value = id;

  for (let i = 0; i < columns.length; i += 1) {
    const column = columns[i];

    if ('columns' in column) {
      value = findFilterBy(column.columns, id);

      if (value !== id) {
        return value;
      }
    } else if (column.id === id && 'filterBy' in column) {
      return column.filterBy;
    }
  }

  return value;
};

const findSortBy = (columns, id) => {
  let value = id;

  for (let i = 0; i < columns.length; i += 1) {
    const column = columns[i];

    if ('columns' in column) {
      value = findSortBy(column.columns, id);

      if (value !== id) {
        return value;
      }
    } else if (column.id === id && 'sortBy' in column) {
      return column.sortBy;
    }
  }

  return value;
};

const RushingStatsTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(-1);

  return (
    <ReactTable
      columns={columns}
      data={data}
      filterable
      loading={loading}
      manual
      onFetchData={(state) => {
        setLoading(true);

        const orderBy = [];

        state.sorted.forEach((sortBy) => {
          let sortByFields = findSortBy(state.columns, sortBy.id);

          if (!Array.isArray(sortByFields)) {
            sortByFields = [sortByFields];
          }

          sortByFields.forEach((value) => {
            orderBy.push(`${sortBy.desc ? '-' : ''}${value}`);
          });
        });

        const data = {
          ordering: orderBy.join(','),
          page: state.page + 1,
          page_size: state.pageSize,
        };

        state.filtered.forEach((filterBy) => {
          const filterByField = findFilterBy(state.columns, filterBy.id);
          data[filterByField] = filterBy.value;
        });

        axios.get('http://localhost:8000/api/rushing-stats', { params: data }).then((response) => {
          const { count, results } = response.data;
          setData(results);
          setLoading(false);
          setPages(Math.ceil(count / state.pageSize));
        });
      }}
      pages={pages}
      sortable
    />
  )
};

export default RushingStatsTable;
