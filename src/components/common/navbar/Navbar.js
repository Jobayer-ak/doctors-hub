import React from "react";
import "./navbar.css";
import brandLogo from "../../../assets/icons/brand-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBriefcaseMedical,
  faCalendarDays,
  faGear,
  faHome,
  faPhoneVolume,
  faRightFromBracket,
  faStethoscope,
  faTableColumns,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menu = (
    <ul className="menuItems">
      <li>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} className="mr-3.5" />
          Home
        </Link>
      </li>
      <li className="mt-2.5">
        <FontAwesomeIcon icon={faBriefcaseMedical} className="mr-3.5" />
        Specialties
      </li>
      <li className="my-2.5">
        <FontAwesomeIcon icon={faCalendarDays} className="mr-4" />
        Appointments
      </li>
      <li>
        <FontAwesomeIcon icon={faStethoscope} size="sm" className="mr-3.5" />
        Add Doctor
      </li>
      <li className="mt-2.5">
        <FontAwesomeIcon icon={faTableColumns} className="mr-3.5" />
        Dashboard
      </li>

      <li className="my-2.5">
        <FontAwesomeIcon icon={faUsers} size="sm" className="mr-3.5" />
        About Us
      </li>
      <li>
        <FontAwesomeIcon icon={faPhoneVolume} className="mr-3.5" />
        Contact
      </li>
    </ul>
  );

  //   const items = ["Home", "Appointments", "Dashboard", "About Us", "Contact"];
  return (
    <div id="navbar" className="relative">
      <span className="absolute text-white text-3xl top-1 right-1 cursor-pointer">
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </span>
      <div className="brand">
        <div className="flex mb-9">
          <img className="logo" src={brandLogo} alt="Brand Logo" />
          <span className="font-bold pl-2">
            <span className="text-[#D3ADF8]">DOCTOR'S</span> <br /> HUB
          </span>
        </div>
      </div>
      <div className="">
        <hr className="border-solid border-2 border-[#722ED1] mb-5 mr-3" />

        <div>{menu}</div>

        <hr className="border-solid border-2 border-[#722ED1] mt-7 mb-4 mr-3" />

        <div className="user-status">
          <li>
            <Link to="/setting">
              <FontAwesomeIcon icon={faGear} className="mr-3.5" />
              Setting
            </Link>
          </li>
          <li className="my-2.5">
            <Link to="/login">
              <FontAwesomeIcon icon={faRightFromBracket} className="mr-3.5" />
              Login
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
