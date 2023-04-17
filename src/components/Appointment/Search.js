import { faCircleXmark, faSearch } from '@fortawesome/free-solid-svg-icons';
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
import "./search.css"

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
  const [showModal, setShowModal] = useState(false);
  const [info, setInfo] = useState('');

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
  };

  const handleSearch = (searchValue) => {
    baseURL
      .get(`doctor-single?doctor=${searchValue}`)
      .then((res) => {
        console.log('inside modal: ', res.data.doctor);

        setInfo(res.data.doctor);
        setShowModal(true);
      })
      .catch((err) => console.log(err));
  };

  // search result modal
  // const onOpenModal = () => {
  //   console.log('oepning modal');
  //   setShowModal(true);
  // };

  const onCloseModal = () => {
    setShowModal(false);
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

            <button
              type="submit"
              disabled={!searchValue}
              onClick={() => handleSearch(searchValue)}
            >
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
          <div className="hidden md:flex justify-center items-center bg-[#23075e] mt-1 w-[40%]">
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
              <img src={profile} alt="" className="rounded-full w-[15%]" />
            ) : (
              <img
                src={userInfo?.imageURL}
                alt=""
                className="rounded-full w-[15%]"
              />
            )}
            <div className="">
              {isError === true ? (
                <div>
                  <h3 className="font-bold text-[#f68685] lg:text-xl">
                    User Profile
                  </h3>
                </div>
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

      {/* search result modal */}

      {showModal && (
        <div className="fixed top-[50px] left-[20%] inset-0 z-10 rounded-sm scrollable-div" >
          <div className="flex items-center justify-center min-h-screen pt-12 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 transition-opacity bg-black bg-opacity-40"
              aria-hidden="true"
            ></div>

            {/* Modal dialog */}
          
            <div className="inline-block align-bottom bg-[#381f6e] rounded-sm text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ">
              <div className="flex flex-row-reverse">
                <div className="p-2 ">
                  <button type="button" onClick={onCloseModal}>
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      size="2xl"
                      className="text-white"
                    />
                  </button>
                </div>
                <div className="sm:flex sm:items-start p-4">
                  <img
                    src={info.imageURL}
                    className="rounded-full w-[30%]"
                    alt=""
                  />

                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-xl leading-6 font-medium text-[#f39896]">
                      {info.name}
                    </h3>
                    <p className="italic text-white">{info.speciality}</p>
                    <hr className="border-solid border-1 border-[#722ED1] my-2 " />
                    <div className="mt-2 text-white">
                      <p className="text-[14px]">{info.working_hospital}</p>
                      <p className="text-[14px]">Branch: {info.branch}</p>
                      <p className="text-[20px] py-2">
                        Fee: <span className="">${info.fee}</span>
                      </p>
                    </div>
                    <div className="flex justify-center mt-4">
                      <button
                        type="button"
                        className="text-slate-700 font-bold bg-[#f39896] rounded-sm px-2 py-1"
                        onClick={onCloseModal}
                      >
                        Get Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <SearchResult />
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
