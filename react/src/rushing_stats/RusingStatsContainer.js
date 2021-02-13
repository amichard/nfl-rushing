import axios from 'axios';
import React, { useState } from 'react';

import { getFilterBy, getOrderBy } from '../app/utilities/reactTable';
import RushingStatsTable from './components/RushingStatsTable';

const RushingStatsContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(-1);

  const onFetchData = (state) => {
    setLoading(true);

    const filters = getFilterBy(state);

    const data = {
      ...filters,
      ordering: getOrderBy(state),
      page: state.page + 1,
      page_size: state.pageSize,
    };

    axios.get('http://localhost:8000/api/rushing-stats', { params: data }).then((response) => {
      const { count, results } = response.data;

      setData(results);
      setPages(Math.ceil(count / state.pageSize));
      setLoading(false);
    });
  }

  return (
    <div className="row">
      <div className="col-12">
        <RushingStatsTable
          data={data}
          loading={loading}
          pages={pages}
          onFetchData={onFetchData}
        />
      </div>
    </div>
  );
};

export default RushingStatsContainer;
