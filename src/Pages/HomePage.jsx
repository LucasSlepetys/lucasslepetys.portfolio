import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar';
import SocialLinks from '../Components/SocialLinks';
import picture from '../assets/lucas.jpg';

const HomePage = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const openCloseSideBar = () => {
    setIsSideOpen(!isSideOpen);
  };
  return (
    <main>
      <NavBar openCloseSideBar={openCloseSideBar} />
      <SideBar isSideOpen={isSideOpen} openCloseSideBar={openCloseSideBar} />
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
};

export default HomePage;
