import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import ReactPaginate from 'react-paginate';
import baseURL from '../utils/baseURL';
import './react-paginate.css';

const usePagination = (url, limit) => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [updatedLimit, setUpdatedLimit] = useState(limit);

  

  const { data, isLoading, refetch } = useQuery(
    ['paginate', currentPage, limit],
    async () => {
      const res = await baseURL.get(
        `${url}?page=${currentPage}&limit=${limit}`,
        {
          withCredentials: true,
        }
      );
      const result = res.data;
      return result;
    }
  );



  const handlePageChange = ({ selected }) => {
    // currentPage.current = selected + 1;
    setCurrentPage(selected + 1)
    console.log(currentPage);
  };

  console.log(data);

  const pagination = (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageChange}
      pageRangeDisplayed={6}
      pageCount={data?.queries?.pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      marginPagesDisplayed={2}
      containerClassName="pagination justify-content-center"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakClassName="break"
      activeClassName="active"
    />
  );

  return { data, isLoading, pagination, currentPage, refetch };
};

export default usePagination;

