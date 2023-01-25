import { format } from "date-fns";
import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCircleUser,
  faPhone,
  faUserPlus,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Booking = ({ date }) => {
  //   const { _id, name, slots } = treatment;
  //   const { user } = useContext(AuthContext);
  const formatedDate = format(date, "PP");

  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  //   const handleBooking = (e) => {
  //     e.preventDefault();

  // const booking = {
  //   treatmentName: name,
  //   treatmentId: _id,
  //   patientName: user.userName,
  //   patientEmail: user.userEmail,
  //   contactNumber: e.target.phone.value,
  //   slot: e.target.slot.value,
  //   date: formatedDate,
  // };
  // console.log(booking);
  // axios
  //   .post("http://localhost:5000/api/v1/booking", booking, {
  //     headers: { "Content-Type": "application/json" },
  //     withCredentials: true,
  //     path: "/",
  //   })
  //   .then((res) => {
  //     console.log(date);
  //     console.log(formatedDate);
  //     if (res.data.success) {
  //       toast(res.data.message + " on " + formatedDate);
  //     }
  //     if (res.data.success === false) {
  //       toast.error(res.data.message + " on " + formatedDate);
  //     }
  //     refetch();
  //     setTreatment(null);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  //   };

  return (
    <div className="text-center">
      {/* The button to open modal */}

      <label
        htmlFor="my-modal-3"
        className="text-white cursor-pointer bg-[#381f6e] px-2 py-2 rounded-md mt-2 inline-block"
      >
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-[#23075e]">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          {/* booking form  */}
          <div className="px-7 pt-2 pb-2.5 text-center">
            <h2 className="text-[#722ed1] font-bold text-2xl bg-white inline-block py-3 px-6 rounded-full">
              <span className="mr-4">Make An Appointment</span>
            </h2>

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
                class="text-center text-white font-bold bg-[#722ed1] hover:bg-[#9258e5] transition-all p-2 w-full max-w-sm cursor-pointer rounded-sm"
                type="submit"
                value="Save"
              />
            </form>
          </div>
          {/* booking form  */}
        </div>
      </div>
    </div>
  );
};

export default Booking;
