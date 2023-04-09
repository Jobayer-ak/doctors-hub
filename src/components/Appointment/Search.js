import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import image1 from '../../assets/home/im1.jpg';
import profile from '../../assets/images/avatar.png';
import notification from '../../assets/home/notification.gif';
import { format } from 'date-fns';
import { useQuery } from 'react-query';
import baseURL from '../../utils/baseURL';
import useStorage from '../../hook/useStorage';
import { useNavigate } from 'react-router-dom';

const Search = ({ newBooking }) => {
  const date = new Date();
  const formattedDate = format(date, 'PP');
  const [user] = useStorage();
  const navigate = useNavigate();
  const userInfo = JSON.parse(user);

  console.log('user: ', userInfo);

  console.log("new booking boolean: ", newBooking);

  const url = '/pending-appointments';

  const { data, isLoading, refetch } = useQuery(
    ['profileInfo', newBooking],
    async () => {
      const res = await baseURL.get(
        `${url}?patient=${userInfo.userEmail}&&date=${formattedDate}`,
        {
          withCredentials: true,
        }
      );

      console.log('inside: ', res.data);
      const result = res.data;
      return result;
    }
  );

  if (isLoading) {
    return <h2 className="text-xl font-bold text-whtie">Loading....</h2>;
  }

  console.log('Fetch data: ', data.pendingAppointments);
  const a = 3;
  return (
    <div className="w-full bg-[#23075e] mb-1">
      <div className="md:flex md:gap-1 md:justify-between lg:items-center">
        {/* Search */}
        <div className="w-full md:w-[60%] px-3 py-4">
          <form className="flex justify-between items-center bg-white rounded-sm text-black">
            <input
              type="text"
              className="px-2 py-3 w-full border-none outline-0 focus:bg-slate-500 focus:text-white"
              placeholder="Search Doctor"
            />
            <button type="submit" className="">
              <FontAwesomeIcon
                icon={faSearch}
                size="2xl"
                className="px-2 text-slate-700"
              />
            </button>
          </form>
        </div>

        {/* user profile */}
        <div className="w-[40%] hidden text-white md:flex md:justify-center md:gap-4 items-center ">
          {a !== 3 ? (
            <img src={profile} alt="" className="rounded-full w-[15%]" />
          ) : (
            <img src={image1} alt="" className="rounded-full w-[15%]" />
          )}
          <div className="">
            {a !== 3 ? (
              <h3 className="font-bold text-[#f68685] lg:text-xl">
                User Profile
              </h3>
            ) : (
              <div className="flex justify-between items-center gap-8">
                <div className="">
                  <h3 className="font-bold text-[#f68685] lg:text-xl">
                    Md. Jobayer Akanda
                  </h3>
                  <p className="text-white italic">jobayer.ak@gmail.com</p>
                </div>

                <div className="indicator">
                  <span className="indicator-item badge badge-secondary">
                    {data.pendingAppointments}
                  </span>
                  <button
                    className="tooltip tooltip-bottom"
                    data-tip="Appointments"
                    onClick={() => navigate('/dashboard')}
                  >
                    <img src={notification} alt="" className="rounded-full" />
                  </button>
                </div>

                {/* <div><img src={notification} alt="" className="rounded-full" /></div> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
