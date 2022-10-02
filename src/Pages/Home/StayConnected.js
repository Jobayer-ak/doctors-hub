import React from "react";
import appoinment from "../../assets/images/appointment.png";
import Button from "../Shared/Button";

const StayConnected = () => {
  return (
    <section
      style={{
        background: `url(${appoinment})`,
        backgroundSize: "cover",
      }}
      className="text-center mt-12 p-12">
      <h2 className="text-primary text-2xl">Contact Us</h2>
      <h2 className="text-4xl text-white font-bold my-5">
        Stay Connected With Us
      </h2>
      <div className="w-full max-w-lg mx-auto mt-10">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              id="username"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
              id=""
              type="text"
              placeholder="Subject"
            />
          </div>
          <div className="mb-6">
            <textarea
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight "
              id=""
              type="text"
              placeholder="Subject"
            />
          </div>
          <div className="flex items-center justify-center">
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default StayConnected;
