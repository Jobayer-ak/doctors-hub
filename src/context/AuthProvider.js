import React, { createContext, useState } from "react";

// export const AuthContext = React.createContext({
//   user: { uName: null, uRole: null, uEmail: null },
// });

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const userEmail = localStorage.getItem("userEmail");
  const userName = localStorage.getItem("userName");
  const userRole = localStorage.getItem("userRole");
  const selectedCity = localStorage.getItem("city");
  const [user, setUser] = useState({ userEmail, userName, userRole, selectedCity });
  const [isLoading, setIsLoading] = useState(true);
  return (
    <AuthContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
