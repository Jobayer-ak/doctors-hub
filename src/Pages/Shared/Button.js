import React from 'react';

const Button = ({children}) => {
    return (
        <div>
            <button className="btn btn-primary uppercase bg-gradient-to-r from-secondary to-primary text-white">{children}</button>
        </div>
    );
};

export default Button;