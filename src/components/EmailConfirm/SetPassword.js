import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

const SetPassword = () => {
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const queryParameters = new URLSearchParams(window.location.search);
  const ptoken = queryParameters.get("token");

  // console.log(ptoken);

  const onSubmit = async (data) => {
    console.log(data);

    const pass = data.password;
    const cpass = data.cpassword;
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (pass.match(regex) && cpass.match(regex)) {
      console.log("String matches the regex!");
    } else {
      console.log("String does not match the regex!");
    }

    if (data.password === data.cpassword) {
      console.log("matched: ", typeof data.password);

      const pass = data.password;
      console.log(pass);
      await axios
        .post(`http://localhost:5000/api/v1/user/set-new-password/${ptoken}`, {
          pass: data.password,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            reset();
            navigate("/login");
            return Swal.fire("Success!", res.data.message, "success");
          }
        })
        .catch((err) => {
          console.log(err);

          if (err.response.status === 401) {
            setLoginError(err.response.data.error);
          }

          if (err.response.status === 403) {
            setLoginError(err.response.data.error);
          }
        });
    } else {
      console.log("didn't match password");
    }
  };

  return (
    <div className="mx-10 my-10  w-full h-screen">
      <div className="bg-[#23075e] p-10">
        <h2 className="text-2xl text-center text-white font-bold">
          Set New Password
        </h2>
        <form
          className="mt-12 md:bg-[#23075e] w-full text-center relative mb-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="my-8">
            <input
              className="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",

                minLength: { value: 6, message: "At least 6 characters!" },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-white mt-2">{errors.password?.message}</p>
            )}
          </div>

          <div className="my-8">
            <input
              className="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
              type="password"
              placeholder="Confirm Password"
              {...register("cpassword", {
                required: "Confirm Password is required",

                minLength: { value: 6, message: "At least 6 characters!" },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters",
                },
              })}
            />
            {errors.cpassword && (
              <p className="text-white mt-2">{errors.cpassword?.message}</p>
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

export default SetPassword;
