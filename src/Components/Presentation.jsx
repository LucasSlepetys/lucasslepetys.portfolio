import React from 'react';
import SocialLinks from '../Components/SocialLinks';
import picture from '../assets/lucas.jpg';

export function Presentation() {
  return (
    <main>
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
    </main>
  );
}
