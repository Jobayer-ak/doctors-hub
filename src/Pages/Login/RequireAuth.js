import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem("token"));

    if (!user) {
        return <Navigate to="/login" state={{from: location}} replace />
    }

    return children;
};

export default RequireAuth;