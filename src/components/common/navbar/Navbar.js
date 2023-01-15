import React, { useState } from "react";
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
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const padding = "mr-3.5";

  // let items = [
  //   {
  //     icon: <FontAwesomeIcon icon={faHome} className={padding} />,
  //     name: "Home",
  //     link: "/",
  //   },
  //   {
  //     icon: <FontAwesomeIcon icon={faBriefcaseMedical} className={padding} />,
  //     name: "Specialties",
  //     link: "/specialties",
  //   },
  //   {
  //     icon: <FontAwesomeIcon icon={faCalendarDays} className="mr-[16px]" />,
  //     name: "Appointments",
  //     link: "/appointment",
  //   },

  //   {
  //     icon: <FontAwesomeIcon icon={faUsers} size="xs" className={padding} />,
  //     name: "About Us",
  //     link: "/about",
  //   },
  //   {
  //     icon: <FontAwesomeIcon icon={faPhoneVolume} className={padding} />,
  //     name: "Contact",
  //     link: "/contact",
  //   },
  //   {
  //     icon: (
  //       <FontAwesomeIcon icon={faStethoscope} size="sm" className={padding} />
  //     ),
  //     name: "Add Doctor",
  //     link: "/add-doctor",
  //   },
  //   {
  //     icon: <FontAwesomeIcon icon={faTableColumns} className={padding} />,
  //     name: "Dashboard",
  //     link: "/dashboard",
  //   },

  //   {
  //     icon: <FontAwesomeIcon icon={faGear} className={padding} />,
  //     name: "Setting",
  //     link: "/setting",
  //   },
  //   {
  //     icon: <FontAwesomeIcon icon={faRightFromBracket} className={padding} />,
  //     name: "Login",
  //     link: "/login",
  //   },
  // ];

  const liClass =
    "mt-2 hover:border-l-2 py-1.5 pr-2 pl-7 hover:border-solid hover:border-solid hover:bg-[#722ed180] transition duration-300 ease-in-out";

  const menu = (
    <>
      <li className={liClass}>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} className={padding} />
          Home
        </Link>
      </li>
      <li className={liClass}>
        <FontAwesomeIcon icon={faBriefcaseMedical} className={padding} />
        Specialties
      </li>
      <li className={liClass}>
        <FontAwesomeIcon icon={faCalendarDays} className="mr-4" />
        Appointments
      </li>
      <li className={liClass}>
        <FontAwesomeIcon icon={faStethoscope} size="sm" className={padding} />
        Add Doctor
      </li>
      <li className={liClass}>
        <FontAwesomeIcon icon={faTableColumns} className={padding} />
        Dashboard
      </li>

      <li className={liClass}>
        <FontAwesomeIcon icon={faUsers} size="sm" className={padding} />
        About Us
      </li>

      <li className={liClass}>
        <FontAwesomeIcon icon={faPhoneVolume} className={padding} />
        Contact
      </li>

      <hr className="border-solid border-2 border-[#722ED1] mt-2 md:mt-7 md:ml-3 md:mb-4 md:mr-3" />

      <li className={liClass}>
        <Link to="/setting">
          <FontAwesomeIcon icon={faGear} className={padding} />
          Setting
        </Link>
      </li>

      <li className={liClass}>
        <Link to="/login">
          <FontAwesomeIcon icon={faRightFromBracket} className={padding} />
          Login
        </Link>
      </li>
    </>
  );

  return (
    <div className="md:w-[250px] mt-0 text-white bg-[#23075e] md:h-screen sticky top-0 z-50">
      {/* logo part */}

      <div className="flex bg-[#0a062c] md:bg-inherit pb-6 md:pb-0 pl-5 md:pl-0 md:mb-4 md:ml-[30px] mt-0 pt-6 z-50 relative">
        <img
          className="left-4 top-10 w-[44px] h-[44px]"
          src={brandLogo}
          alt="Brand Logo"
        />
        <span className="font-bold pl-2">
          <span className="text-[#D3ADF8]">DOCTOR'S</span> <br /> HUB
        </span>
      </div>

      {/* open close button for responsive */}

      <div
        className="text-3xl z-50 absolute right-6 top-8 cursor-pointer md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <FontAwesomeIcon icon={faXmark} size="lg" />
        ) : (
          <FontAwesomeIcon icon={faBars} size="lg" />
        )}
      </div>

      <hr className="border-solid border-2 border-[#722ED1] mt-0 md:mt-7 md:ml-3 mb-4 md:mr-3" z-60/>

      {/* menu items */}
      <ul
        className={`md:static bg-[#23075e] h-screen absolute transition-all duration-1000 ease-in-out z-10 ${
          open ? "top-[100px] w-full" : "top-[-1000px] left-[-1000px]"
        }`}
      >
        {menu}
      </ul>
    </div>
  );
};

export default Navbar;
