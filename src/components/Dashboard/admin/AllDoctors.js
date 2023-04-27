import React, {useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import baseURL from '../../../utils/baseURL';
import Loader from '../../common/Loading/Loader';
import usePagination from '../../../hook/usePaginatation';
import DataPagination from '../../pagination/DataPagination';

const AllDoctors = () => {
  const [limit, setLimit] = useState(5);
  const url = `/doctors`;
  const { data, isLoading, pagination, currentPage, refetch } = usePagination(url, limit);


  // delete doctor handle function
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
              refetch()
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
                  <th className="p-2 border">Gender</th>
                  <th className="p-2 border">Mobile</th>
                  <th className="p-2 border">Speciality</th>
                  <th className="p-2 border">Branch</th>
                  <th className="p-2 border">Remove</th>
                </tr>
              </thead>

              {data?.doctors?.map((a, index) => (
                <tr className="relative text-center" key={index}>
                  <td className="sticky left-0 bg-slate-400 border">
                    {(currentPage - 1) * limit + index + 1}
                  </td>
                  <td className="bg-slate-300 p-2 border md:table-cell">{a.name}</td>
                  <td className="bg-slate-300 p-2 border md:table-cell">{a.email}</td>
                  <td className="bg-slate-300 p-2 border md:table-cell">{a.gender}</td>
                  <td className="bg-slate-300 p-2 border md:table-cell">
                    {a.contact_number}
                  </td>
                  <td className="bg-slate-300 p-2 border md:table-cell">{a.speciality}</td>
                  <td className="bg-slate-300 p-2 border md:table-cell">{a.branch}</td>
                  <td
                    className="bg-slate-300 p-2 border cursor-pointer md:table-cell"
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
            </table>
          </div>
        </div>
      )}

      {/* pagination */}
      <DataPagination setLimit={setLimit} />
      <div className="w-full mt-2 flex justify-end">{pagination}</div>
    </div>
  );
};

export default AllDoctors;
