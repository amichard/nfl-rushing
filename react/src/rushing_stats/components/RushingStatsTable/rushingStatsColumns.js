import React from 'react';

const colWidth = 75;

const rushingStatsColumns = [{
  accessor: 'att_per_game',
  Cell: (item) => (item.value.toFixed(1)),
  className: 'text-right',
  Header: 'Att/G',
  width: colWidth,
}, {
  accessor: 'att_total',
  className: 'text-right',
  Header: 'Att',
  width: colWidth,
}, {
  accessor: 'yds_total',
  className: 'text-right',
  Header: 'Yds',
  width: colWidth,
}, {
  accessor: 'yds_avg_per_att',
  Cell: (item) => (item.value.toFixed(1)),
  className: 'text-right',
  Header: 'Avg',
  width: colWidth,
}, {
  accessor: 'yds_per_game',
  Cell: (item) => (item.value.toFixed(1)),
  className: 'text-right',
  Header: 'Yds/G',
  width: colWidth,
}, {
  accessor: 'td_total',
  className: 'text-right',
  Header: 'TD',
  width: colWidth,
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
  width: colWidth,
}, {
  accessor: 'rush_1st',
  className: 'text-right',
  Header: '1st',
  width: colWidth,
}, {
  accessor: 'rush_1st_pct',
  Cell: (item) => (item.value.toFixed(1)),
  className: 'text-right',
  Header: '1st%',
  width: colWidth,
}, {
  accessor: 'rush_20_yds',
  className: 'text-right',
  Header: '20+',
  width: colWidth,
}, {
  accessor: 'rush_40_yds',
  className: 'text-right',
  Header: '40+',
  width: colWidth,
}, {
  accessor: 'fumbles_total',
  className: 'text-right',
  Header: 'FUM',
  width: colWidth,
}];

export default rushingStatsColumns;