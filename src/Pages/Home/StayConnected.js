import React from "react";
import { useForm } from "react-hook-form";
import appoinment from "../../assets/images/appointment.png";
import Button from "../Shared/Button";

const StayConnected = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section
      style={{
        background: `url(${appoinment})`,
        backgroundSize: "cover",
      }}
      className="text-center mt-12 p-12"
    >
      <h2 className="text-primary text-2xl">Contact Us</h2>
      <h2 className="text-4xl text-white font-bold my-5">
        Stay Connected With Us
      </h2>
      <div className="w-72 lg:w-96 mx-auto mt-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("Email", { required: true })}
            type="email"
            required
            placeholder="Email Address"
            className="input w-full"
          />
          <input
            {...register("Subject", { required: true })}
            type="text"
            required
            placeholder="Subject"
            className="input w-full my-4"
          />
          <textarea
            {...register("message", { required: true, maxLength: 1000 })}
            type="text"
            rows={5}
            required
            placeholder="Write your message"
            className="w-full textarea"
          />

          <div className="flex items-center justify-center mt-4">
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default StayConnected;
