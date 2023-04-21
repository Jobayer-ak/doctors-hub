import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './dayCalender.css';
import baseURL from '../../utils/baseURL';
import { format } from 'date-fns';
import { useQuery } from 'react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faClock,
  faEnvelope,
  faPhone,
  faUsd,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import useStorage from '../../hook/useStorage';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SearchResult = ({ info }) => {
  const [date, setDate] = useState(new Date());
  const minDate = new Date();
  const formattedDate = format(date, 'PP');
  const [user] = useStorage();
  const userInfo = JSON.parse(user);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onDateChange = (newDate) => {
    setDate(newDate);
  };

  const { data, isLoading, refetch } = useQuery(['doct', date], async () => {
    const res = await baseURL.get(`/doctors/slots?date=${formattedDate}`, {
      withCredentials: true,
    });
    const result = res.data;
    return result;
  });

  if (isLoading) {
    return <h2 className="text-white font-bold">Loading...</h2>;
  }

  const filterData = data.filter((d) => {
    return (
      d.name.toLowerCase() === info.name.toLowerCase() &&
      d.email === info.email &&
      d.branch === info.branch
    );
  });

  const { branch, department, email, fee, name, slot, speciality, _id } =
    filterData[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('slot v: ', e.target.slot.value);

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
      branch: branch,
    };

    console.log('Booking info: ', booking);
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
        console.log(error.response);
      });
  };

  return (
    <div className="w-full min-h-screen bg-[#23075e]">
      {/* calendar */}
      <div className="text-white my-3 lg:mb-0">
        <Calendar value={date} minDate={minDate} onChange={onDateChange} />
      </div>

      {/* booking form  */}
      <div className="py-4 rounded-sm relative bg-[#381f6e]">
        <div className="">
          <div className="px-7 pb-2.5 text-center">
            <form className="mt-8 text-center relative" onSubmit={handleSubmit}>
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
                  className="w-full md:max-w-sm pl-10 text-center font-bold p-2 focus:bg-[#722ed1] border-none outline-0 rounded-sm"
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
                <div className="text-white mb-6 flex justify-center items-center gap-[30px] md:gap-[60px] lg:gap-[85px]">
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
                className="text-center text-white font-bold bg-[#722ed1] hover:bg-[#9258e5] transition-all p-2 w-full max-w-sm cursor-pointer rounded-sm"
                type="submit"
                value={slot.length === 0 ? 'No slots for today' : 'Submit'}
                disabled={slot.length === 0 ? true : false}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
