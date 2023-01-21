import React from "react";
// import "./login.css";
import loginImage from "../../assets/images/loginImage .png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faCircleUser,
  faLock,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex mt-0 h-screen lg:h-auto lg:bg-[#722ed1] w-full">
      <div className="lg:block hidden">
        <img src={loginImage} alt="" className="px-4 lg:mt-10 h-[500px]" />
      </div>

      <div className="grow w-[350px] md:bg-[#23075e] lg:border-l-0 md:border-l-4 border-solid border-[#722ED1] px-7 pt-6 md:pt-12 pb-2.5 text-center">
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
              className="text-[#23075e] p-2.5 absolute"
              icon={faLock}
              size="lg"
            />
            <input
              class="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
              type="password"
              placeholder="Password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required!",
                },
                minLength: { value: 6, message: "At least 6 characters!" },
              })}
            />
          </div>
          <div className="my-8">
            <FontAwesomeIcon
              className="text-[#23075e] p-2.5 absolute"
              icon={faLock}
              size="lg"
            />
            <input
              class="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
              type="password"
              placeholder="Confirm Password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required!",
                },
                minLength: { value: 6, message: "At least 6 characters!" },
              })}
            />
          </div>
          <input
            class="text-center text-white font-bold bg-[#722ed1] p-2 w-full max-w-sm cursor-pointer rounded-sm"
            type="submit"
            value="Sign Up"
          />
        </form>

        <div className="my-4">
          <button className="text-white font-bold mt-4 btn-sm bg-[#722ed1] rounded-sm">
            <Link to="/login">Already Have An Account?</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
