import React from 'react';
import Contact_CSS from '../Wrappers/contact';

const Contact = () => {
  return (
    <Contact_CSS>
      <div className='title-container'>
        <div className='title'>
          <p>Contact</p>
          <div className='underline' />
        </div>
      </div>
      <div className='info'>
        <p>
          If you wish to establish contact, feel free to send an email
          <a href='mailto:lucas.slepetyss@gmail.com?subject=Contact from Portfolio'>
            {' '}
            lucas.slepetyss@gmail.com
          </a>
          .
        </p>
        <p>
          Additionally, for more avenues of communication, you can reach out to
          me on Instagram at
          <a href='https://www.instagram.com/lucasslepetys/'> @LucasSlepetys</a>
          .
        </p>
      </div>
    </Contact_CSS>
  );
};

export default Contact;
