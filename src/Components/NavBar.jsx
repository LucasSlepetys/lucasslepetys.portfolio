import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa';
import Wrapper from '../Wrappers/navbar';
import { pageLinks } from '../links';

const SideBar = ({ openCloseSideBar }) => {
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass('fixed-nav') : setStickyClass('');
    }
  };

  return (
    <Wrapper className={`${stickyClass}`}>
      <div className='nav-center'>
        <div className='logo'>
          <p>
            Lucas <span>Slepetys</span>
          </p>
        </div>
        <div className='links'>
          {pageLinks.map((link, index) => {
            return (
              <Link key={index} to={link.to} className='link'>
                {link.name}
              </Link>
            );
          })}
        </div>
        <FaAlignJustify className='side-bar-icon' onClick={openCloseSideBar} />
      </div>
    </Wrapper>
  );
};

export default SideBar;
