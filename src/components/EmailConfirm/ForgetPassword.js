import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ForgetPassword = () => {
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    await axios
      .post("http://localhost:5000/api/v1/forget-password", data, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status === 200) {
          reset();
          navigate("/login");
          return Swal.fire("Success!", res.data.message, "success");
        }
      })
      .catch((err) => {
        if (err.response.status === 403) {
          reset();
          return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
          });
        }

        if (err.response.status === 404) {
          reset();
          return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
          });
        }
      });
  };

  return (
    <div className="mx-10 my-10  w-full h-screen">
      <div className="bg-[#23075e] p-10">
        <h2 className="text-2xl text-center text-white font-bold">
          Forget Password
        </h2>
        <form
          className="mt-12 md:bg-[#23075e] w-full text-center relative mb-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="my-8">
            <input
              className="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
              type="email"
              placeholder="Enter Your Email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },

                pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid email",
              })}
            />
            {errors.email && (
              <p className="text-white mt-2">{errors.email?.message}</p>
            )}
          </div>

          <input
            className="text-center text-white font-bold bg-[#722ed1] p-2 w-full max-w-sm cursor-pointer rounded-sm"
            type="submit"
            value="Submit"
          />
          {loginError && <p className="text-white mt-2">{loginError}</p>}
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
