import React from "react";
import Chair from "../../assets/images/chair.png";
import Button from "../Shared/Button";
import bg from "../../assets/images/bg.png";

const Banner = () => {
  return (
    <div style={{
      background: `url(${bg})`,
      backgroundPosition: "center",
      backgroundSize: "cover"
    }} className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-x-12">
        <img
          src={Chair}
          className="lg:max-w-lg sm:max-w-sm rounded-lg shadow-2xl"
          alt="Dantist Chair"
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smiles Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
