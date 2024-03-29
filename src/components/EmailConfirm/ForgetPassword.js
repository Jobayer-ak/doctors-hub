import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../common/Loading/Loader";

const ForgetPassword = () => {
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    await axios
      .post(
        "https://doctors-hub-server.vercel.app/api/v1/forget-password",
        data,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setLoading(false);
        if (res.status === 200) {
          reset();
          navigate("/login");
          return Swal.fire("Success!", res.data.message, "success");
        }
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 403) {
          reset();
          return setLoginError(err.response.data.message);
        }

        if (err.response.status === 404) {
          reset();
          return setLoginError(err.response.data.message);
        }
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="lg:ml-1 bg-[#23075e] w-full lg:w-[83%] min-h-screen">
      <div className=" p-10">
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
