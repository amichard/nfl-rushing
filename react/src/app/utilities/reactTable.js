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

const getFilterBy = (state) => {
  const data = {};

  state.filtered.forEach((filterBy) => {
    const filterByField = findFilterBy(state.columns, filterBy.id);

    data[filterByField] = filterBy.value;
  });

  return data;
};

const getOrderBy = (state) => {
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

  return orderBy.join(',');
};

export {
  findFilterBy, findSortBy, getFilterBy, getOrderBy,
};
