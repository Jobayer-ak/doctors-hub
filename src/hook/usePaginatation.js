import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import baseURL from '../utils/baseURL';
import './react-paginate.css';

const usePagination = (url, limit) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () =>
      await baseURL
        .get(`${url}?page=${currentPage}&limit=${limit}`, {
          withCredentials: true,
        })
        .then((res) => {
          setLoading(false);
          console.log(res.data);
          setData(res.data);
          setPageNum(res.data.queries.pageCount);
        })
        .catch((err) => console.log(err));

    fetchData();
  }, [currentPage, url, limit]);

  const handlePageChange = (e) => {
    setCurrentPage(e.selected + 1);
  };

  const pagination = (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageChange}
      pageRangeDisplayed={6}
      pageCount={pageNum}
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

  return { data, loading, pagination, currentPage };
};

export default usePagination;
