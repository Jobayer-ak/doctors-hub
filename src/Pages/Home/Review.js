import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card lg:max-w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>
          LoremQuis cillum adipisicing adipisicing aliquip duis ad in aliqua id
          commodo dolor laborum irure. Voluptate anim est duis irure occaecat
          cillum velit do
        </p>
        <div className="flex items-center ">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={review.img} alt="review"/>
            </div>
          </div>
          <div>
            <h4 className="text-xl">{review.name}</h4>
            <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
