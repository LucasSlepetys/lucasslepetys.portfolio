import React from 'react';
import Wrapper from './time-line';
import { events } from '../../data';
import Event from './Event';

const TimeLine = () => {
  return (
    <Wrapper>
      <div className='title'>
        <p>Timeline</p>
        <div className='underline'></div>
      </div>
      <div className='timeline'>
        {events.map((event, index) => {
          const { year, text } = event;
          return <Event key={index} num={index + 1} year={year} text={text} />;
        })}
      </div>
    </Wrapper>
  );
};

export default TimeLine;
