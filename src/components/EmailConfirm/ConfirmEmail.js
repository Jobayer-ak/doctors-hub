import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const ConfirmEmail = () => {
  const { token } = useParams();
  console.log(token);
  const handleConfirm = async () => {
    await axios
      .get(
        `https://doctors-hub-server.vercel.app/api/v1/signup/confirmation/${token}`
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="mx-4 md:mx-6 my-4 justify-center bg-[#381f6e] w-[80%] flex rounded-md">
      <div className="card w-96 bg-[#23075e] text-white mt-6 h-fit">
        <div className="card-body items-center text-center">
          <h2 className="font-bold text-2xl">Please Activate Your Account!</h2>

          <div className="card-actions mt-6">
            <button
              className="bg-[#9258e5] px-4 py-2 text-xl rounded-md"
              onClick={handleConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;

// using useQuery hoo inside a function in react
