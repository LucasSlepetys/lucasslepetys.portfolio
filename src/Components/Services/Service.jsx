import React from 'react';

const Service = ({ icon, title, text }) => {
  return (
    <div className='service'>
      {icon}
      <div className='title'>{title}</div>
      <div className='underline'></div>
      <div className='text'>
        {text}
      </div>
    </div>
  );
};

export default Service;
