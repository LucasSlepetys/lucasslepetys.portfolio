import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaXmark,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa6';
import Wrapper from '../Wrappers/sidebar';
import SocialLinks from './SocialLinks';

const SideBar = ({ isSideOpen, openCloseSideBar }) => {
  return (
    <Wrapper>
      <aside className={isSideOpen ? 'open' : ''}>
        <div className='side-center'>
          <div className='links'>
            <Link to='/' className='link'>
              Home
            </Link>
            <Link to='/' className='link'>
              About
            </Link>
            <Link to='/' className='link'>
              Projects
            </Link>
            <Link to='/' className='link'>
              Contact
            </Link>
          </div>
          <SocialLinks className='socialLinks' />
        </div>
        <FaXmark className='close-side' onClick={openCloseSideBar} />
      </aside>
    </Wrapper>
  );
};

export default SideBar;
