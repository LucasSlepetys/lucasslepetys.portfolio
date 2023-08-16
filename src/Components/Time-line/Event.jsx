import React from 'react';

const Event = ({ num, year, text }) => {
  return (
    <div className='event'>
      <div className='number'>
        <p>{num}</p>
      </div>
      <div className='info'>
        <p className='year'>{year}</p>
        <p className='text'>{text}</p>
      </div>
    </div>
  );
};

export default Event;
