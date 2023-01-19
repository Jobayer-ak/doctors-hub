import React from "react";
// import "./login.css";
// import loginImage from "../../assets/images/loginImage .png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faAddressBook,
  faCircleUser,
  faLocation,
  faLock,
  faPhone,
  faUserPlus,
  faVenus,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Setting = () => {
  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full h-screen lg:h-auto my-0 bg-[#23075e] lg:border-l-4 md:border-l-4 border-solid border-[#722ED1] z-10">
      <div className="px-7 pt-6 md:pt-12 pb-2.5 text-center">
        <h2 className="text-[#722ed1] font-bold text-6xl">
          <FontAwesomeIcon icon={faCircleUser} size="2xl" />
        </h2>

        <form
          className="mt-12 md:bg-[#23075e] text-center relative"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="">
            <FontAwesomeIcon
              className="p-2.5 absolute text-[#23075e]"
              icon={faUserPlus}
              size="lg"
            />
            <input
              class="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
              type="email"
              placeholder="Your Full Name"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required!",
                },

                pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid email!",
              })}
            />
          </div>
          <div className="my-8">
            <FontAwesomeIcon
              className="p-2.5 absolute text-[#23075e]"
              icon={faEnvelope}
              size="lg"
            />
            <input
              class="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
              type="email"
              placeholder="Enter Email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required!",
                },

                pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid email!",
              })}
            />
          </div>

          <div className="my-8">
            <FontAwesomeIcon
              className="p-2.5 absolute text-[#23075e]"
              icon={faPhone}
              size="lg"
            />
            <input
              class="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
              type="email"
              placeholder="Your Mobile Number"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required!",
                },

                pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid email!",
              })}
            />
          </div>

          <div className="my-8">
            <FontAwesomeIcon
              className="p-2.5 absolute text-[#23075e]"
              icon={faMapMarkerAlt}
              size="lg"
            />
            <input
              class="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
              type="email"
              placeholder="Your Address"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required!",
                },

                pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid email!",
              })}
            />
          </div>

          <div className="my-8">
            <FontAwesomeIcon
              className="p-2.5 absolute text-[#23075e]"
              icon={faVenus}
              size="lg"
            />
            <input
              class="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
              type="email"
              placeholder="Gender"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required!",
                },

                pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid email!",
              })}
            />
          </div>

          <input
            class="text-center text-white font-bold bg-[#722ed1] p-2 w-full max-w-sm cursor-pointer rounded-sm"
            type="submit"
            value="Update Profile"
          />
        </form>
      </div>
    </div>
  );
};

export default Setting;
