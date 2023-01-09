import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  let loginError = null;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/api/v1/login", data, {
        withCredentials: true,
      })
      .then((res) => {
        const { name, email, role } = res.data.others;
        localStorage.setItem("userRole", role);
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        // setUser({name, email});
        navigate(from, { replace: true });
      })
      .catch((err) => {
        loginError = err;
        console.log(err);
      });
  };

  // const onSubmit = (data) => {
  //   axios
  //     .post("http://localhost:5000/api/v1/login", data, {
  //       headers: { "Content-Type": "application/json" },
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       console.log(res.data.token);
  //       setCookies("cook", res.data.token)
  //       navigate(from, { replace: true });
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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

            <input
              className="btn w-full max-w=xs text-white"
              type="submit"
              value="Login"
            />

            {loginError ? <p className="text-red-500">{loginError}</p> : ""}
          </form>
          <div className="p-1">
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="text-sky-500">
                Create new account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
