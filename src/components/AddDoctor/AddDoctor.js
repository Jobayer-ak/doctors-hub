import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faIdCard } from '@fortawesome/free-regular-svg-icons';
import {
  faHospital,
  faBriefcaseMedical,
  faDroplet,
  faGraduationCap,
  faMapMarkerAlt,
  faPhone,
  faUserDoctor,
  faUserPlus,
  faBookSkull,
  faCodeBranch,
  faUsd,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import Loader from '../common/Loading/Loader';
import SlotModal from './SlotModal';
import baseURL from '../../utils/baseURL';
import './doctor.css';

const AddDoctor = () => {
  const [loading, setLoading] = useState(false);
  const [modalData, setModalData] = useState([]);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const [addError, setAddError] = useState('');

  // console.log(typeof modalData);

  const onSubmit = async (data) => {
    setLoading(true);
    data.time_slots = modalData;

    const newData = { ...data };
    console.log(newData);

    await baseURL
      .post('/admin/addDoctor', data, {
        withCredentials: true,
      })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        if (res.data.status === 403) {
          setAddError(res.data.message);
        }
        reset();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        // setLoginError(err.response.data.message);
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full lg:w-[82%] bg-[#23075e] lg:border-l-4 lg:border-l-4 border-solid border-[#722ED1] z-10 lg:pb-5">
      <div className="pt-3 md:pt-6 pb-2.5 text-center mx-4 lg:mx-6">
        <h2 className="text-[#722ed1] font-bold text-4xl bg-white inline-block py-3 px-6 rounded-full">
          <span className="mr-4">Add Doctor</span>
          <FontAwesomeIcon icon={faUserDoctor} size="md" />
        </h2>

        <form
          className="mt-8 md:bg-[#23075e] text-center relative"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="lg:flex lg:justify-between p-4">
            {/* First part */}
            <div className="w-[100%]">
              <div className="">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faUserPlus}
                  size="lg"
                />
                <input
                  className="text-center p-2 w-full max-w-md focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="text"
                  placeholder="Doctor's Full Name"
                  {...register('name', {
                    required: 'Name is required!',
                    maxLength: {
                      value: 35,
                      message: 'Too Large! Not more than 35 characters.',
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-white mt-2">{errors.name?.message}</p>
                )}
              </div>

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
                      message: 'Email is required!',
                    },

                    pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide a valid email!',
                  })}
                />
                {errors.email && (
                  <p className="text-white mt-2">{errors.eamil?.message}</p>
                )}
              </div>

              <div className="my-8">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faPhone}
                  size="lg"
                />
                <input
                  className="text-center p-2 w-full max-w-md focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="text"
                  placeholder="Mobile Number"
                  {...register('contact_number', {
                    required: {
                      value: true,
                      message: 'Mobile Number is required!',
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-white mt-2">
                    {errors.contact_number?.message}
                  </p>
                )}
              </div>

              <div className="mb-8">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faMapMarkerAlt}
                  size="lg"
                />
                <input
                  className="text-center p-2 w-full max-w-md focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="text"
                  placeholder="Address"
                  {...register('address', {
                    required: {
                      value: true,
                      message: 'Address is required!',
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-white mt-2">{errors.address?.message}</p>
                )}
              </div>

              <div className="mb-8">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faIdCard}
                  size="lg"
                />
                <input
                  className="text-center p-2 w-full max-w-md focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="text"
                  placeholder="NID number"
                  {...register('nid', {
                    required: {
                      value: true,
                      message: 'NID number is required!',
                    },
                  })}
                />
                {errors.nid && (
                  <p className="text-white mt-2">{errors.nid?.message}</p>
                )}
              </div>
              <div className="mb-8">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faUsd}
                  size="lg"
                />
                <input
                  className="text-center p-2 w-full max-w-md focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="text"
                  placeholder="Visit Fee"
                  {...register('fee', {
                    required: {
                      value: true,
                      message: 'NID number is required!',
                    },
                  })}
                />
                {errors.fee && (
                  <p className="text-white mt-2">{errors.fee?.message}</p>
                )}
              </div>

              <div>
                <div className="text-white w-full flex justify-center items-center gap-[50px] md:gap-[120px]">
                  <div>
                    <h3 className="font-bold">Gender</h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      placeholder="Gender"
                      value="Male"
                      className=""
                      {...register('gender', {
                        required: {
                          value: true,
                          message: 'Gender is required!',
                        },
                      })}
                    />
                    <p>Male</p>
                  </div>

                  <div className="flex justify-between items-center gap-4">
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
                {errors.email && (
                  <p className="text-white mt-2">{errors.gender?.message}</p>
                )}
              </div>
            </div>

            {/* second part */}
            <div className="w-[100%]">
              <div className="mt-8 lg:mt-0 mb-8">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faHospital}
                  size="lg"
                />
                <input
                  className="text-center p-2 w-full max-w-md focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="text"
                  placeholder="Working Hospital Name"
                  {...register('working_hospital', {
                    required: 'Hospital name is required!',
                    maxLength: {
                      value: 35,
                      message: 'Too Large! Not more than 35 characters.',
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-white mt-2">
                    {errors.working_hospital?.message}
                  </p>
                )}
              </div>

              <div className="">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faBriefcaseMedical}
                  size="lg"
                />
                <input
                  className="text-center p-2 w-full max-w-md focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="text"
                  placeholder="Speciality E.g. Cardiologist"
                  {...register('speciality', {
                    required: 'Doctor speciality is required!',
                    maxLength: {
                      value: 35,
                      message: 'Too Large! Not more than 35 characters.',
                    },
                  })}
                />
                {errors.speciality && (
                  <p className="text-white mt-2">
                    {errors.speciality?.message}
                  </p>
                )}
              </div>

              <div className="mt-8 mb-0">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faBookSkull}
                  size="lg"
                />
                <input
                  className="text-center p-2 w-full max-w-md focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="text"
                  placeholder="Department"
                  {...register('department', {
                    required: 'Department name is required!',
                    maxLength: {
                      value: 35,
                      message: 'Too Large! Not more than 35 characters.',
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-white mt-2">
                    {errors.department?.message}
                  </p>
                )}
              </div>

              <div className="mt-8">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faGraduationCap}
                  size="lg"
                />
                <input
                  className="text-center p-2 w-full max-w-md focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="text"
                  placeholder="Higher Degree with info"
                  {...register('higher_degree', {
                    required: 'Higher Degree and University Name is required!',
                    maxLength: {
                      value: 60,
                      message: 'Too Large! Not more than 35 characters.',
                    },
                  })}
                />
                <p className="text-white mt-2">
                  {errors.higher_degree?.message}
                </p>
              </div>

              <div className="mt-8 mb-0">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faCodeBranch}
                  size="lg"
                />

                <select
                  placeholder="Branch"
                  {...register('branch', {
                    required: "Doctor's Hub Branch Name Is Required!",
                    maxLength: {
                      value: 60,
                      message: 'Too Large! Not more than 35 characters.',
                    },
                  })}
                  className="w-full max-w-md pl-10 text-center font-bold p-2.5 focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                >
                  <option value="Mymensingh">Mymensingh</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chattogram">Chattogram</option>
                  <option value="Barishal">Barishal</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Bogra">Bogra</option>
                </select>
              </div>

              <div className="mt-8 mb-0">
                <FontAwesomeIcon
                  className="pt-2 pl-3.5 absolute text-red-700"
                  icon={faDroplet}
                  size="lg"
                />

                <select
                  {...register('blood_group', {
                    required: 'Blood Group is required.',
                  })}
                  className="w-full max-w-md pl-10 text-center font-bold p-2.5 focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                >
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
                <p className="text-white mt-2">{errors.blood_group?.message}</p>
              </div>

              {/* doctor time slots */}
              <div className="mt-8 mb-0 md:flex md:justify-center">
                <label
                  htmlFor="my-modal-3"
                  className="flex justify-start items-center p-2 bg-[#fff] w-full max-w-md rounded-sm hover:bg-[#722ed1] cursor-pointer"
                >
                  <FontAwesomeIcon
                    className="py-2.5 absolute text-[#23075e]"
                    icon={faClock}
                    size="xl"
                  />
                  <span className="mx-auto font-bold">Doctor's Time Slot</span>
                </label>
              </div>
            </div>
          </div>

          {/* time slots */}
          <div className="mt-2 w-[100%]">
            <h4 className="text-white font-xl font-bold mb-2">
              Selected Doctor's Time Slots {modalData.length}
            </h4>
            {modalData.length === 0 || modalData === false ? (
              <p className="text-white">You didn't select any time slot</p>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-2 p-2 rounded-sm bg-[#381f6e] w-[328px] md:w-[384px] lg:w-[85%] mx-auto">
                {/* md:mx-[175px] lg:mx-[77px] */}
                {modalData?.map((s) => (
                  <p className="text-white">{s}</p>
                ))}
              </div>
            )}
          </div>

          {addError && <p className="text-white mt-2">{addError}</p>}

          {/* upload doctor image */}

          <div className="text-left md:text-center lg:flex lg:justify-center mt-8">
            <label className="text-white pl-6">
              <span className="font-bold">Upload Image:</span>
              <input
                type="file"
                class="text-sm text-grey-500 pl-4 md:pl-6 lg:pl-4 mt-4 lg:mt-0
                  file:mr-4 file:py-3 file:px-10
                  file:rounded-full file:border-0
                  file:text-md file:font-semibold  file:text-white
                  file:bg-gradient-to-r file:from-indigo-800 file:to-indigo-600
                  hover:file:cursor-pointer hover:file:opacity-80
                "
              />
            </label>

            <p className="text-white mt-2">{errors.docImage?.message}</p>
          </div>

          <input
            className="my-8 text-center text-white font-bold bg-[#722ed1] p-2 w-[92%] w-full md:w-96 lg:w-[350px] transition-all hover:bg-[#9258e5] cursor-pointer rounded-sm"
            type="submit"
            value="Add"
          />
        </form>
        <SlotModal setModalData={setModalData} />
      </div>
    </div>
  );
};

export default AddDoctor;

// how to remove
