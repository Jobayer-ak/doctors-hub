import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../common/Loading/Loader";

const ConfirmEmail = () => {
  const { token } = useParams();
  const [loading, setLoading] = useState(false);

  console.log(token);
  const handleConfirm = async () => {
    setLoading(true);
    await axios
      .get(
        `https://doctors-hub-server.vercel.app/api/v1/signup/confirmation/${token}`
      )
      .then((res) => setLoading(false))
      .catch((err) => setLoading(false));
  };

  if (loading) {
    return <Loader />;
  }


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
