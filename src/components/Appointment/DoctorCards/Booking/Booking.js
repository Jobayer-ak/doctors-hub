import { format } from "date-fns";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import { faPhone, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Swal from "sweetalert2";
// import withReactContent from 'sweetalert2-react-content'

// const MySwal = withReactContent(Swal);

const Booking = ({ date, doctor }) => {
  const { _id, name, treatment_area, working_hospital, time_slots } = doctor;
  const formatedDate = format(date, "PP");

  const handleSubmit = (e) => {
    e.preventDefault();

    const booking = {
      doctor_name: name,
      doctor_id: _id,
      patient_name: e.target.patient_name.value,
      patient_email: e.target.patient_email.value,
      patient_contact_number: e.target.patient_contact_number.value,
      slot: e.target.slot.value,
      gender: e.target.gender.value,
      date: formatedDate,
    };
    console.log(11, booking);
    axios
      .post("http://localhost:5000/api/v1/booking", booking, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        path: "/",
      })
      .then((res) => {
        if (res.data.success === true) {
          Swal.fire(
            'Booking Sucessful!',
            'You clicked the button!',
            'success'
          )
        }

        // console.log(formatedDate);
        // if (res.data.success) {
        //   toast(res.data.message + " on " + formatedDate);
        // }
        // if (res.data.success === false) {
        //   toast.error(res.data.message + " on " + formatedDate);
        // }
        // refetch();
        // setTreatment(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="text-center">
      {/* The button to open modal */}

      <label
        htmlFor="my-modal-3"
        className="text-white cursor-pointer bg-[#381f6e] px-2 py-2 rounded-md mt-2 inline-block"
      >
        Booking Appointment
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="px-8  py-4 rounded-md relative bg-[#381f6e]">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-3 top-2"
          >
            ✕
          </label>

          {/* booking form  */}
          <div className="px-7 pb-2.5 text-center">
            <form className="mt-8 text-center relative" onSubmit={handleSubmit}>
              <div className="">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faCalendarDays}
                  size="lg"
                />
                <input
                  class="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="text"
                  value={formatedDate}
                  readOnly
                  required
                />
              </div>

              <div className="my-6">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faClock}
                  size="lg"
                />

                <select
                  name="slot"
                  required
                  className="w-full md:w-96 lg:w-[350px] pl-10 text-center font-bold p-2 focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                >
                  {time_slots?.map((slot) => (
                    <option value={slot}>{slot}</option>
                  ))}
                </select>
              </div>

              <div className="">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faUserPlus}
                  size="lg"
                />

                <input
                  type="text"
                  name="patient_name"
                  placeholder="Your Full Name"
                  required
                  class="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                />
              </div>
              <div className="my-6">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faEnvelope}
                  size="lg"
                />
                <input
                  type="email"
                  name="patient_email"
                  placeholder="Enter Email"
                  required
                  class="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                />
              </div>

              <div className="my-6">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faPhone}
                  size="lg"
                />
                <input
                  type="text"
                  name="patient_contact_number"
                  placeholder="Your Mobile Number"
                  required
                  class="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                />
              </div>
              <div>
                <div className="text-white mb-6 flex justify-center items-center gap-[50px] md:gap-[75px]">
                  <div>
                    <h3 className="font-bold">Gender</h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <input type="radio" name="gender" value="Male" required />
                    <p>Male</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <input type="radio" name="gender" value="Female" required />
                    <p>Female</p>
                  </div>
                </div>
              </div>

              <input
                class="text-center text-white font-bold bg-[#722ed1] hover:bg-[#9258e5] transition-all p-2 w-full max-w-sm cursor-pointer rounded-sm"
                type="submit"
                value="Submit"
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
