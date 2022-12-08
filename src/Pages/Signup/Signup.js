import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="text-[#3A4256]">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Full Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required!",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="text-[#3A4256]">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required!",
                  },

                  pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid email!",
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="text-[#3A4256]">Mobile</span>
              </label>
              <input
                type="number"
                placeholder="Your Mobile Number"
                className="input input-bordered w-full max-w-xs"
                {...register("mobile", {
                  required: {
                    value: true,
                    message: "Mobile number is required!",
                  },
                })}
              />
              <label className="label">
                {errors.mobile?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.mobile.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="text-[#3A4256]">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required!",
                  },
                  minLength: { value: 6, message: "At least 6 characters!" },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="text-[#3A4256]">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered w-full max-w-xs"
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Confirm password is required!",
                  },
                  minLength: { value: 6, message: "At least 6 characters!" },
                })}
              />
              <label className="label">
                {errors.confirmPassword?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.confirmPassword.message}
                  </span>
                )}
                {errors.confirmPassword?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </label>
            </div>

            <input
              className="btn w-full max-w=xs text-white"
              type="submit"
              value="Sign Up"
            />
          </form>
          <div className="p-1">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-sky-500">
                Please Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
