import React, { useContext } from "react";
import AuthContext from "../../../context/AuthProvider";
import { useQuery } from "react-query";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { CirclesWithBar, Dna } from "react-loader-spinner";
import Loader from "../../common/Loading/Loader";

const AllDoctors = () => {
  const { user } = useContext(AuthContext);

  const { data, isLoading, refetch } = useQuery(
    ["allAppointments", user.userEmail],
    async () => {
      const res = await axios.get(
        "https://doctors-hub-server.vercel.app/api/v1/doctors",
        {
          withCredentials: true,
        }
      );
      const result = res.data;
      return result;
    }
  );

  if (isLoading) {
    return <Loader />;
  }

  const handleDelete = (doc_email) => {
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
          .delete(
            `https://doctors-hub-server.vercel.app/api/v1/doctor/admin/delete/${doc_email}`,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            if (res.status === 200) {
              console.log(doc_email);
              Swal.fire(
                `${res.data.message}`,
                "Doctor has been deleted.",
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
    <div className="px-4">
      <div className="overflow-x-auto">
        <table className="table w-full md:min-w-[60%] lg:w-full">
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
            {data?.map((a, index) => (
              <tr className="relative text-center">
                <th className="sticky left-0">{index + 1}</th>
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
    </div>
  );
};

export default AllDoctors;