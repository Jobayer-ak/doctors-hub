import React, { useEffect, useState } from 'react';
import ForUser from './ForUser';
import Admin from './admin/Admin';

const Dashboard = () => {
  const [role, setRole] = useState('');

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    setRole(userRole);
  }, []);

  return (
    <div className="ml-0 lg:ml-1 bg-[#23075e] lg:w-[82%] min-h-screen py-4">
      <h2 className="font-bold text-3xl text-white text-center">
        Welcome To Dashboard
      </h2>

      {/* dashboard buttons for normal user */}

      {role === 'admin' ? <Admin /> : <ForUser />}
    </div>
  );
};

export default Dashboard;
