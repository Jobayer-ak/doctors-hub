import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import image1 from '../../assets/home/im1.jpg';
import profile from '../../assets/images/avatar.png';
import notification from '../../assets/home/notification.gif';

const Search = () => {
  const a = 3;
  return (
    <div className="w-full bg-[#23075e] mb-1">
      <div className="lg:flex lg:gap-1 lg:justify-between lg:items-center">
        {/* Search */}
        <div className="w-[60%] px-3 py-4 border-r-4 border-[#090629]">
          <form className="flex justify-between items-center bg-white rounded-sm text-black">
            <input
              type="text"
              className="px-2 py-4 w-full border-none outline-0 focus:bg-slate-500 focus:text-white"
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
        <div className="w-[40%] text-white px-4 py-0 flex justify-center gap-4 items-center">
          {a !== 3 ? (
            <img src={profile} alt="" className="rounded-full w-[15%]" />
          ) : (
            <img src={image1} alt="" className="rounded-full w-[15%]" />
          )}
          <div className="">
            {a !== 3 ? (
              <h3 className="font-bold text-[#f68685] text-xl">User Profile</h3>
            ) : (
              <div className='flex justify-between items-center gap-8'>
                <div className=''>
                  <h3 className="font-bold text-[#f68685] text-xl">
                    Md. Jobayer Akanda
                  </h3>
                  <p className="text-white italic">jobayer.ak@gmail.com</p>
                </div>
                <div>
                  <img src={notification} alt="" className="rounded-full" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
