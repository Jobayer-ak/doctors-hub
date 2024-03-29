import React, { useState } from 'react';
import AllUsers from './AllUsers';
import AllDoctors from './AllDoctors';
import AllReviews from './AllReviews';
import AllAppointments from './AllAppointments';
import AllPayments from './AllPayments';

const Admin = () => {
  const [active, setActive] = useState('Appointments');

  const dashboardBtn = [
    'Appointments',
    'Users',
    'Doctors',
    'Payments',
    'Reviews',
  ];

  return (
    <div className=" mt-4 bg-[#23075e] py-4">
      {/* dashboard buttons */}
      <div className="text-white px-4 my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6 lg:gap-12">
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
        {active === 'Appointments' && <AllAppointments />}
        {active === 'Users' && <AllUsers />}
        {active === 'Doctors' && <AllDoctors />}
        {active === 'Payments' && <AllPayments />}
        {active === 'Reviews' && <AllReviews />}
      </div>
    </div>
  );
};

export default Admin;
