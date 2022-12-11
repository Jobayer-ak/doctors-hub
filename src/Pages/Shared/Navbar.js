import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const userToken = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (userToken) {
      setToken(userToken);
      console.log(userToken);
    }
  }, [userToken, token]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    setToken(null);
    console.log("Token: ", token);
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/Review">Review</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        {token ? (
          <button className="btn btn-ghost" onClick={logout}>
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );

  console.log("first");
  return (
    <div className="navbar bg-base-100 text-black container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">
          Doctors Appointment
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
