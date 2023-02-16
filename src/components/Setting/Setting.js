import React, { useContext, useEffect, useRef, useState } from "react";
// import "./login.css";
// import loginImage from "../../assets/images/loginImage .png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faCircleUser,
  faPhone,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import axios from "axios";
import AuthContext from "../../context/AuthProvider";
import { useQuery } from "react-query";
import { format } from "date-fns";
// import { Link } from "react-router-dom";

const Setting = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const initialInputValues = {
    name: "",
    email: "",
    mobile: "",
  };

  const [values, setValues] = useState(initialInputValues);

  const { data, isLoading, refetch } = useQuery(
    ["info", user.userEmail],
    async () => {
      const res = await axios.get(
        `http://localhost:5000/api/v1/setting/${user.userEmail}`,
        {
          withCredentials: true,
        }
      );
      const result = res.data;
      return result;
    }
  );

  if (isLoading) {
    return <h2 className="text-xl font-black">Loading...</h2>;
  }

  const createdDate = new Date(data.user.createdAt);

  const { email, gender, mobile, name } = data.user;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full min-h-screen lg:h-auto my-0 bg-[#23075e] lg:border-l-4 lg:border-l-4 border-solid border-[#722ED1] z-10 lg:pb-5 pt-6 px-10">
      <div className="bg-gradient-to-r from-slate-800 to-indigo-800 to-indigo-600 p-10 rounded-sm">
        <h2 className="text-white font-bold text-2xl text-center mb-6">
          My Account Information
        </h2>

        <p className="text-white font-bold my-3">
          Name: <span className="ml-4 text-[#a8a29e]">{name}</span>
        </p>
        <p className="text-white font-bold my-3">
          Email: <span className="ml-4 text-[#a8a29e]">{email}</span>
        </p>
        <p className="text-white font-bold my-3">
          Mobile: <span className="ml-4 text-[#a8a29e]">{mobile}</span>
        </p>
        <p className="text-white font-bold my-3">
          Gender: <span className="ml-4 text-[#a8a29e]">{gender}</span>
        </p>
        <p className="text-white font-bold my-3">Address: </p>
        <p className="text-white font-bold my-3">
          As user since:{" "}
          <span className="ml-4 text-[#a8a29e]">
            {format(createdDate, "PP")}
          </span>{" "}
        </p>

        <div className="text-center">
          <label htmlFor="my-modal-3" className="btn">
            update profile
          </label>
        </div>
      </div>

      <div className="text-center">
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="px-8  py-4 rounded-md relative bg-[#381f6e]">
            <div className="">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-3 top-2"
              >
                ✕
              </label>

              <div className="px-7 pb-2.5 text-center">
                <form
                  className="mt-12 text-center relative"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="">
                    <FontAwesomeIcon
                      className="p-2.5 absolute text-[#23075e]"
                      icon={faUserPlus}
                      size="lg"
                    />
                    <input
                      className="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                      type="text"
                      placeholder={name}
                      value={values.name}
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Name is required!",
                        },
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
                      className="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                      type="text"
                      value={values.email}
                      // // readOnly
                      // {...register("email", {
                      //   required: {
                      //     value: true,
                      //     message: "Email is required!",
                      //   },
                      //   pattern: {
                      //     value: /[a - z0 - 9] + @[a - z] +\.[a-z]{2, 3}/,
                      //     message: "Provide a valid email!",
                      //   },
                      // })}
                    />
                  </div>

                  <div className="my-8">
                    <FontAwesomeIcon
                      className="p-2.5 absolute text-[#23075e]"
                      icon={faPhone}
                      size="lg"
                    />
                    <input
                      className="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                      type="text"
                      placeholder={mobile}
                      value={values.mobile}
                      {...register("mobile", {
                        required: {
                          value: true,
                          message: "Mobile number is required!",
                        },
                      })}
                    />
                  </div>

                  <div className="text-white mb-8 flex justify-center items-center gap-[50px] md:gap-[75px]">
                    <div>
                      <h3 className="font-bold">Gender</h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        placeholder="Gender"
                        value="Male"
                        className=""
                        checked={gender}
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

                  <input
                    className="text-center text-white font-bold bg-[#722ed1] hover:bg-[#9258e5] transition-all p-2 w-full max-w-sm cursor-pointer rounded-sm"
                    type="submit"
                    value="Save"
                  />
                </form>
              </div>
            </div>
            {/* booking form  */}
          </div>
        </div>
      </div>

      {/* <div className={open === true?  "px-7 md:pt-12 pb-2.5 text-center block": "hidden"}>
        <h2 className="text-[#722ed1] font-bold text-3xl md:text-4xl bg-white inline-block py-3 px-6 rounded-full">
          <span className="mr-4">Update Profile</span>
          <FontAwesomeIcon icon={faCircleUser} size="xl" />
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
              className="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
              type="text"
              placeholder={name}
              
              value={values.name}
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required!",
                },
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
              className="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
              type="text"
              value={values.email}
              // readOnly
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required!",
                },
                pattern: {
                  value: /[a - z0 - 9] + @[a - z] +\.[a-z]{2, 3}/,
                  message: "Provide a valid email!",
                },
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
              className="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
              type="text"
              placeholder={mobile}
              value={values.mobile}
              {...register("mobile", {
                required: {
                  value: true,
                  message: "Mobile number is required!",
                },
              })}
            />
          </div>

          
          <div className="text-white mb-8 flex justify-center items-center gap-[50px] md:gap-[75px]">
            <div>
              <h3 className="font-bold">Gender</h3>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="radio"
                placeholder="Gender"
                value="Male"
                className=""
                checked={gender}
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

          <input
            className="text-center text-white font-bold bg-[#722ed1] hover:bg-[#9258e5] transition-all p-2 w-full max-w-sm cursor-pointer rounded-sm"
            type="submit"
            value="Save"
          />
        </form>
      </div> */}
    </div>
  );
};

export default Setting;
