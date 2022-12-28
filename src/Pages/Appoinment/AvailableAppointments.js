import axios from "axios";
import { format } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";
import { AuthContext } from "../../context/AuthProvider";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log(user.uEmail);
  }, [user]);

  useEffect(() => {
    // fetching slots from db
    axios
      .get("http://localhost:5000/api/v1/slots", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => {
        setServices(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h4 className="text-xl text-secondary text-center my-12">
        Available Appointments on {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
        />
      )}
    </div>
  );
};

export default AvailableAppointments;
