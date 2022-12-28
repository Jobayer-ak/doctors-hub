import React from "react";

export const AuthContext = React.createContext({
  user: { uName: null, uRole: null, uEmail: null },
});
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState({});
//   return (
//     <AuthProvider.Provider value={{ user, setUser }}>
//       {children}
//     </AuthProvider.Provider>
//   );
// };

export default AuthContext;
