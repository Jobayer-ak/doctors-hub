import React from 'react';
import { useQuery } from 'react-query';

import { format } from 'date-fns';
import Loader from '../common/Loading/Loader';
import baseURL from '../../utils/baseURL';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import useStorage from '../../hook/useStorage';

const PendingAppointments = () => {
  const [user] = useStorage();
  const date = new Date();
  const formatedDate = format(date, 'PP');
  // console.log("Mseconds: ",format(new Date(1675255392460), "PP"));

  const userInfo = JSON.parse(user);

  const { data, isLoading, refetch } = useQuery(['pending'], async () => {
    const res = await baseURL.get(
      `/pending-appointments?patient=${userInfo?.userEmail}&date=${formatedDate}`,
      {
        withCredentials: true,
      } 
    );
    const result = res.data;
    return result;
  });

  if (isLoading) {
    return <Loader />;
  }

  console.log('dd: ', typeof data);

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
          .delete(`/booking/delete/${userInfo?.userEmail}`, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            refetch();
            if (res.status === 200) {
              console.log(book_id);
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
    <>
      {data.length < 1 || data === undefined ? (
        <div className="text-center ">
          <h2 className="text-white text-xl mt-12">
            There is no pending appointments.
          </h2>
        </div>
      ) : (
        <div className="px-4">
          <div className="overflow-x-auto h-screen">
            <table className="table w-full md:min-w-[60%] lg:w-full">
              <thead>
                <tr className="text-center">
                  <th>Sr.</th>
                  <th>Doctor</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Specialist</th>
                  <th>Payment</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className=''>
                {data?.map((a, index) => (
                  <tr className="relative text-center">
                    <th className="sticky left-0">{index + 1}</th>
                    <td>{a.doctor_name}</td>
                    <td>{format(new Date(a.date), 'PP')}</td>
                    <td>{a.slot}</td>
                    <td>{a.speciality}</td>
                    <td>
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
                      className="cursor-pointer"
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
      )}
    </>
  );
};

export default PendingAppointments;
