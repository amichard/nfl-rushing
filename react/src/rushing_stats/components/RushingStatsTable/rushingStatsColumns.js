import React from 'react';

const colWidth = 75;

const numericCell = (value, precision = 0) => {
  if (value < 0) {
    return <span className="text-danger">{value.toFixed(precision)}</span>
  }

  return value.toFixed(precision);
};

const rushingStatsColumns = [{
  accessor: 'att_per_game',
  Cell: (item) => (numericCell(item.value)),
  className: 'text-right',
  Header: 'Att/G',
  width: colWidth,
}, {
  accessor: 'att_total',
  Cell: (item) => (numericCell(item.value)),
  className: 'text-right',
  Header: 'Att',
  width: colWidth,
}, {
  accessor: 'yds_total',
  Cell: (item) => (numericCell(item.value)),
  className: 'text-right',
  Header: 'Yds',
  width: colWidth,
}, {
  accessor: 'yds_avg_per_att',
  Cell: (item) => (numericCell(item.value, 1)),
  className: 'text-right',
  Header: 'Avg',
  width: colWidth,
}, {
  accessor: 'yds_per_game',
  Cell: (item) => (numericCell(item.value, 1)),
  className: 'text-right',
  Header: 'Yds/G',
  width: colWidth,
}, {
  accessor: 'td_total',
  Cell: (item) => (numericCell(item.value)),
  className: 'text-right',
  Header: 'TD',
  width: colWidth,
}, {
  accessor: (item) => (`${item.rush_max}${item.rush_max_td ? 'T' : ''}`),
  Cell: (item) => (
    <>
      {numericCell(item.original.rush_max)}
      <span className={item.original.rush_max_td ? 'visible' : 'invisible'}>T</span>
    </>
  ),
  className: 'text-right',
  Header: 'Lng',
  id: 'lng',
  sortBy: ['rush_max', 'rush_max_td'],
  width: colWidth,
}, {
  accessor: 'rush_1st',
  Cell: (item) => (numericCell(item.value)),
  className: 'text-right',
  Header: '1st',
  width: colWidth,
}, {
  accessor: 'rush_1st_pct',
  Cell: (item) => (numericCell(item.value, 1)),
  className: 'text-right',
  Header: '1st%',
  width: colWidth,
}, {
  accessor: 'rush_20_yds',
  Cell: (item) => (numericCell(item.value)),
  className: 'text-right',
  Header: '20+',
  width: colWidth,
}, {
  accessor: 'rush_40_yds',
  Cell: (item) => (numericCell(item.value)),
  className: 'text-right',
  Header: '40+',
  width: colWidth,
}, {
  accessor: 'fumbles_total',
  Cell: (item) => (numericCell(item.value)),
  className: 'text-right',
  Header: 'FUM',
  width: colWidth,
}];

export default rushingStatsColumns;