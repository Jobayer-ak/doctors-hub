import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './review.css';
import { useForm } from 'react-hook-form';
import { Puff } from 'react-loader-spinner';
import baseURL from '../../utils/baseURL';
import Swal from 'sweetalert2';
import reviewImage from '../../assets/review/comment.png';

const Review = ({ userData }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [loading, setLoading] = useState(false);

  const { name, email, gender, imageURL } = userData;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    const reviewInfo = {
      name: name,
      email: email,
      gender: gender,
      imageURL: imageURL,
      review: data.review,
      rating: parseInt(data.rating),
    };

    await baseURL
      .post('/add-review', reviewInfo, {
        withCredentials: true,
      })
      .then((res) => {
        reset();
        setRating(null);
        setLoading(false);
        if (res.status === 200) {
          return Swal.fire('Success', res.data.message, 'success');
        }
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 403) {
          return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message,
          });
        }

        if (err.response.status === 409) {
          return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message,
          });
        }
      });

    setLoading(false);
  };

  return (
    <div className="bg-[#23075e] mt-1 pb-12 relative">
      <h1 className="text-[#f68685] text-3xl font-bold text-center pt-12 pb-12">
        Add Your Review
      </h1>
      <div className="md:flex md:justify-around md:items-center">
        <div className="hidden lg:block">
          <img src={reviewImage} alt="comment" className="w-full md:[60%]" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-center review-form"
        >
          <textarea
            type="text"
            placeholder="Write your review here...."
            rows={8}
            cols={30}
            className="bg-[#3a5191] px-4 py-2 text-white rounded-md focus:bg-[#35368a] outline-0 border-none"
            {...register('review', {
              required: {
                value: true,
                message: 'Review is required!',
              },
              minLength: {
                value: 15,
                message: 'At least 15 characters!',
              },
              maxLength: {
                value: 150,
                message: 'Too large! Maximum 150 characters!',
              },
            })}
          />
          {errors.review && (
            <p className="text-white text-left pl-8 md:pl-2 mt-2 ">
              {errors.review?.message}
            </p>
          )}
          <br />

          <div className="text-left pl-8 md:pl-2 lg:px-2 py-4 mt-4 flex items-center">
            <span className="mr-2 text-white font-bold">Rating:</span>
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;

              return (
                <label key={i}>
                  <input
                    type="radio"
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
                    {...register('rating', {
                      required: {
                        value: true,
                        message: 'Rating is required!',
                      },
                    })}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    color={
                      ratingValue <= (rating || hover) ? '#ffc107' : '#e4e5e9'
                    }
                    className="start mr-1 cursor-pointer"
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
          {errors.rating && (
            <p className="text-white text-left pl-8 md:pl-2 mt-2">
              {errors.rating?.message}
            </p>
          )}
          {rating ? (
            <h2 className="text-white text-xl text-left pl-8 md:pl-2">
              Your rating is: {rating}
            </h2>
          ) : (
            ''
          )}

          {loading ? (
            <div className="text-center flex justify-center">
              <Puff
                height="40"
                width="40"
                radius={1}
                color="#14aab1"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          ) : (
            <button
              type="submit"
              className="text-[#381f6e] btn bg-[#f68685] rounded-sm mt-6 hover:bg-slate-500 hover:text-white"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Review;
