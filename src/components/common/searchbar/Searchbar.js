import React from "react";
import "./searchbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Searchbar = () => {
  return (
    <div id="searchbar" className="lg:flex md:flex sm:flex-none justify-between items-center">
      <div className="search flex justify-between items-center">
        <h2 className="text-xl font-bold">Home</h2>
        <div className="searchBox">
          <form className="flex items-center">
            <input type="text text-black" placeholder="Search" />
            <button type="submit" className="">
              <FontAwesomeIcon
                icon={faSearch}
                className="px-2 text-slate-600"
              />
            </button>
          </form>
        </div>
      </div>
      <div className="profile font-bold text-xl">Profile</div>
    </div>
  );
};

export default Searchbar;
