import React, { useState } from 'react';
import PaymentHistory from './PaymentHistory';
import PendingAppointments from './PendingAppointments';
import AppointmentHistory from './AppointmentsHistory';

const ForUser = () => {
  const [active, setActive] = useState('Pending Appointments');

  const dashboardBtn = [
    'Pending Appointments',
    'Appointments History',
    'My Reviews',
  ];

  return (
    <div className=" mt-4 bg-[#23075e] py-4 ">
      {/* dashboard buttons */}
      <div className="text-white px-4 my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-12">
        {dashboardBtn.map((b, index) => (
          <button
            className={
              active === b
                ? 'bg-[#4a1a98] w-full py-2 text-xl sm'
                : 'bg-[#381f6e] text-[#f68685]  hover:bg-[#413b74] hover:text-white transition-all w-full py-2 text-xl rounded-sm'
            }
            onClick={() => setActive(b)}
            key={index}
          >
            {b}
          </button>
        ))}
      </div>

      {/* button details */}
      <div className="min-h-screen">
        {active === 'Pending Appointments' && <PendingAppointments />}
        {active === 'Appointments History' && <AppointmentHistory />}
        {active === 'My Reviews' && <PaymentHistory />}
      </div>
    </div>
  );
};

export default ForUser;
