import React from 'react';
import { Link } from 'react-router-dom';
import { FaXmark } from 'react-icons/fa6';
import Wrapper from '../Wrappers/sidebar';
import SocialLinks from './SocialLinks';
import { pageLinks } from '../data';

const SideBar = ({ isSideOpen, openCloseSideBar }) => {
  return (
    <Wrapper style={isSideOpen ? { width: '100%' } : { width: '0%' }}>
      <div className='side-center'>
        <div className='links'>
          {pageLinks.map((link, index) => {
            return (
              <Link
                key={index}
                to={link.to}
                className='link'
                onClick={openCloseSideBar}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <SocialLinks className='socialLinks' />
      </div>
      <FaXmark className='close-side' onClick={openCloseSideBar} />
    </Wrapper>
  );
};

export default SideBar;
