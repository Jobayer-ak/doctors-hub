import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointments from "./AvailableAppointments";
import { useCookies } from "react-cookie";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  const [cookies] = useCookies();
  console.log(cookies);

  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate} />
      <AvailableAppointments date={date} />
    </div>
  );
};

export default Appointment;
