import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import baseURL from '../../utils/baseURL';
import Swal from 'sweetalert2';
import Loader from '../common/Loading/Loader';

const ConfirmEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // console.log(token);
  const handleConfirm = async () => {
    setLoading(true);
    await baseURL
      .get(`/signup/confirmation/${token}`)
      .then((res) => {
        setLoading(false);
        res.status === 200 &&
          Swal.fire('Success!', res.data.message, 'success');

        navigate('/login');
      })
      .catch((err) => {
        setLoading(false);

        err.response.status === 401 &&
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.error,
          });

        err.response.status === 403 &&
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.error,
          });
        err.response.status === 500 &&
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        navigate('/login');
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex justify-center bg-[#23075e] w-full lg:w-[83%] min-h-screen ml-0 lg:ml-1 px-4 md:px-0">
      <div className="bg-[#381f6e] card w-96 text-white mt-6 h-fit">
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
