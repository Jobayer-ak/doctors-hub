import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import useStorage from '../../hook/useStorage';

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const [user] = useStorage();

  const userInfo = JSON.parse(user);

  if (!userInfo?.email) {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }

  return children;
};

export default RequireAuth;
