import { Presentation } from './../Components/Presentation';
import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar';

const HomePage = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const openCloseSideBar = () => {
    setIsSideOpen(!isSideOpen);
  };
  return (
    <>
      <NavBar openCloseSideBar={openCloseSideBar} />
      <SideBar isSideOpen={isSideOpen} openCloseSideBar={openCloseSideBar} />
      <div className='mains'>
        <Presentation />
        <Presentation />
        <Presentation />
      </div>
    </>
  );
};

export default HomePage;
