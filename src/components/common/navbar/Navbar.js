import React, { useState } from 'react';
import brandLogo from '../../../assets/icons/brand-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useStorage from '../../../hook/useStorage';
import baseURL from '../../../utils/baseURL';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user] = useStorage();
  const navigate = useNavigate();
  const location = useLocation();

  const padding = 'mr-3.5';

  const userInfo = JSON.parse(user);

  const logout = () => {
    baseURL
      .get('/logout', {
        withCredentials: true,
      })
      .then((res) => {
        localStorage.removeItem('user');
        navigate('/login');
      })
      .then((err) => console.log(err));
  };

  const liClass =
    'mt-2 hover:border-l-2 py-1.5 border-solid pr-2 pl-7 hover:bg-[#722ed180] transition duration-300 ease-in-out';

  const style = { backgroundColor: '#4a1a98' };

  const menu = (
    <>
      <li className={liClass} style={location.pathname === '/' ? style : {}}>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} className={padding} />
          Home
        </Link>
      </li>
      <li
        className={liClass}
        style={location.pathname === '/appointments' ? style : {}}
      >
        <Link to="/appointments">
          <FontAwesomeIcon icon={faBriefcaseMedical} className={padding} />
          Appointments
        </Link>
      </li>

      <li
        className={liClass}
        style={location.pathname === '/about' ? style : {}}
      >
        <Link to="/about">
          <FontAwesomeIcon icon={faUsers} size="sm" className={padding} />
          About Us
        </Link>
      </li>

      <li
        className={liClass}
        style={location.pathname === '/contact' ? style : {}}
      >
        <Link to="/contact">
          <FontAwesomeIcon icon={faPhoneVolume} className={padding} />
          Contact
        </Link>
      </li>

      <hr className="border-solid border-2 border-[#722ED1] mt-2 md:mt-4 lg:ml-3 lg:mb-4 lg:mr-3" />

      {userInfo?.userEmail && (
        <li
          className={liClass}
          style={location.pathname === '/dashboard' ? style : {}}
        >
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faTableColumns} className={padding} />
            Dashboard
          </Link>
        </li>
      )}

      {userInfo?.userEmail && userInfo.userRole === 'admin' && (
        <li
          className={liClass}
          style={location.pathname === '/addDoctor' ? style : {}}
        >
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

      <li
        className={liClass}
        style={location.pathname === '/setting' ? style : {}}
      >
        <Link to="/setting">
          <FontAwesomeIcon icon={faGear} className={padding} />
          Setting
        </Link>
      </li>

      {userInfo?.userEmail ? (
        <li
          className={liClass}
          style={location.pathname === '/logout' ? style : {}}
        >
          <Link to="/login" onClick={() => logout()}>
            <FontAwesomeIcon
              icon={faRightFromBracket}
              className={`${padding} rotate-180`}
            />
            Logout
          </Link>
        </li>
      ) : (
        <li
          className={liClass}
          style={location.pathname === '/login' ? style : {}}
        >
          <Link to="/login">
            <FontAwesomeIcon icon={faRightFromBracket} className={padding} />
            Login
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="w-full lg:w-[225px] max-h-screen text-white bg-[#23075e] z-50 sticky top-0">
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
            open ? 'top-[100px] w-full' : 'top-[-1000px] left-[-1000px]'
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
