import React from 'react';

const teamColumns = [{
  accessor: (item) => (`${item.player.team.t_name} (${item.player.team.t_code})`),
  Cell: (item) => (
    <>
      <span className="d-none d-xl-inline">{item.value}</span>
      <span className="d-xl-none d-xs-inline">
        {item.original.player.team.t_code}
      </span>
    </>
  ),
  className: 'text-left',
  filterBy: 'team',
  Header: 'Name (Code)',
  headerClassName: 'text-left',
  id: 'team',
  maxWidth: 300,
  sortBy: ['player__team__t_name', 'player__team__t_code'],
}];

export default teamColumns;
