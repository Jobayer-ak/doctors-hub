import React, { useState } from 'react';
import Loader from '../../common/Loading/Loader';
import baseURL from '../../../utils/baseURL';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import usePagination from '../../../hook/usePaginatation';
import DataPagination from '../../pagination/DataPagination';

const AllUsers = () => {
  const [limit, setLimit] = useState(2);
  const url = `/admin/users`;
  const { data, loading, pagination, currentPage } = usePagination(url, limit);

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
          .delete(`/user/admin/delete/${doc_email}`, {
            withCredentials: true,
          })
          .then((res) => {
            if (res.status === 200) {
              console.log(doc_email);
              Swal.fire(
                `${res.data.message}`,
                'Doctor has been deleted.',
                'success'
              );
              // refetch();
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

  const handleAdmin = async (uId) => {
    console.log('user id: ', uId);

    const uData = { uRole: 'admin' };

    await baseURL
      .patch(`/admin/make-admin/${uId}`, uData, { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          // refetch();
          return Swal.fire('Good job!', res.data.message, 'success');
        }

        if (res.status === 403) {
        }
      })
      .catch((err) => {
        console.log(err.response.data.message);
        if (err.response.status === 403) {
          return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message,
          });
        }

        if (err.response.status === 304) {
          return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message,
          });
        }
      });
  };

  return (
    <div className="px-4">
      {/* table */}
      {loading ? (
        <Loader />
      ) : (
        <div className="overflow-auto">
          <table className="table w-full md:min-w-[60%] lg:w-full">
            <thead>
              <tr className="text-center">
                <th>Sr.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Gender</th>
                <th>Status</th>
                <th>Role</th>
                <th>Make Admin</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.users?.map((a, index) => (
                <tr className="relative text-center" key={index}>
                  <th className="sticky left-0">
                    {(currentPage - 1) * limit + index + 1}
                  </th>
                  <td>{a.name}</td>
                  <td>{a.email}</td>
                  <td>{a.mobile}</td>
                  <td>{a.gender}</td>
                  <td
                    className={
                      a.status === 'active'
                        ? 'text-green-800 font-bold '
                        : 'text-red-500 font-bold'
                    }
                  >
                    {a.status}
                  </td>
                  <td className="">{a.role}</td>

                  <td>
                    {a.role === 'admin' ? (
                      ''
                    ) : (
                      <button
                        className="bg-[#f68685] p-2 rounded-md cursor-pointer"
                        onClick={() => handleAdmin(a._id)}
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
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

      {/* data pagination */}
      <DataPagination setLimit={setLimit} />
      <div className="w-full mt-2 flex justify-end">{pagination}</div>
    </div>
  );
};

export default AllUsers;
