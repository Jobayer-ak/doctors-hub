import React, { useState } from "react";
import brandLogo from "../../../assets/icons/brand-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBriefcaseMedical,
  faGear,
  faHome,
  faPhoneVolume,
  faRightFromBracket,
  faStethoscope,
  faTableColumns,
  faUsers,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import baseURL from "../../../utils/baseURL";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // const [laoding, setLoading] = useState(true);
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

  const navigate = useNavigate();

  const userEmail = localStorage.getItem("userEmail");
  const role = localStorage.getItem("userRole");

  // const [logout, { isLoading }] = useMutation(() =>
  //   baseURL.get("https://doctors-hub-server.vercel.app/api/v1/logout", {
  //     withCredentials: true,
  //   })
  // );

  // if (isLoading) {
  //   return <Loader />;
  // }


  const logout = async () => {
    await baseURL
      .post("/logout", {
        withCredentials: true,
      })
      .then((res) => console.log(res.data))
      .then((err) => console.log(err));

    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    localStorage.removeItem("userRole");

    const cookies = new Cookies();
    cookies.remove("myCookie");
    navigate("/login");
  };

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
        <Link to="/appointments">
          <FontAwesomeIcon icon={faBriefcaseMedical} className={padding} />
          Appointments
        </Link>
      </li>

      <li className={liClass}>
        <FontAwesomeIcon icon={faUsers} size="sm" className={padding} />
        About Us
      </li>

      <li className={liClass}>
        <Link to="/contact">
          <FontAwesomeIcon icon={faPhoneVolume} className={padding} />
          Contact
        </Link>
      </li>

      <hr className="border-solid border-2 border-[#722ED1] mt-2 md:mt-4 lg:ml-3 lg:mb-4 lg:mr-3" />

      {userEmail && (
        <li className={liClass}>
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faTableColumns} className={padding} />
            Dashboard
          </Link>
        </li>
      )}

      {userEmail && role === "admin" && (
        <li className={liClass}>
          <Link to="/addDoctor">
            <FontAwesomeIcon
              icon={faStethoscope}
              size="sm"
              className={padding}
            />
            Add Doctor
          </Link>
        </li>
      )}

      <li className={liClass}>
        <Link to="/setting">
          <FontAwesomeIcon icon={faGear} className={padding} />
          Setting
        </Link>
      </li>

      {userEmail ? (
        <li className={` bg-[#9258e5] border-l-0 ${liClass}`}>
          <Link to="/login" onClick={logout}>
            <FontAwesomeIcon
              icon={faRightFromBracket}
              className={`${padding} rotate-180`}
            />
            Logout
          </Link>
        </li>
      ) : (
        <li className={liClass}>
          <Link to="/login">
            <FontAwesomeIcon icon={faRightFromBracket} className={padding} />
            Login
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="md:w-full lg:w-[250px] max-h-screen text-white bg-[#23075e] z-50 sticky top-0">
      {/* logo part */}

      <div className="sticky top-0">
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
          className="text-3xl z-50 absolute right-6 top-8 cursor-pointer lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <FontAwesomeIcon icon={faXmark} size="lg" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="lg" />
          )}
        </div>

        <hr className="border-solid border-2 border-[#722ED1] mt-0 md:mt-7 lg:ml-3 lg:mb-4 lg:mr-3" />

        {/* menu items */}
        <ul
          className={`lg:static bg-[#23075e] pb-5 md:mt-1 lg:mt-0 absolute transition-all duration-1000 ease-in-out z-100 ${
            open ? "top-[100px] w-full" : "top-[-1000px] left-[-1000px]"
          }`}
          onClick={() => setOpen(!open)}
        >
          {menu}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

// logout  with react-query t
// logout should be get request with rest api
