import { format } from "date-fns";
import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthProvider";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const { user } = useContext(AuthContext);
  const formatedDate = format(date, "PP");

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formatedDate,
      slot,
      patient: user.userEmail,
      patientName: user.userName,
      phone: e.target.phone.value,
    };
    console.log(booking);
    setTreatment(null);
  };

  // console.log(info)
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Booking for {name}!
          </h3>

          {/* Form */}
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 justify-items-center mt-3"
          >
            <input
              type="text"
              readOnly
              value={format(date, "PP")}
              className="input input-bordered bg-secondary text-white w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              value={user.userName}
              className="input border-solid border-1 border-green-200 w-full max-w-xs"
              required
              readOnly
            />
            <input
              type="email"
              name="email"
              value={user.userEmail}
              className="input border-solid border-1 border-green-200 w-full max-w-xs"
              required
              readOnly
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Mobile Number"
              className="input border-solid border-1 border-green-200 w-full max-w-xs"
              required
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
