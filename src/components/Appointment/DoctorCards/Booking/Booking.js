import { format } from 'date-fns';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faClock,
  faEnvelope,
} from '@fortawesome/free-regular-svg-icons';
import { faPhone, faUsd, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../common/Loading/Loader';
import baseURL from '../../../../utils/baseURL';
import useStorage from '../../../../hook/useStorage';

const Booking = ({ date, docinfo, setDocinfo, refetch, setNewBooking }) => {
  const [loading, setLoading] = useState(false);
  const formattedDate = format(date, 'PP');
  const { _id, name, slot, speciality, fee } = docinfo;
  const navigate = useNavigate();
  const [user] = useStorage();

  const userInfo = JSON.parse(user);

  if (user === null) {
    return navigate('/login');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    

    setLoading(true);

    const booking = {
      doctor_name: name,
      doctor_id: _id,
      gender: e.target.gender.value,
      patient_name: e.target.patient_name.value,
      patient_email: userInfo.email,
      patient_contact_number: e.target.patient_contact_number.value,
      slot: e.target.slot.value,
      speciality: speciality,
      fee: fee,
      date: formattedDate,
      branch: docinfo.branch,
    };

    baseURL
      .post('/booking', booking, {
        withCredentials: true,
      })
      .then((res) => {
        setLoading(false);

        if (res.data.success === true) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: `${res.data.message} at ${booking.slot} on ${date} `,
          });
        }

        if (res.data.success === false) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${res.data.message} at ${booking.slot} on ${date}`,
          });
        }
        setNewBooking(true);
        setDocinfo(null);
        refetch();
        navigate("/dashboard")
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 403) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You are not permitted to book appointment!',
          });

          navigate('/');
        }

        if (error.response.status === 401) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You are not logged in!',
          });
          navigate('/login');
        }
        
      });
  };

  if (loading) {
    return <Loader />;
  }

  setNewBooking(false);

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
                    value={formattedDate}
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
                    {slot.length === 0 && (
                      <option disabled className="text-white">
                        No Time Slots
                      </option>
                    )}

                    {slot?.map((s, index) => (
                      <option value={s} key={index}>
                        {s}
                      </option>
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
                    value={userInfo.email}
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
                    type="text"
                    name="patient_email"
                    value={fee + '$'}
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
                  value={slot.length === 0 ? 'No slots for today' : 'Submit'}
                  disabled={slot.length === 0 ? true : false}
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
