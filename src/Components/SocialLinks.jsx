import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa6';

const SocialLinks = () => {
  const links = [
    {
      URL: '',
      icon: <FaFacebook className='icon' />,
    },
    {
      URL: '',
      icon: <FaInstagram className='icon' />,
    },
    {
      URL: '',
      icon: <FaLinkedin className='icon' />,
    },
    {
      URL: '',
      icon: <FaGithub className='icon' />,
    },
  ];

  return (
    <Wrapper>
      <div className='social-links'>
        {links.map((link, index) => {
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
