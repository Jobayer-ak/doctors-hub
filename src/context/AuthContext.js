import React, { createContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import baseURL from '../utils/baseURL';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [loginError, setLoginError] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || '/';

  const login = (email, password) => {
    setLoading(true);
    baseURL
      .post(
        `/login`,
        { email: email, password: password },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setLoading(false);
        console.log('res data: ', res.data.others);

        const user = {
          name: res.data.others.name,
          email: res.data.others.email,
          role: res.data.others.role,
          imageURL: res.data.others.imageURL,
        };

        localStorage.setItem('user', JSON.stringify(user));
        setLoginError(null);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.response.data.error);
        setLoading(false);
        setLoginError(error.response.data.error);
      });
  };

  const logout = () => {
    baseURL
      .get('/logout', {
        withCredentials: true,
      })
      .then((res) => localStorage.removeItem('user'))
      .then((err) => console.log(err));
  };

  return (
    <AuthContext.Provider value={{ login, logout, loading, loginError }}>
      {children}
    </AuthContext.Provider>
  );
};
