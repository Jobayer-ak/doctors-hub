import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
    const services =[
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "",
            img: fluoride,
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: "",
            img: cavity,
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: "",
            img: whitening
        }
        
    ];
  
    return (
    <div className="my-20 px-4">
      <div className="text-center ">
        <h3 className="text-primary text-xl font-bold uppercase">Services</h3>
        <h2 className="text-4xl">Services We Provide</h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-12 gap-10">
        {
            services.map(service => <Service key={services._id} service={service}/>)
        }
      </div>
    </div>
  );
};

export default Services;
