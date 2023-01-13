import React from "react";
import "./login.css";
import loginImage from "../../assets/images/loginImage 1.png";

const Login = () => {
  return (
    <div id="login" className="flex justify-between items-center gap-x-2">
      <div className="image-part w-96">
        <img src={loginImage} alt="" />
      </div>
      <div className="form-part text-center w-96">
        <h2 className="text-white font-bold text-3xl">Please Login</h2>
        <form className="mt-5 px-2">
          <input
            type="text"
            placeholder="Email"
            className="w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
