import React from "react";
import "./navbar.css";
import brandLogo from "../../../assets/icons/brand-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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

const Navbar = () => {
  const menu = (
    <ul className="menuItems">
      <li>
        <FontAwesomeIcon icon={faHome} className="mr-3.5" />
        Home
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
    <div id="navbar">
      <div className="brand">
        <div className="flex mb-9">
          <img className="logo" src={brandLogo} alt="Brand Logo" />
          <span className="font-bold pl-2">
            <span className="text-[#D3ADF8]">DOCTOR'S</span> HUB
          </span>
        </div>
      </div>
      <hr className="border-solid border-2 border-[#722ED1] mb-5 mr-3" />

      <div>{menu}</div>

      <hr className="border-solid border-2 border-[#722ED1] mt-7 mb-4 mr-3" />

      <div className="user-status">
        <li>
          <FontAwesomeIcon icon={faGear} className="mr-3.5" />
          Setting
        </li>
        <li className="my-2.5">
          <FontAwesomeIcon icon={faRightFromBracket} className="mr-3.5" />
          Login
        </li>
      </div>
    </div>
  );
};

export default Navbar;
