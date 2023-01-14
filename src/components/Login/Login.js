import React from "react";
import "./login.css";
import loginImage from "../../assets/images/loginImage .png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div id="login" className="flex flex-row items-center">
      <div className="image-part basis-1/2">
        <img src={loginImage} alt="" className="" />
      </div>

      <div className="form-part w-96 text-center basis-1/2">
        <h2 className="text-white inline-block font-bold text-3xl mt-12">
          Please Login
        </h2>

        <form
          className="mt-12 px-2 text-center relative"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-5">
            <FontAwesomeIcon
              className="icon p-2.5 absolute"
              icon={faEnvelope}
              size="xl"
            />
            <input
              class="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0"
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
              className="icon p-2.5 absolute"
              icon={faLock}
              size="xl"
            />
            <input
              class="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0"
              type="password"
              placeholder="Enter Password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required!",
                },
                minLength: { value: 6, message: "At least 6 characters!" },
              })}
            />
          </div>
          <input
            class="text-center text-white font-bold bg-[#722ed1] p-2 w-full max-w-sm cursor-pointer"
            type="submit"
            value="Login"
          />
        </form>

        <div className="my-4">
          <p className="text-white font-bold">Forget Password?</p>
          <button className="text-white font-bold mt-4 btn-sm bg-[#722ed1] rounded">
            <Link to="/signup">Create An Account?</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
