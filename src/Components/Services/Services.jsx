import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import Wrapper from './serviceWrap';
import { services } from '../../data';
import Service from './Service';

const Services = () => {
  return (
    <Wrapper>
      <div className='title'>
        <p>Services</p>
        <div className='underline' />
      </div>
      <div className='services'>
        {services.map((service, index) => {
          return <Service key={index} {...service} />;
        })}
      </div>
    </Wrapper>
  );
};

export default Services;
