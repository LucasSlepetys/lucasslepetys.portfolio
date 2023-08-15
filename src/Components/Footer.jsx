import React from 'react';
import SocialLinks from './SocialLinks';
import FooterWrap from '../Wrappers/footer';

const Footer = () => {
  return (
    <FooterWrap>
      <div className='center'>
        <div className='social'>
          <SocialLinks />
        </div>
        <p>@ 2023 Lucas Slepetys. All Rights Reserved</p>
      </div>
    </FooterWrap>
  );
};

export default Footer;
