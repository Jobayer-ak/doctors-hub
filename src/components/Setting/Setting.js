import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faLocationPinLock,
  faPhone,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import AuthContext from '../../context/AuthProvider';
import { useQuery } from 'react-query';
import { format } from 'date-fns';
import Swal from 'sweetalert2';
import baseURL from '../../utils/baseURL';
import Review from './Review';
import { Dna } from 'react-loader-spinner';

const Setting = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { user } = useContext(AuthContext);
  // console.log(user);
  // const [updateError, setUpdateError] = useState("");
  const [loading, setLoading] = useState(false);

  const { data, isLoading, refetch } = useQuery(
    ['info', user.userEmail],
    async () => {
      const res = await baseURL.get(`/setting/${user.userEmail}`, {
        withCredentials: true,
      });
      const result = res.data;
      return result;
    }
  );

  if (isLoading || loading) {
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

  // console.log('Data ', data);
  console.log('URL: ', data.user.imageURL);

  const { _id, email, gender, mobile, name, address, imageURL } = data.user;
  const createdDate = new Date(data.user.createdAt);

  const imgStorageKey = '23d6548fb8456e2bee8c9306819c612c';

  const onSubmit = async (data) => {
    const updateData = {
      name: data.name,
      email: email,
      address: data.address,
      mobile: data.mobile,
      gender: data.gender,
      imageURL: '',
    };

    const image = data.uploadFile[0];
    // console.log(image);
    const formData = new FormData();
    formData.append('image', image);

    // console.log('formdata: ', formData);

    const imgbbUrl = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;

    await axios
      .post(imgbbUrl, formData)
      .then((res) => {
        setLoading(true);
        // console.log(res);
        if (res.data.success) {
          const imgurl = res.data.data.display_url;
          // console.log(imgurl);

          updateData.imageURL = imgurl;

          // console.log(updateData);

          baseURL
            .patch(`/update-profile/${email}`, updateData, {
              withCredentials: true,
            })
            .then((res) => {
              setLoading(false);
              // console.log(res.data);
              refetch();
              reset();
              if (res.status === 200) {
                return Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: res.data.message,
                  showConfirmButton: false,
                  timer: 1500,
                });
              }

              if (res.status === 403) {
                return Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: res.data.message,
                });
              }
              if (res.status === 304) {
                return Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: res.data.message,
                });
              }
            })
            .catch((err) => {
              setLoading(false);
              // console.log(err.message);
              if (err.response.status === 500) {
                return Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: err.message,
                });
              }
            });
        }
      })
      .catch((err) => {
        setLoading(false);
        if (err) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong with image!',
          });
        }
      });
  };

  return (
    <div className="w-full lg:w-[83%] ml-0 lg:ml-1 md:min-h-screen bg-[#0a062c] z-10">
      {/* account info */}

      <div className="lg:flex lg:justify-around bg-[#23075e] px-4 py-12 md:px-10 rounded-sm">
        <div className="mt-0 flex justify-center">
          <img
            src={imageURL}
            alt=""
            className="w-[350px] h-[350px] rounded-full"
          />
        </div>

        <div className="mt-10 lg:mt-0">
          <h2 className="text-[#f68685] font-bold text-3xl text-center mb-6">
            My Account Information
          </h2>

          <p className="text-white font-bold my-3">
            Name: <span className="ml-4 text-[#a8a29e]">{name}</span>
          </p>
          <p className="text-white font-bold my-3">
            Email: <span className="ml-4 text-[#a8a29e]">{email}</span>
          </p>
          <p className="text-white font-bold my-3">
            Mobile: <span className="ml-4 text-[#a8a29e]">{mobile}</span>
          </p>
          <p className="text-white font-bold my-3">
            Gender: <span className="ml-4 text-[#a8a29e]">{gender}</span>
          </p>
          <p className="text-white font-bold my-3">
            Address: <span className="ml-4 text-[#a8a29e]">{address}</span>
          </p>
          <p className="text-white font-bold my-3">
            User since:{' '}
            <span className="ml-4 text-[#a8a29e]">
              {format(createdDate, 'PP')}
            </span>
          </p>

          <div className="text-center mt-12">
            <label
              htmlFor="my-modal-3"
              className="btn bg-[#f68685] text-[#381f6e] rounded-sm hover:bg-slate-500 hover:text-white"
            >
              update profile
            </label>
          </div>
        </div>
      </div>

      {/* modal */}
      <div className="text-center">
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="px-8  py-4 rounded-md relative bg-[#381f6e] opacity-80">
            <div>
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-3 top-2"
              >
                ✕
              </label>

              <div className="px-7 pb-2.5 text-center">
                <form
                  className="mt-8 text-center relative"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="">
                    <FontAwesomeIcon
                      className="p-2.5 absolute text-[#23075e]"
                      icon={faUserPlus}
                      size="lg"
                    />
                    <input
                      className="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                      type="text"
                      value={name}
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Name is required!',
                        },
                      })}
                    />

                    {errors.name && (
                      <p className="text-white mt-2">{errors.name?.message}</p>
                    )}
                  </div>

                  <div className="my-4">
                    <FontAwesomeIcon
                      className="p-2.5 absolute text-[#23075e]"
                      icon={faEnvelope}
                      size="lg"
                    />
                    <input
                      className="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                      type="text"
                      value={email}
                    />
                  </div>

                  <div className="my-4">
                    <FontAwesomeIcon
                      className="p-2.5 absolute text-[#23075e]"
                      icon={faPhone}
                      size="lg"
                    />
                    <input
                      className="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                      type="text"
                      placeholder={mobile}
                      {...register('mobile', {
                        required: {
                          value: true,
                          message: 'Mobile number is required!',
                        },
                      })}
                    />

                    {errors.mobile && (
                      <p className="text-white mt-2">
                        {errors.mobile?.message}
                      </p>
                    )}
                  </div>

                  <div className="my-3">
                    <FontAwesomeIcon
                      className="p-2.5 absolute text-[#23075e] z-100 "
                      icon={faLocationPinLock}
                      size="lg"
                    />
                    <input
                      className="text-center p-2 w-full max-w-sm focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                      type="text"
                      placeholder="Your address"
                      {...register('address', {
                        required: {
                          value: true,
                          message: 'Address is required!',
                        },
                      })}
                    />

                    {errors.address && (
                      <p className="text-white mt-2">
                        {errors.address?.message}
                      </p>
                    )}
                  </div>

                  <div className="text-white mb-3 flex justify-center items-center gap-[50px] md:gap-[75px]">
                    <div>
                      <h3 className="font-bold">Gender</h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        placeholder="Gender"
                        value="Male"
                        className=""
                        checked
                        {...register('gender', {
                          required: {
                            value: true,
                            message: 'Gender is required!',
                          },
                        })}
                      />
                      <p>Male</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        value="Female"
                        {...register('gender', {
                          required: {
                            value: true,
                            message: 'Gender is required!',
                          },
                        })}
                      />
                      <p>Female</p>
                    </div>
                  </div>

                  <div className="mb-8 w-full text-left text-white">
                    <label className="flex justify-around items-center font-bold">
                      Image:
                      <input
                        type="file"
                        className="text-white py-2 w-[75%] max-w-sm rounded-sm"
                        {...register('uploadFile', {
                          required: {
                            value: true,
                            message: 'Image is required!',
                          },
                        })}
                      />
                    </label>

                    {errors.uploadFile && (
                      <p className="text-white mt-2">
                        {errors.uploadFile?.message}
                      </p>
                    )}
                  </div>

                  {/* {updateError && (
                    <p className="text-white mt-2">{updateError}</p>
                  )} */}

                  <input
                    className="text-center text-white font-bold bg-[#722ed1] hover:bg-[#9258e5] transition-all p-2 w-full max-w-sm cursor-pointer rounded-sm"
                    type="submit"
                    value="Save"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* add review */}
      <Review userData={data.user} key={_id} />
    </div>
  );
};

export default Setting;
