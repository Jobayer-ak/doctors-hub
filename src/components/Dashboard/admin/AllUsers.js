import React, {useState } from 'react';
import Loader from '../../common/Loading/Loader';
import baseURL from '../../../utils/baseURL';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import usePagination from '../../../hook/usePaginatation';
import DataPagination from '../../pagination/DataPagination';

const AllUsers = () => {
  const [limit, setLimit] = useState(5);
  const url = `/admin/users`;
  const { data, isLoading, pagination, currentPage, refetch } = usePagination(
    url,
    limit
  );

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
            refetch();
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
          refetch();
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

  // console.log(data);

  return (
    <div className="px-4">
      {/* table */}
      {isLoading ? (
        <Loader />
      ) : (
        <div className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full md:min-w-[60%]">
              <thead className="bg-slate-500">
                <tr className="">
                  <th className="p-2 border">Sr.</th>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Email</th>
                  <th className="p-2 border">Mobile</th>
                  <th className="p-2 border">Gender</th>
                  <th className="p-2 border">Status</th>
                  <th className="p-2 border">Role</th>
                  <th className="p-2 border">Make Admin</th>
                  <th className="p-2 border">Delete</th>
                </tr>
              </thead>

              <tbody>
                {data?.users?.map((a, index) => (
                  <tr className="relative text-center" key={index}>
                    <td className="sticky left-0 bg-slate-400 border">
                      {data.queries.skip === 0
                        ? index + 1
                        : (currentPage - 1) * limit + index + 1}
                    </td>
                    <td className="bg-slate-300 p-2 border md:table-cell">{a.name}</td>
                    <td className="bg-slate-300 p-2 border md:table-cell">{a.email}</td>
                    <td className="bg-slate-300 p-2 border md:table-cell">{a.mobile}</td>
                    <td className="bg-slate-300 p-2 border md:table-cell">{a.gender}</td>
                    <td className="bg-slate-300 p-2 border md:table-cell">{a.status}</td>

                    <td
                      className={
                        a.status === 'active'
                          ? 'text-green-800 font-bold p-2 border bg-slate-300 md:table-cell'
                          : 'text-red-500 font-bold p-2 border bg-slate-300 md:table-cell'
                      }
                    >
                      {a.role}
                    </td>

                    <td className="bg-slate-300 p-2 border md:table-cell">
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
                      className="bg-slate-300 p-2 border curosor-pointer md:table-cell"
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
        </div>
      )}

      {/* data pagination */}
      <DataPagination setLimit={setLimit} />
      <div className="w-full mt-2 flex justify-end">{pagination}</div>
    </div>
  );
};

export default AllUsers;
