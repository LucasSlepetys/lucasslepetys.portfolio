import React from 'react';
import testIMG from '../assets/lucas.jpg';
import { FaHouseUser, FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <div className='projects-container'>
      <div className='title-container'>
        <div className='title'>
          <p>My Projects</p>
          <div className='underline'></div>
        </div>
      </div>
      <div className='projects-center'>
        <div className='projects'>
          {Array(3)
            .fill(null)
            .map((_, index) => {
              return (
                <div key={index} className='project'>
                  <div className='img-container'>
                    <img src={testIMG} alt='Lucas' />
                  </div>
                  <div className='info-container'>
                    <p className='name'>Project Name</p>
                    <p className='text'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Enim placeat repellat voluptatem reiciendis aspernatur
                      quisquam ea hic, sapiente atque eius?
                    </p>
                    <div className='source'>
                      <FaGithub />
                      <p>Source Code</p>
                    </div>
                    <div className='icon-container'>
                      <FaHouseUser className='icon' />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
