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
import Loader from '../common/Loading/Loader';

const Search = ({ newBooking }) => {
  const date = new Date();
  const formattedDate = format(date, 'PP');
  const [user] = useStorage();
  const navigate = useNavigate();
  const userInfo = JSON.parse(user);
  const [searchValue, setSearchValue] = useState('');
  const url = '/pending-appointments';
  const [getDoctors, setGetDoctors] = useState([]);
  const [result, setResult] = useState('');

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

  const {
    data: doctors,
    isLoading: docLoading,
    isError: docError,
  } = useQuery(['getAllDocs'], async () => {
    const res = await baseURL.get(`/search-doctors`);

    const result = res.data;
    setGetDoctors(result.doctors);
    return result;
  });

  // if (docLoading) {
  //   return <Loader />;
  // }

  const handleChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);

    // filtering
    const filteredData = getDoctors?.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setResult(filteredData);
  };

  const onSearch = (searchTerm) => {
    setSearchValue(searchTerm);

    console.log('hdfdf: ', searchTerm);

    baseURL
      .get(`doctor-single?doctor=${searchTerm}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full bg-[#23075e] mb-1">
      <div className="md:flex md:gap-1 md:justify-between lg:items-center">
        {/* Search */}
        <div className="w-full md:w-[70%] lg:w-[60%] px-3 py-4">
          <div className="flex justify-between items-center bg-white rounded-sm text-black">
            <input
              type="text"
              className="px-2 py-3 w-full border-none outline-0 focus:bg-slate-500 focus:text-white"
              placeholder="Search Doctor"
              value={searchValue}
              onChange={handleChange}
            />
            <button type="submit" onClick={() => onSearch(searchValue)}>
              <FontAwesomeIcon
                icon={faSearch}
                size="2xl"
                className="px-2 text-slate-700"
              />
            </button>
          </div>
        </div>

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
          <div className="w-full xl:w-[40%] hidden text-white md:flex md:justify-center md:gap-4 items-center ">
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

      {/* search result */}
      <div className="absolute ml-3 mr-3 px-2 bg-slate-600 w-[94%] md:w-[39%] lg:w-[48%] rounded-sm z-10">
        {result.length > 0 &&
          result
            .filter((item) => {
              const searchTerm = searchValue.toLowerCase();
              const res = item.name.toLowerCase();
              return (
                searchTerm && res.includes(searchTerm) && res !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item, i) => (
              <p
                onClick={() => onSearch(item.name)}
                className=" text-white cursor-pointer"
                key={i}
              >
                {item.name}
              </p>
            ))}
      </div>
    </div>
  );
};

export default Search;
