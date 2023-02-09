import React, { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import { useQuery } from "react-query";
import axios from "axios";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const MyHistory = () => {
  const { user } = useContext(AuthContext);

  const { data, isLoading, refetch } = useQuery(["booking", user], async () => {
    const res = await axios.get(
      `http://localhost:5000/api/v1/bookings?patient=${user.userEmail}`,
      {
        withCredentials: true,
      }
    );
    const result = res.data;
    return result;
  });

  if (isLoading) {
    return <h2 className="text-xl font-bold text-white">Loading......</h2>;
  }

  // console.log(data);

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
        await axios
          .delete(`http://localhost:5000/api/v1/booking/delete/${book_id}`, {
            withCredentials: true,
          })
          .then((res) => {
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

  console.log(data);
  return (
    <>
      {data.length !== 0 ? (
        <div className="px-4">
          <div className="overflow-x-auto">
            <table className="table w-full md:min-w-[60%] lg:w-full">
              <thead>
                <tr className="text-center">
                  <th>Sr.</th>
                  <th>Doctor</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Specialist</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((a, index) => (
                  <tr className="relative text-center">
                    <th className="sticky left-0">{index + 1}</th>
                    <td>{a.doctor_name}</td>
                    <td>{format(new Date(a.date), "PP")}</td>
                    <td>{a.slot}</td>
                    <td>{a.speciality}</td>
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
            No Appointments Left. <br />{" "}
            <span className="text-2xl"> Please Book Appointment!</span>
          </h2>
        </div>
      )}
    </>
  );
};
// responsive table with jsx

export default MyHistory;
