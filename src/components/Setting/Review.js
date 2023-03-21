import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './review.css';

const Review = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    console.log('ratting: ', rating);
  }, [rating]);

  const handleReview = (e) => {
    e.preventDefault();
    const newRating = parseFloat(e.target.value);
    setRating(newRating);

    // console.log('Comment: ', comment);
  };

  return (
    <div className="w-[100%] bg-gradient-to-r from-[#101a2d] to-[#173350] to-[#1c2a50] mt-20 rounded-sm pb-12">
      <h1 className="text-white text-3xl font-bold text-center py-6">
        Add Your Review
      </h1>
      <div className="flex justify-center">
        <form onSubmit={handleReview} className="text-center">
          <textarea
            type="text"
            placeholder="Write Your Review"
            name="rev"
            rows="8"
            cols="50"
            // onChange={(e) => setComment(e.target.value)}
            className="bg-[#1c2a4f] px-4 py-2 text-white rounded-md focus:bg-[#35368a] outline-0 border-none"
          />
          <br />

          <div className="text-left px-2 py-4 flex items-center">
            <span className="mr-2 text-white font-bold">Rating:</span>
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;

              return (
                <label>
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
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

            <h2 className="text-white">{rating}</h2>

          </div>

          <button
            type="submit"
            className="text-[#13bab9] btn bg-[#403daf] rounded-md mt-8"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Review;
