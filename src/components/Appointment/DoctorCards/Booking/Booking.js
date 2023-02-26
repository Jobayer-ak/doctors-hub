import { format } from "date-fns";
import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import { faPhone, faUsd, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../context/AuthProvider";
import Loader from "../../../common/Loading/Loader";
import baseURL from "../../../../utils/baseURL";

const Booking = ({ date, docinfo, setDocinfo, refetch }) => {
  const [loading, setLoading] = useState(false);
  const formatedDate = format(date, "PP");
  const { _id, name, slot, speciality, fee } = docinfo;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const booking = {
      doctor_name: name,
      doctor_id: _id,
      gender: e.target.gender.value,
      patient_name: e.target.patient_name.value,
      patient_email: e.target.patient_email.value,
      patient_contact_number: e.target.patient_contact_number.value,
      slot: e.target.slot.value,
      speciality: speciality,
      fee: fee,
      date: formatedDate,
      branch: docinfo.branch,
    };

    baseURL
      .post("/booking", booking, {
        withCredentials: true,
      })
      .then((res) => {
        setLoading(false);
        if (res.data.success === true) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: `${res.data.message} at ${booking.slot} on ${date} `,
          });
        }

        if (res.data.success === false) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${res.data.message} at ${booking.slot} on ${date}`,
          });
        }

        refetch();
        setDocinfo(null);
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 403) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You are not permitted to book appointment!",
          });

          navigate("/");
        }

        if (error.response.status === 401) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You are not logged in!",
          });
          navigate("/login");
        }
        console.log(error.response);
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
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

            {/* booking form  */}
            <div className="px-7 pb-2.5 text-center">
              <form
                className="mt-8 text-center relative"
                onSubmit={handleSubmit}
              >
                <div className="">
                  <FontAwesomeIcon
                    className="p-2.5 absolute text-[#23075e]"
                    icon={faCalendarDays}
                    size="lg"
                  />
                  <input
                    className="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
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
                    {slot?.map((s) => (
                      <option value={s}>{s}</option>
                    ))}
                  </select>
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
                    value={user.userEmail}
                    required
                    readOnly
                    className="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  />
                </div>

                <div className="my-6">
                  <FontAwesomeIcon
                    className="p-2.5 absolute text-[#23075e]"
                    icon={faUsd}
                    size="lg"
                  />
                  <input
                    type="email"
                    name="patient_email"
                    value={fee + "$"}
                    required
                    readOnly
                    className="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  />
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
                    className="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
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
                    className="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
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
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        required
                      />
                      <p>Female</p>
                    </div>
                  </div>
                </div>

                <input
                  className="text-center text-white font-bold bg-[#722ed1] hover:bg-[#9258e5] transition-all p-2 w-full max-w-sm cursor-pointer rounded-sm"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
          {/* booking form  */}
        </div>
      </div>
    </div>
  );
};

export default Booking;
