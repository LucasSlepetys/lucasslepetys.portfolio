import React from 'react';
import Intro from '../Components/Intro';
import TimeLine from '../Components/Time-line/TimeLine';
import Services from '../Components/Services/Services';
import { Helmet } from 'react-helmet-async';

function Landing() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name='description' content='Welcome to the Slepetys portfolio!' />
        <link rel='canonical' href='/' />
      </Helmet>
      <Intro />
      <Services />
      <TimeLine />
    </>
  );
}

export default Landing;
