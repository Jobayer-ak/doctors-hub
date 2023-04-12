import React, { useState } from 'react';
import { useQuery } from 'react-query';
import ReactPaginate from 'react-paginate';
import baseURL from '../utils/baseURL';
import './react-paginate.css';

const usePagination = (path, limit, extraQueries = {}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, refetch } = useQuery(
    ['paginate', currentPage, limit, extraQueries],
    async () => {
      let url = `${path}?page=${currentPage}&limit=${limit}`;

      if (extraQueries !== {}) {
        for (let key in extraQueries) {
          url += `&${key}=${extraQueries[key]}`;
        }
      }

      const res = await baseURL.get(url, {
        withCredentials: true,
      });

      const result = res.data;
      return result;
    }
  );

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const pagination = (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageChange}
      pageRangeDisplayed={1}
      pageCount={data?.queries?.pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
      marginPagesDisplayed={1}
      containerClassName="pagination justify-content-center"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakClassName="break"
      activeClassName="active"
      forcePage={currentPage - 1}
    />
  );

  return { data, isLoading, pagination, currentPage, refetch };
};

export default usePagination;
