import React, { useContext } from 'react';
import loginImage from '../../assets/images/loginImage .png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCircleUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ColorRing, Dna } from 'react-loader-spinner';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  
  const { login, loading, loginError } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    login(data.email, data.password);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center bg-[#23075e] ml-0 lg:ml-1 w-full lg:w-[83%] h-[100vh]">
        <Dna
          visible={true}
          height="100"
          width="100"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }

  return (
    <div className="flex justify-between lg:h-screen lg:items-center lg:bg-[#722ed1] w-full lg:w-[83%] ml-0 lg:ml-1">
      {/* login image */}
      <div className="lg:block hidden w-1/2">
        <img src={loginImage} alt="" className="lg:mb-10 px-2 h-[80vh]" />
      </div>

      {/* login form */}
      <div className="w-full lg:w-1/2 bg-[#23075e] h-screen pt-6 md:pt-12 pb-2.5 text-center">
        <h2 className="text-[#722ed1] font-bold text-6xl">
          <FontAwesomeIcon icon={faCircleUser} size="2xl" />
        </h2>

        <form
          className="mt-12 md:bg-[#23075e] w-full text-center relative px-4 mb-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="my-8">
            <FontAwesomeIcon
              className="p-2.5 absolute text-[#23075e]"
              icon={faEnvelope}
              size="lg"
            />
            <input
              className="text-center p-2 w-full max-w-md focus:bg-[#722ed1] border-none outline-0 rounded-sm"
              type="email"
              placeholder="Enter Email"
              {...register('email', {
                required: {
                  value: true,
                  message: 'Email is required',
                },

                pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'Provide a valid email',
              })}
            />
            {errors.email && (
              <p className="text-white mt-2">{errors.email?.message}</p>
            )}
          </div>

          <div className="my-8">
            <FontAwesomeIcon
              className="text-[#23075e] p-2.5 absolute"
              icon={faLock}
              size="lg"
            />
            <input
              className="text-center p-2 w-full max-w-md focus:bg-[#722ed1] border-none outline-0 rounded-sm"
              type="password"
              placeholder="Enter Password"
              {...register('password', {
                required: 'Password is required!',
                minLength: {
                  value: 6,
                  message: 'Password must be 6 characters or longer',
                },
              })}
            />
            {errors.password && (
              <p className="text-white mt-2">{errors.password?.message}</p>
            )}
          </div>
          <div>
            <div className="flex justify-center">
              {loading && (
                <ColorRing
                  visible={true}
                  height="50"
                  width="50"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    '#e15b64',
                    '#f47e60',
                    '#f8b26a',
                    '#abbd81',
                    '#849b87',
                  ]}
                />
              )}
            </div>
            <input
              className="text-center text-white font-bold bg-[#722ed1] p-2 w-full max-w-md cursor-pointer rounded-sm"
              type="submit"
              value={'Login'}
            />
          </div>
          {loginError && <p className="text-white mt-2">{loginError}</p>}
        </form>

        <Link to="/forget-password" className="text-blue-500 pointer">
          Forget Password
        </Link>

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
