import React, { useState } from 'react';
import { format } from 'date-fns';
import Loader from '../common/Loading/Loader';
import baseURL from '../../utils/baseURL';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import useStorage from '../../hook/useStorage';
import usePagination from '../../hook/usePaginatation';
import DataPagination from '../pagination/DataPagination';

const PendingAppointments = () => {
  const [user] = useStorage();
  const date = new Date();
  const formatedDate = format(date, 'PP');
  const [limit, setLimit] = useState(5);
  const userInfo = JSON.parse(user);

  const path = '/pending-appointments';
  const extraQueries = {
    patient: `${userInfo.email}`,
    date: `${formatedDate}`,
  };

  const { data, isLoading, pagination, currentPage, refetch } =
    usePagination(path, limit, extraQueries);

  const handleDelete = (book_id) => {
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
          .delete(`/booking/delete/${book_id}`, {
            withCredentials: true,
          })
          .then((res) => {
           
            refetch();
            if (res.status === 200) {
              
              return Swal.fire(
                `${res.data.message}`,
                'Booking has been deleted.',
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
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {data.appointments.length === 0 ? (
            <div className="text-center ">
              <h2 className="text-white text-xl mt-12">
                No Appointments Left. <br />{' '}
                <span className="text-2xl"> Please Make Appointments!</span>
              </h2>
            </div>
          ) : (
            <div>
              {/* data table */}
              <div className="overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full md:min-w-[60%] text-center">
                    <thead className="bg-slate-500">
                      <tr className="sticky top-0">
                        <th className="p-2 border">Sr.</th>
                        <th className="p-2 border">Doctor</th>
                        <th className="p-2 border">Date</th>
                        <th className="p-2 border">Time</th>
                        <th className="p-2 border">Specialist</th>
                        <th className="p-2 border">Payment</th>
                        <th className="p-2 border">Delete</th>
                      </tr>
                    </thead>

                    <tbody>
                      {data?.appointments?.map((a, index) => (
                        <tr className="relative text-center" key={index}>
                          <td className="sticky left-0 bg-slate-400 border">
                            {data.queries.skip === 0
                              ? index + 1
                              : (currentPage - 1) * limit + index + 1}
                          </td>
                          <td className="bg-slate-300 p-2 border md:table-cell">
                            {a.doctor_name}
                          </td>
                          <td className="bg-slate-300 p-2 border md:table-cell">
                            {format(new Date(a.date), 'PP')}
                          </td>
                          <td className="bg-slate-300 p-2 border md:table-cell">
                            {a.slot}
                          </td>
                          <td className="bg-slate-300 p-2 border md:table-cell">
                            {a.speciality}
                          </td>
                          <td className="bg-slate-300 p-2 border md:table-cell">
                            {a.fee && !a.paid && (
                              <Link to={`/dashboard/payment/${a._id}`}>
                                <button className="btn btn-xs">Pay</button>
                              </Link>
                            )}
                            {a.fee && a.paid && (
                              <span className="text-white bg-green-700 px-[7px] py-1 rounded-full">
                                PAID
                              </span>
                            )}
                          </td>
                          <td
                            className="bg-slate-300 p-2 border md:table-cell cursor-pointer"
                            onClick={() => handleDelete(a._id)}
                          >
                            {
                              <FontAwesomeIcon
                                icon={faTrashCan}
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

              {/* pagination */}
              <div className="w-full">
                <DataPagination setLimit={setLimit} />
                <div className="w-full mt-2 flex justify-end">{pagination}</div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PendingAppointments;
