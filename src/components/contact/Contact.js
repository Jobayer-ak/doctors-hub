import { faEnvelope, faHospital } from "@fortawesome/free-regular-svg-icons";
import { faBook, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import contactImage from "../../assets/images/contact.jpg";

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [contactError, setContactError] = useState("");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mx-4 md:mx-6 py-4 lg:w-full">
      <div className="bg-[#23075e]">
        {/* contact Form */}

        <div
          className="hero h-[18vh] md:h-[22vh] lg:h-[32vh]"
          style={{
            backgroundImage: `url(${contactImage})`,
            backgroundPosition: "right",
            backgroundPositionY: "bottom",
          }}
        >
          <div className="hero-overlay bg-slate-800 bg-opacity-40 text-center"></div>
        </div>

        <div className="my-6">
          <div className="text-center mb-8">
            <h4 className="text-white font-bold text-4xl">Contact Us</h4>
          </div>
          <div className="md:flex md:justify-between text-center p-4 mt-2">
            <div className="bg-[#0a062c] p-4 text-center md:w-[300px] rounded-md hover:bg-slate-700 transition-all">
              <FontAwesomeIcon
                className="p-2.5 text-[#fff]"
                icon={faEnvelope}
                size="2xl"
              />

              <h3 className="text-white font-bold text-xl">Email Address</h3>
              <p className="text-white mt-2">jobayer.ak@gmail.com</p>
            </div>

            <div className="bg-[#0a062c] p-4 text-center md:w-[300px] md:mx-4 lg:mx-0 my-4 md:my-0 rounded-md hover:bg-slate-700">
              <FontAwesomeIcon
                className="p-2.5 text-[#fff]"
                icon={faPhone}
                size="2xl"
              />

              <h3 className="text-white font-bold text-xl">Mobile</h3>
              <p className="text-white mt-2">01725-008757</p>
            </div>

            <div className="bg-[#0a062c] p-4 text-center md:w-[300px] rounded-md hover:bg-slate-700 transition-all">
              <FontAwesomeIcon
                className="p-2.5 text-[#fff]"
                icon={faHospital}
                size="2xl"
              />

              <h3 className="text-white font-bold text-xl">Office Address</h3>
              <p className="text-white mt-2">Charapara, Mymensingh</p>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:justify-between p-4">
          <div className="md:ml-8 mt-4 mb-10 lg:mb=0">
            <h2 className="text-white font-bold text-center text-3xl">
              Any Query?
            </h2>

            <form
              className="mt-6 md:bg-[#23075e] text-center relative"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* emial field */}
              <div className="my-8">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faEnvelope}
                  size="lg"
                />
                <input
                  className="text-center p-2 w-full lg:w-[350px] max-w-md focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="email"
                  placeholder="Enter Email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required!",
                    },

                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid email!",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-white mt-2">{errors.email?.message}</p>
                )}
              </div>

              {/* subject field */}
              <div className="my-8">
                <FontAwesomeIcon
                  className="p-2.5 absolute text-[#23075e]"
                  icon={faBook}
                  size="lg"
                />
                <input
                  className="text-center p-2 w-full lg:w-[350px] max-w-md focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  type="text"
                  placeholder="Subject"
                  {...register("mobile", {
                    required: {
                      value: true,
                      message: "Mobile Number is required!",
                    },
                  })}
                />
                {errors.mobile && (
                  <p className="text-white mt-2">{errors.mobile?.message}</p>
                )}
              </div>

              <div className="my-8">
                <textarea
                  className="text-center p-2 w-full max-w-md focus:bg-[#722ed1] border-none outline-0 rounded-sm"
                  rows={5}
                  placeholder="Write your message"
                  {...register("textMessage", {
                    required: {
                      value: true,
                      message: "Message is required!",
                    },
                  })}
                />
                {errors.mobile && (
                  <p className="text-white mt-2">
                    {errors.textMessage?.message}
                  </p>
                )}
              </div>

              {contactError && (
                <p className="text-white mt-2">{contactError}</p>
              )}

              <input
                className="text-center text-white font-bold bg-[#722ed1] p-2 w-full lg:w-[350px] max-w-md cursor-pointer rounded-sm"
                type="submit"
                value="Submit"
              />
            </form>
          </div>

          {/* google map */}
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57973.95570659061!2d90.3613119475975!3d24.748423499492997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f1007ad9b59%3A0x79a59cb060e32d6c!2sMymensingh!5e0!3m2!1sen!2sbd!4v1676724268845!5m2!1sen!2sbd"
              title="Doctor's Hub"
              className="rounded-md w-full lg:w-[550px] md:h-[435px]"
              allowfullscreen={true}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
