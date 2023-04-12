import React from 'react';
import ForUser from './ForUser';
import Admin from './admin/Admin';
import useStorage from '../../hook/useStorage';

const Dashboard = () => {
  const [user] = useStorage();

  const userInfo = JSON.parse(user);

  return (
    <div className="ml-0 lg:ml-1 bg-[#23075e] lg:w-[83%] min-h-screen py-4">
      <h2 className="font-bold text-3xl text-[#f68685] text-center">
        Welcome To Dashboard
      </h2>

      {/* dashboard buttons for normal user */}

      {userInfo?.role === 'admin' ? <Admin /> : <ForUser />}
    </div>
  );
};

export default Dashboard;
