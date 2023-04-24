import React from 'react';
import { useQuery } from 'react-query';
import baseURL from '../../../utils/baseURL';
import Loader from '../../common/Loading/Loader';
import {
  faQuoteLeft,
  faQuoteRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AllReviews = () => {
  const { data, isLoading } = useQuery(['reviews'], async () => {
    const res = await baseURL.get('/get-reviews', {
      withCredentials: true,
    });
    const result = res.data;
    return result;
  });

  if (isLoading) {
    return <Loader />;
  }

  const reviews = data.result;
  console.log('reviews: ', reviews);

  return (
    <div className="w-full min-h-screen px-4">
      {/* user comment card */}

      <div className="grid grid-cols-2 gap-6">
        {reviews.map((r, index) => (
          <div className="w-full h-50 bg-[#260078] p-4 rounded-sm">
            <div className="text-white">
              <p className="italic">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  size="sm"
                  className="pr-2"
                />

                {r.review}
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  size="sm"
                  className="pl-2"
                />
              </p>
            </div>
            <div className="text-left mt-2" key={index}>
              {[...Array(r.rating)].map((r, index) => (
                <>
                  <FontAwesomeIcon icon={faStar} className="text-[#ffc107]" />
                </>
              ))}
              <span className="ml-3 italic text-white">( {r.rating} )</span>
            </div>
            <div className="mt-6">
              <div className="flex gap-6">
                <img src={r.imageURL} alt="" className="w-[15%] rounded-full" />
                <div className="text-white">
                  <h3 className="text-xl font-bold">{r.name}</h3>
                  <p className="italic">{r.email}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
