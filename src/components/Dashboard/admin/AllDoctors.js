import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import baseURL from '../../../utils/baseURL';
import Loader from '../../common/Loading/Loader';
import ReactPaginate from 'react-paginate';
import './react-paginate.css';


const AllDoctors = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () =>
      await baseURL
        .get(`/doctors?page=${currentPage}&limit=${limit}`, {
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
  }, [currentPage]);

  const limit = 2;
  console.log('current select: ', currentPage);

  // const { data, isLoading, isError, refetch } = useQuery(
  //   ['adminAllDoctors', currentPage],
  //   async () => {
  //     const res = await baseURL.get(
  //       `/doctors?page=${currentPage}&limit=${limit}`,
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //     const result = res.data;
  //     return result;
  //   }
  // );

  const handlePageChange = (e) => {
    setCurrentPage(e.selected + 1);
  };

  // delte doctor handle function
  const handleDelete = (doc_email) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await baseURL
          .delete(`/doctor/admin/delete/${doc_email}`, {
            withCredentials: true,
          })
          .then((res) => {
            if (res.status === 200) {
              // refetch();
              return Swal.fire(
                `${res.data.message}`,
                'Doctor has been deleted.',
                'success'
              );
            }

            if (res.status === 403) {
              return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!!!',
              });
            }
          })
          .catch((err) => {
            if (err.response.status) {
              return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              });
            }
          });
      }
    });
  };

  if (loading) {
    <Loader />;
  }

  return (
    <div className="px-4">
      {/* table */}
      {loading ? (
        <Loader />
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="text-center">
                <th>Sr.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Mobile</th>
                <th>Speciality</th>
                <th>Branch</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {data?.doctors?.map((a, index) => (
                <tr className="relative text-center" key={index}>
                  <th className="sticky left-0">{(currentPage - 1) * limit + index + 1}</th>
                  <td>{a.name}</td>
                  <td>{a.email}</td>
                  <td>{a.gender}</td>
                  <td>{a.contact_number}</td>
                  <td>{a.speciality}</td>
                  <td>{a.branch}</td>
                  <td
                    className="cursor-pointer"
                    onClick={() => handleDelete(a.email)}
                  >
                    {
                      <FontAwesomeIcon
                        icon={faX}
                        className="bg-red-700 px-2 py-2 rounded-md text-white"
                      />
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* pagination */}
      <div className="w-full mt-4">
        {/* {!loading && ( */}
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageChange}
            // onPageActive={active}
            pageRangeDisplayed={5}
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
        {/* )} */}
      </div>
    </div>
  );
};

export default AllDoctors;
