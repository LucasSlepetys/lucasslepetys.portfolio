import React from 'react';
import styled from 'styled-components';
import { socialLinks } from '../data';

const SocialLinks = () => {
  return (
    <Wrapper>
      <div className='social-links'>
        {socialLinks.map((link, index) => {
          const { URL, icon } = link;
          return (
            <ul key={index}>
              <li>
                <a href={URL}>{icon}</a>
              </li>
            </ul>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .social-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .social-links ul {
    text-decoration: none;
    list-style-type: none;
  }

  .social-links ul a .icon {
    font-size: 25px;
    color: var(--color-black);
  }
`;
export default SocialLinks;
