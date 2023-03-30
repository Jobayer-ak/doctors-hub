import React from 'react';
import notFound from "../../assets/404/404-removebg-preview.png"

const NotFound = () => {
    return (
        <div className='bg-[#23075e] w-full lg:w-[83%] min-h-screen ml-0 lg:ml-1 flex justify-center'>
            
            <img src={notFound} alt=''className='w-full lg:w-[55%] h-full  lg:h-[80vh]'/>
        </div>
    );
};

export default NotFound;