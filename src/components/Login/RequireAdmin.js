import React, { useContext } from "react";
import useAdmin from "../../hook/useAdmin";
import AuthContext from "../../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const RequireAdmin = ({ children }) => {
  const { user } = useContext(AuthContext);

  const email = user.userEmail;
  const { admin, isLoading } = useAdmin(email);
  const location = useLocation();

  console.log(user);
  console.log(admin);

  if (isLoading) {
    console.log(isLoading)
    console.log(admin)
    return <h2 className="text-white">Loading...</h2>;
  }

  if (!email || !admin) {
    console.log("scope user: ", user);
    console.log("admin: ", admin);

    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    localStorage.removeItem("role");
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  return children;
};

export default RequireAdmin;
