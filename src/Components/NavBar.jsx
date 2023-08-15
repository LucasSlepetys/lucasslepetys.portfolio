import React from 'react';
import { Link } from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa';
import Wrapper from '../Wrappers/navbar';

const SideBar = ({ openCloseSideBar }) => {
  return (
    <Wrapper>
      <nav>
        <div className='nav-center'>
          <div className='logo'>
            <p>
              Lucas <span>Slepetys</span>
            </p>
          </div>
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
          <FaAlignJustify
            className='side-bar-icon'
            onClick={openCloseSideBar}
          />
        </div>
      </nav>
    </Wrapper>
  );
};

export default SideBar;
