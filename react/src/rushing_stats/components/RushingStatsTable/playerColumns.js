const playerColumns = [{
  accessor: (item) => (`${item.player.last_name}, ${item.player.first_name}`),
  className: 'text-left',
  filterBy: 'player',
  Header: 'Name',
  headerClassName: 'text-left',
  id: 'player-name',
  sortBy: ['player__last_name', 'player__first_name'],
  width: 150,
}, {
  accessor: 'player.position',
  className: 'text-center',
  filterBy: 'player__position',
  Header: 'Pos',
  id: 'player-position',
  sortBy: 'player__position',
  width: 50,
}];

export default playerColumns;