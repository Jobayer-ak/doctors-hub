import React, { useState, createContext, useContext, useEffect } from 'react';

// create context for user
const UserContext = createContext();

// create custom hook to access user context
export const useUser = () => useContext(UserContext);

// define user provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // load user from localStorage on initial mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  console.log(user);

  // update user in localStorage on change
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

    
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
