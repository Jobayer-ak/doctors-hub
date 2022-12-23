import React from 'react';
import { useCookies } from 'react-cookie';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    const [cookies] = useCookies();
    const location = useLocation();

    const user = cookies;
    console.log(cookies)

    if (!user) {
        return <Navigate to="/login" state={{from: location}} replace />
    }

    return children;
};

export default RequireAuth;