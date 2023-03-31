import React from 'react';

const DataPagination = ({ setLimit }) => {
  const handleSelectChange = (event) => {
    setLimit(event.target.value);
  };

  return (
    <div className="w-full pt-4 bg-[#23075e] text-center flex justify-end">
      <form>
        <div className="">
          <label htmlFor="selectOption" className="">
            <span className="text-[#f68685] text-right mr-3">
              How many table data you want to see ?
            </span>
          </label>
          <select
            id="selectOption"
            name="selectOption"
            className="w-[100px] px-1 py-1 rounded-sm border-none outline-0"
            onChange={handleSelectChange}
          >
            <option value="">--Select--</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="60">60</option>
            <option value="80">80</option>
            <option value="100">100</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default DataPagination;
