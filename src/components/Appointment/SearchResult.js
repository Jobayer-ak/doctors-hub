import React from 'react';

const SearchResult = () => {
    return (
        <div className='w-full min-h-screen bg-[#23075e]'>
            <h2 className='text-white font-bold text-xl'>Hello</h2>
            <input type='date'min={new Date().toISOString().split('T')[0]}/>
        </div>
    );
};

export default SearchResult;