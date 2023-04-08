import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Search = () => {
  return (
    <div className="lg:flex lg:gap-12 lg:justify-between lg:items-center mt-7 mb-9 md:w-[100%] lg:w-full">
      <div className="search flex justify-between items-center bg-[#23075e] w-full rounded-md py-2.5 px-2.5">
        <h2 className="text-xl font-bold">Home</h2>

        <form className="flex items-center bg-white rounded-md text-black">
          <input
            type="text"
            className="px-1.5 py-1 w-full max-w-sm border-none outline-0 rounded-md"
            placeholder="Search"
          />
          <button type="submit">
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              className="px-2 text-slate-600"
            />
          </button>
        </form>
      </div>

      <div className="bg-[#4b1b97] hidden lg:block py-3 px-[15px] w-[350px] rounded-md font-bold text-xl mt-5 md:mt-0">
        Profile
      </div>
    </div>
  );
};

export default Search;
