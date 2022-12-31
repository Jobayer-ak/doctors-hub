import React, { createContext, useState } from "react";

// export const AuthContext = React.createContext({
//   user: { uName: null, uRole: null, uEmail: null },
// });

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const userEmail = localStorage.getItem("userEmail");
  const userName = localStorage.getItem("userName");
  const userRole = localStorage.getItem("userRole");
  const [user, setUser] = useState({ userEmail, userName, userRole });
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
