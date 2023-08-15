import React from 'react';
import SocialLinks from './SocialLinks';
import picture from '../assets/lucas.jpg';
import Wrapper from '../Wrappers/main';

function Intro() {
  return (
    <Wrapper>
      <div className='center-div'>
        <div className='main-title'>
          <div className='upperline' />
          <p className='name'>I'm Lucas</p>
          <p className='description'>
            Web Developer & Always learning new things
          </p>
          <button type='button' className='btn'>
            hire me
          </button>
          <SocialLinks className='socialLinks' />
        </div>
        <div className='img-border'>
          <div className='border'></div>
          <img src={picture} alt='Me, Lucas' className='img' />
        </div>
      </div>
    </Wrapper>
  );
}

export default Intro;
