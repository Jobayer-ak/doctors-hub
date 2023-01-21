import React, { useState } from "react";
// import "./login.css";
import loginImage from "../../assets/images/loginImage .png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faCircleUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [loginError, setLoginError] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:5000/api/v1/login", data)
      .then((res) => {
        const { name, email, role } = res.data.others;
        localStorage.setItem("userRole", role);
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        // setUser({name, email});
        navigate(from, { replace: true });
        reset();
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setLoginError(err.response.data.message);
      });
    // console.log(result.data.others.email);
  };

  return (
    <div className="flex lg:justify-center lg:h-screen lg:items-center mt-0 lg:bg-[#722ed1] w-full">
      {/* login image */}
      <div className="lg:block hidden">
        <img src={loginImage} alt="" className="px-4 lg:mb-10 h-[500px]" />
      </div>

      <div className="grow w-[350px] md:bg-[#23075e] lg:border-l-0 md:border-l-4 h-screen border-solid border-[#722ED1] px-7 pt-6 md:pt-12 pb-2.5 text-center">
        <h2 className="text-[#722ed1] font-bold text-6xl">
          <FontAwesomeIcon icon={faCircleUser} size="2xl" />
        </h2>

        <form
          className="mt-12 md:bg-[#23075e] w-full text-center relative"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="my-8">
            <FontAwesomeIcon
              className="p-2.5 absolute text-[#23075e]"
              icon={faEnvelope}
              size="lg"
            />
            <input
              class="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
              type="email"
              placeholder="Enter Email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },

                pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid email",
              })}
            />
            {errors.email && <p className='text-white mt-2'>{errors.email?.message}</p>}
          </div>

          <div className="my-8">
            <FontAwesomeIcon
              className="text-[#23075e] p-2.5 absolute"
              icon={faLock}
              size="lg"
            />
            <input
              class="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
              type="password"
              placeholder="Enter Password"
              {...register("password", {
                required: "Password is required!",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
            />
            {errors.password && <p className='text-white mt-2'>{errors.password?.message}</p>}
          </div>

          <input
            class="text-center text-white font-bold bg-[#722ed1] p-2 w-full max-w-sm cursor-pointer rounded-sm"
            type="submit"
            value="Login"
          />
          {loginError && <p className="text-white mt-2">{loginError}</p>}
        </form>

        <div className="my-4">
          <button className="text-white font-bold mt-4 btn-sm bg-[#722ed1] rounded-sm">
            <Link to="/signup">Create An Account?</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
