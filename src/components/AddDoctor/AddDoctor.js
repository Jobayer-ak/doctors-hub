import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faIdCard } from "@fortawesome/free-regular-svg-icons";
import {
  faHospital,
  faBriefcaseMedical,
  faDroplet,
  faGraduationCap,
  faMapMarkerAlt,
  faPhone,
  faUserDoctor,
  faUserPlus,
  faBookSkull,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const [loginError, setLoginError] = useState("");

  const onSubmit = async (data) => {
    console.log(data);

    await axios
      .post("http://localhost:5000/api/v1/admin/addDoctor", data, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res)
        if (res.data.status === 403) {
          setLoginError(res.data.message);
        }
        reset();
      })
      .catch((err) => {
        console.log(err);
        // setLoginError(err.response.data.message);
      });
  };

  const handleCheckbox = () => {
    
  }

  return (
    <div className="w-full md:h-screen lg:h-auto bg-[#23075e] lg:border-l-4 md:border-l-4 border-solid border-[#722ED1] z-10 lg:pb-5">
      <div className="pt-3 md:pt-6 pb-2.5 text-center mx-4 lg:mx-6">
        <h2 className="text-[#722ed1] font-bold text-4xl bg-white inline-block py-3 px-6 rounded-full">
          <span className="mr-4">Add Doctor</span>
          <FontAwesomeIcon icon={faUserDoctor} size="md" />
        </h2>

        <form
          className="mt-8 md:bg-[#23075e] text-center relative"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="lg:flex lg:justify-center gap-10 p-4">
            {/* First part */}
            <div>
              <div className="">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faUserPlus}
                  size="lg"
                />
                <input
                  className="text-center p-2 w-full md:w-96 lg:w-[350px] focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="text"
                  placeholder="Doctor's Full Name"
                  {...register("name", {
                    required: "Name is required!",
                    maxLength: {
                      value: 35,
                      message: "Too Large! Not more than 35 characters.",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-white mt-2">{errors.name?.message}</p>
                )}
              </div>

              <div className="my-8">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faEnvelope}
                  size="lg"
                />
                <input
                  className="text-center p-2 w-full md:w-96 lg:w-[350px] focus:bg-[#722ed1] border-none outline-0 rounded-sm"
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
                  <p className="text-white mt-2">{errors.eamil?.message}</p>
                )}
              </div>

              <div className="my-8">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faPhone}
                  size="lg"
                />
                <input
                  className="text-center p-2 w-full md:w-96 lg:w-[350px] focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="text"
                  placeholder="Mobile Number"
                  {...register("contact_number", {
                    required: {
                      value: true,
                      message: "Mobile Number is required!",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-white mt-2">
                    {errors.contact_number?.message}
                  </p>
                )}
              </div>

              <div className="mb-8">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faMapMarkerAlt}
                  size="lg"
                />
                <input
                  className="text-center p-2 w-full md:w-96 lg:w-[350px] focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="text"
                  placeholder="Address"
                  {...register("address", {
                    required: {
                      value: true,
                      message: "Address is required!",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-white mt-2">{errors.address?.message}</p>
                )}
              </div>

              <div className="mb-8">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faIdCard}
                  size="lg"
                />
                <input
                  className="text-center p-2 w-full md:w-96 lg:w-[350px] focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="text"
                  placeholder="NID number"
                  {...register("nid", {
                    required: {
                      value: true,
                      message: "NID number is required!",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-white mt-2">{errors.address?.message}</p>
                )}
              </div>

              <div>
                <div className="text-white flex justify-center items-center gap-[50px] md:gap-[75px]">
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
                {errors.email && (
                  <p className="text-white mt-2">{errors.gender?.message}</p>
                )}
              </div>
            </div>

            {/* First part end */}

            {/* second part */}
            <div>
              <div className="mt-8 lg:mt-0 mb-8">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faHospital}
                  size="lg"
                />
                <input
                  className="text-center p-2 w-full md:w-96 lg:w-[350px] focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="text"
                  placeholder="Working Hospital Name"
                  {...register("working_hospital", {
                    required: "Hospital name is required!",
                    maxLength: {
                      value: 35,
                      message: "Too Large! Not more than 35 characters.",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-white mt-2">
                    {errors.working_hospital?.message}
                  </p>
                )}
              </div>

              <div className="">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faBriefcaseMedical}
                  size="lg"
                />
                <input
                  className="text-center p-2 w-full md:w-96 lg:w-[350px] focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="text"
                  placeholder="Treatment Field"
                  {...register("speciality", {
                    required: "Treatment Area name is required!",
                    maxLength: {
                      value: 35,
                      message: "Too Large! Not more than 35 characters.",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-white mt-2">
                    {errors.speciality?.message}
                  </p>
                )}
              </div>

              <div className="mt-8 mb-0">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faBookSkull}
                  size="lg"
                />
                <input
                  className="text-center p-2 w-full md:w-96 lg:w-[350px] focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="text"
                  placeholder="Treatment Department"
                  {...register("department", {
                    required: "Department name is required!",
                    maxLength: {
                      value: 35,
                      message: "Too Large! Not more than 35 characters.",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-white mt-2">
                    {errors.studied_medical_college?.message}
                  </p>
                )}
              </div>

              <div className="mt-8 mb-0">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faGraduationCap}
                  size="lg"
                />
                <input
                  className="text-center p-2 w-full md:w-96 lg:w-[350px] focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="text"
                  placeholder="Higher Degree with info"
                  {...register("higher_degree", {
                    required: "Higher Degree and University Name is required!",
                    maxLength: {
                      value: 60,
                      message: "Too Large! Not more than 35 characters.",
                    },
                  })}
                />
                <p className="text-white mt-2">
                  {errors.higher_degree?.message}
                </p>
              </div>

              <div className="mt-8 mb-0">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faCodeBranch}
                  size="lg"
                />

                <select
                  placeholder="Branch"
                  {...register("branch", {
                    required: "Doctor's Hub Branch Name Is Required!",
                    maxLength: {
                      value: 60,
                      message: "Too Large! Not more than 35 characters.",
                    },
                  })}
                  className="w-full md:w-96 lg:w-[350px] pl-10 text-center font-bold p-2 focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                >
                  <option value="Mymensingh">Mymensingh</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chattogram">Chattogram</option>
                  <option value="Barishal">Barishal</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Bogra">Bogra</option>
                </select>
              </div>

              <div className="mt-8 mb-0">
                <FontAwesomeIcon
                  className="pt-2 pl-3.5 absolute text-red-700"
                  icon={faDroplet}
                  size="lg"
                />

                <select
                  {...register("blood_group", {
                    required: "Blood Group is required.",
                  })}
                  className="w-full md:w-96 lg:w-[350px] pl-10 text-center font-bold p-2 focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                >
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
                <p className="text-white mt-2">{errors.blood_group?.message}</p>
              </div>

              <div className="mt-8 lg:mt-0 mb-8">
                {/* <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faHospital}
                  size="lg"
                /> */}
                <input
                  id="slot1"
                  onClick={handleCheckbox}
                  className="text-center p-2 w-full md:w-96 lg:w-[350px] focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="checkbox"
                  value={6.00-6.30}
                  {...register("slot", {
                    required: "Slot is required!",
                  })}
                />
                <lebel htmlFor="slot1" className="text-white">
                  6.00pm-6.30pm
                </lebel>
                <input
                  id="slot2"
                  onClick={handleCheckbox}
                  className="text-center p-2 w-full md:w-96 lg:w-[350px] focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="checkbox"
                  value= {7.00-7.30}
                  {...register("slot", {
                    required: "Slot is required!",
                  })}
                />
                <lebel htmlFor="slot2" className="text-white">
                  7.00pm-7.30pm
                </lebel>
                {errors.slot && (
                  <p className="text-white mt-2">{errors.slot?.message}</p>
                )}
              </div>
            </div>

            {/* second part end */}
          </div>

          {loginError && <p className="text-white mt-2">{loginError}</p>}

          <input
            className="my-8 text-center text-white font-bold bg-[#722ed1] p-2 w-[92%] w-full md:w-96 lg:w-[350px] transition-all hover:bg-[#9258e5] cursor-pointer rounded-sm"
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
