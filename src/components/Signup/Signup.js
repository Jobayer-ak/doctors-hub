import React, { useState } from "react";
// import "./login.css";
import loginImage from "../../assets/images/loginImage .png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faCircleUser,
  faLock,
  faPhone,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [signupError, setSignUpError] = useState("");

  const onSubmit = async (data) => {
    console.log(data);
    await axios
      .post("http://localhost:5000/api/v1/signup", data, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res)
        if (res.data.status === 403) {
          setSignUpError(res.data.message);
        }
        reset();
      })
      .catch((err) => {
        console.log(err);
        // setLoginError(err.response.data.message);
      });
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
          {/* name field */}
          <div className="">
            <FontAwesomeIcon
              className="p-2.5 absolute text-[#23075e]"
              icon={faUserPlus}
              size="lg"
            />
            <input
              className="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
              type="name"
              placeholder="Your Full Name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required!",
                },
              })}
            />
            {errors.name && (
              <p className="text-white mt-2">{errors.name?.message}</p>
            )}
          </div>

          {/* emial field */}
          <div className="my-8">
            <FontAwesomeIcon
              className="p-2.5 absolute text-[#23075e]"
              icon={faEnvelope}
              size="lg"
            />
            <input
              className="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
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
            {errors.email && (
              <p className="text-white mt-2">{errors.email?.message}</p>
            )}
          </div>

          {/* password field */}
          <div className="my-8">
            <FontAwesomeIcon
              className="text-[#23075e] p-2.5 absolute"
              icon={faLock}
              size="lg"
            />
            <input
              className="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",

                minLength: { value: 6, message: "At least 6 characters!" },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-white mt-2">{errors.password?.message}</p>
            )}
          </div>

          {/* confirm password field */}
          <div className="my-8">
            <FontAwesomeIcon
              className="text-[#23075e] p-2.5 absolute"
              icon={faLock}
              size="lg"
            />
            <input
              className="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Password is required",

                minLength: { value: 6, message: "At least 6 characters!" },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Confirm password must have uppercase, number and special characters",
                },
              })}
            />

            {errors.confirmPassword && (
              <p className="text-white mt-2">
                {errors.confirmPassword?.message}
              </p>
            )}
          </div>

          {/* mobile number field */}
          <div className="my-8">
            <FontAwesomeIcon
              className="p-2.5 absolute text-[#23075e]"
              icon={faPhone}
              size="lg"
            />
            <input
              className="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
              type="text"
              placeholder="Mobile Number"
              {...register("mobile", {
                required: {
                  value: true,
                  message: "Mobile Number is required!",
                },
              })}
            />
            {errors.mobile && (
              <p className="text-white mt-2">{errors.mobile?.message}</p>
            )}
          </div>

          {/* gender field  */}
          <div className="my-8">
            <div className="text-white flex justify-center items-center gap-[50px] md:gap-[88px]">
              <div>
                <h3 className="font-bold">Gender</h3>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  placeholder="Gender"
                  value="Male"
                  className=""
                  {...register("gender", {
                    required: {
                      value: true,
                      message: "Gender is required!",
                    },
                  })}
                />
                <p>Male</p>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  value="Female"
                  {...register("gender", {
                    required: {
                      value: true,
                      message: "Gender is required!",
                    },
                  })}
                />
                <p>Female</p>
              </div>
            </div>
            {errors.gender && (
              <p className="text-white mt-2">{errors.gender?.message}</p>
            )}
          </div>

          {signupError && <p className="text-white mt-2">{signupError}</p>}

          <input
            className="text-center text-white font-bold bg-[#722ed1] p-2 w-full max-w-sm cursor-pointer rounded-sm"
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
