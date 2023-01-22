import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHospital } from "@fortawesome/free-regular-svg-icons";
import {
  faBriefcaseMedical,
  faDroplet,
  faHouseMedical,
  faMapMarkerAlt,
  faPhone,
  faUserDoctor,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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
          <div className="lg:flex justify-center gap-10 p-4">
            {/* First part */}
            <div>
              <div className="">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faUserPlus}
                  size="lg"
                />
                <input
                  class="text-center p-2 w-full md:w-96 lg:w-[350px] focus:bg-[#722ed1] border-none outline-0 rounded-sm"
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
              </div>

              <div className="my-8">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faEnvelope}
                  size="lg"
                />
                <input
                  class="text-center p-2 w-full md:w-96 lg:w-[350px] focus:bg-[#722ed1] border-none outline-0 rounded-sm"
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
                  class="text-center p-2 w-full md:w-96 lg:w-[350px] focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="text"
                  placeholder="Mobile Number"
                  {...register("mobile", {
                    required: {
                      value: true,
                      message: "Mobile Number is required!",
                    },
                  })}
                />
              </div> 

              <div className="mb-8">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faMapMarkerAlt}
                  size="lg"
                />
                <input
                  class="text-center p-2 w-full md:w-96 lg:w-[350px] focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="text"
                  placeholder="Address"
                  {...register("address", {
                    required: {
                      value: true,
                      message: "Address is required!",
                    },
                  })}
                />
              </div>

              <div className="text-white flex justify-center items-center gap-[60px] md:gap-[75px]">
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
                  class="text-center p-2 w-full md:w-96 lg:w-[350px] focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="text"
                  placeholder="Working Hospital Name"
                  {...register("whospital", {
                    required: "Hospital name is required!",
                    maxLength: {
                      value: 35,
                      message: "Too Large! Not more than 35 characters.",
                    },
                  })}
                />
              </div>

              <div className="">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faBriefcaseMedical}
                  size="lg"
                />
                <input
                  class="text-center p-2 w-full md:w-96 lg:w-[350px] focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="text"
                  placeholder="Specialist of.e.g. -> medicine, dental..."
                  {...register("specialist", {
                    required: "Specialist is required!",
                    maxLength: {
                      value: 35,
                      message: "Too Large! Not more than 35 characters.",
                    },
                  })}
                />
              </div>

              <div className="mt-8 mb-0">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faHouseMedical}
                  size="lg"
                />
                <input
                  class="text-center p-2 w-full md:w-96 lg:w-[350px] focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="text"
                  placeholder="Studied from 'Medical College Name'"
                  {...register("medicalCollege", {
                    required: "Studied Medical College Name is required!",
                    maxLength: {
                      value: 35,
                      message: "Too Large! Not more than 35 characters.",
                    },
                  })}
                />
              </div>

              <div className="mt-8 mb-0">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faHouseMedical}
                  size="lg"
                />
                <input
                  class="text-center p-2 w-full md:w-96 lg:w-[350px] focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="text"
                  placeholder="Higher Degree and University Name"
                  {...register("blood_group", {
                    required: "Higher Degree and University Name is required!",
                    maxLength: {
                      value: 35,
                      message: "Too Large! Not more than 35 characters.",
                    },
                  })}
                />
              </div>

              <div className="mt-8 mb-0">
                <FontAwesomeIcon
                  className="pt-2 pl-3.5 absolute text-red-700"
                  icon={faDroplet}
                  size="lg"
                />

                <select
                  {...register("bloog_group", {
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
              </div> 
            </div>

            {/* second part end */}
          </div>
          <input
            class="my-8 text-center text-white font-bold bg-[#722ed1] p-2 w-[92%] w-full md:w-96 lg:w-[350px] cursor-pointer rounded-sm"
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
