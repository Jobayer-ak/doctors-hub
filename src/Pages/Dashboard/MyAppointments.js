import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthProvider";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/booking?patient=${user.userEmail}`)
      .then((res) => setAppointments(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  return (
    <div>
      {/* <h1>My Appointments {appointments.length}</h1> */}
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
            {appointments.map((a) => (
              <tr>
                <th>1</th>
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
