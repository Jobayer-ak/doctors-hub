import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/bookings?patient=${user.userEmail}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.status);

        setAppointments(res.data);
      })
      .catch((err) => {
        if (err.response.status === 403 || err.response.status === 401) {
          localStorage.removeItem("userEmail");
          localStorage.removeItem("userName");
          localStorage.removeItem("userRole");

          navigate("/login");
        }
      });
  }, [user, navigate]);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatmentName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
