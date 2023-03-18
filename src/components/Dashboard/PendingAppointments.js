import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import AuthContext from '../../context/AuthProvider';
import { format } from 'date-fns';
import Loader from '../common/Loading/Loader';
import baseURL from '../../utils/baseURL';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const PendingAppointments = () => {
  const { user } = useContext(AuthContext);
  const date = new Date();
  const formatedDate = format(date, 'PP');
  // console.log("Mseconds: ",format(new Date(1675255392460), "PP"));

  const { data, isLoading, isError, refetch } = useQuery(['pending', user], async () => {
    const res = await baseURL.get(
      `/pending-appointments?patient=${user.userEmail}&date=${formatedDate}`,
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

  if (isError) {
    console.log(isError);
  }

  const handleDelete = (book_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await baseURL
          .delete(`/booking/delete/${user.userEmail}`, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data)
            if (res.status === 200) {
              console.log(book_id);
              Swal.fire(
                `${res.data.message}`,
                "Booking has been deleted.",
                "success"
              );
              refetch();
            }

            if (res.status === 403) {
              return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!!!",
              });
            }
          })
          .catch((err) => {
            if (err.response.status) {
              return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
            }
          });
      }
    });
  };

  return (
    <>
      {data.length !== 0 || data === false ? (
        <div className="px-4">
          <div className="overflow-x-auto">
            <table className="table w-full md:min-w-[60%] lg:w-full">
              <thead>
                <tr className='text-center'> 
                  <th>Sr.</th>
                  <th>Doctor</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Specialist</th>
                  <th>Payment</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
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
                        <span className="text-white bg-green-700 px-[7px] py-1 rounded-full">PAID</span>
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
      ) : (
        <div className="text-center ">
          <h2 className="text-white text-xl mt-12">
            There is no pending appointments.
          </h2>
        </div>
      )}
    </>
  );
};

export default PendingAppointments;
