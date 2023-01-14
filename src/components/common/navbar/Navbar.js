import React, { useState } from "react";
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
    "mt-2 hover:border-l-2 hover:border-solid hover:border-solid hover:bg-[#722ed180]";

  const menu = (
    <ul>
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

      <hr className="border-solid border-2 border-[#722ED1] mt-7 mb-4 mr-3" />

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
    </ul>
  );

  return (
    <div id="navbar" className="relative md:w-[200px] mt-0">
      {/* logo part */}
      <div className="flex md:mb-9 mb-4 ml-[30px] mt-0 pt-6">
        <img className="logo left-4 top-10" src={brandLogo} alt="Brand Logo" />
        <span className="font-bold pl-2">
          <span className="text-[#D3ADF8]">DOCTOR'S</span> <br /> HUB
        </span>
      </div>

      {/* open close button for responsive */}

      <div
        className="text-3xl absolute right-6 top-8 cursor-pointer md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <FontAwesomeIcon icon={faBars} size="lg" />
        ) : (
          <FontAwesomeIcon icon={faXmark} size="lg" />
        )}
      </div>

      <hr className="border-solid border-2 border-[#722ED1] mb-5 mr-3" />

      {/* menu items */}
      {menu}
      {/* <ul>
        {items.map((item, index) => {
          
          return (
            <li
              key={index}
              className="mt-2 hover:border-l-2 hover:border-solid hover:border-solid hover:bg-[#722ed180]"
            >
              <Link to={item.link}>
                {item.icon}
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul> */}
      {/* <div>{menu}</div> */}
    </div>

    // <div id="navbar" className="relative w-[290px]">
    //   <div className="brand">
    //     <div className="flex mb-9">
    //       <img className="logo" src={brandLogo} alt="Brand Logo" />
    //       <span className="font-bold pl-2">
    //         <span className="text-[#D3ADF8]">DOCTOR'S</span> <br /> HUB
    //       </span>
    //     </div>
    //   </div>
    //   <div className="">
    //     <hr className="border-solid border-2 border-[#722ED1] mb-5 mr-3" />

    //     <div>{menu}</div>

    //     <hr className="border-solid border-2 border-[#722ED1] mt-7 mb-4 mr-3" />

    //     <div className="user-status">
    //       <li>
    //         <Link to="/setting">
    //           <FontAwesomeIcon icon={faGear} className="mr-3.5" />
    //           Setting
    //         </Link>
    //       </li>
    //       <li className={liClass}>
    //         <Link to="/login">
    //           <FontAwesomeIcon icon={faRightFromBracket} className="mr-3.5" />
    //           Login
    //         </Link>
    //       </li>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;
