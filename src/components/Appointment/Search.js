import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import profile from '../../assets/images/avatar.png';
import notification from '../../assets/home/notification.gif';
import { format } from 'date-fns';
import { useQuery } from 'react-query';
import baseURL from '../../utils/baseURL';
import useStorage from '../../hook/useStorage';
import { useNavigate } from 'react-router-dom';
import { Dna } from 'react-loader-spinner';
import SearchResult from './SearchResult';


const Search = ({ newBooking }) => {
  const date = new Date();
  const formattedDate = format(date, 'PP');
  const [user] = useStorage();
  const navigate = useNavigate();
  const userInfo = JSON.parse(user);
  const [searchValue, setSearchValue] = useState("");
  const url = '/pending-appointments';

  const { data, isLoading, isError } = useQuery(
    ['profileInfo', newBooking],
    async () => {
      const res = await baseURL.get(
        `${url}?patient=${userInfo.email}&&date=${formattedDate}`,
        {
          withCredentials: true,
        }
      );

      const result = res.data;
      return result;
    }
  );

  const { data: doc, isLoading: docLoading, isError: docError } = useQuery(
    ['getAllDocs'],
    async () => {
      const res = await baseURL.get(
        `${url}?patient=${userInfo.email}&&date=${formattedDate}`,
        {
          withCredentials: true,
        }
      );

      const result = res.data;
      return result;
    }
  );


  const handleChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  }

  return (
    <div className="w-full bg-[#23075e] mb-1">
      <div className="md:flex md:gap-1 md:justify-between lg:items-center">
        {/* Search */}
        <div className="w-full md:w-[55%] lg:w-[60%] px-3 py-4">
          <form className="flex justify-between items-center bg-white rounded-sm text-black">
            <input
              type="text"
              className="px-2 py-3 w-full border-none outline-0 focus:bg-slate-500 focus:text-white"
              placeholder="Search Doctor"
              value={searchValue}
              onChange={handleChange}
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

        <div>
          {/* <p className='text-white text-xl'>{searchValue}</p> */}
        </div>
        {/* search result shown */}
        {/* <SearchResult /> */}
        
        {/* user profile */}
        {isLoading ? (
          <div className="flex justify-center items-center bg-[#23075e] mt-1 w-[40%]">
            <Dna
              visible={true}
              height="60"
              width="60"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        ) : (
          <div className="w-full lg:w-[40%] hidden text-white md:flex md:justify-center md:gap-4 items-center ">
            {isError === true ? (
              <div>
                <img src={profile} alt="" className="rounded-full w-[15%]" />
              </div>
            ) : (
              <img
                src={userInfo?.imageURL}
                alt=""
                className="rounded-full w-[15%]"
              />
            )}
            <div className="">
              {isError === true ? (
                <h3 className="font-bold text-[#f68685] lg:text-xl">
                  User Profile
                </h3>
              ) : (
                <div className="flex justify-between items-center gap-8">
                  <div className="">
                    <h3 className="font-bold text-[#f68685] lg:text-xl">
                      Md. Jobayer Akanda
                    </h3>
                    <p className="text-white italic">{userInfo?.email}</p>
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
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
