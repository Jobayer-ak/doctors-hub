import React, { useState } from "react";
import axios from "axios";
import { format } from "date-fns";

import BookingModal from "./BookingModal";
import Service from "./Service";

import { useQuery } from "react-query";

const AvailableAppointments = ({ date }) => {
  const [treatment, setTreatment] = useState(null);

  const formatedDate = format(date, "PP");

  const { data: services, isLoading, refetch } = useQuery(
    ["available", formatedDate],
    async () => {
      const res = await axios.get(
        `http://localhost:5000/api/v1/slots?date=${formatedDate}`,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const result = res.data;
      return result;
    }
  );

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <div>
      <h4 className="text-xl text-secondary text-center my-12">
        Available Appointments on {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
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
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableAppointments;
