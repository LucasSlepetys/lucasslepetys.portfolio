import React from 'react';
import testIMG from '../assets/testIMG.png';
import { FaHouseUser, FaGithub } from 'react-icons/fa';
import Wrapper from '../Wrappers/projects';
import { createClient } from 'contentful';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: 'master',
  accessToken: import.meta.env.VITE_CONTENT_API,
});

export const loader = async (data) => {
  const response = await client.getEntries({ content_type: 'projects' });
  console.log(response);
  const projects = response.items.map((item) => {
    const { title, image, sourceCode, description } = item.fields;
    const url = item.fields?.url;
    const id = item.sys.id;
    const img = image?.fields?.file?.url;
    return { title, url, id, img, sourceCode, description };
  });

  return { projects };
};

const Projects = () => {
  const { projects } = useLoaderData();

  return (
    <Wrapper>
      <Helmet>
        <title>Projects</title>
        <meta name='description' content='Find all of Lucas projects here!' />
        <link rel='canonical' href='/projects' />
      </Helmet>
      <div className='title-container'>
        <div className='title'>
          <p>My Projects</p>
          <div className='underline'></div>
        </div>
      </div>
      <div className='projects-center'>
        <div className='projects'>
          {projects.map((project) => {
            const { title, url, id, img, sourceCode, description } = project;
            return (
              <div key={id} className='project'>
                <div className='img-container'>
                  <img src={img} alt='Lucas' />
                </div>
                <div className='info-container'>
                  <a className='name' href={url}>
                    {title}
                  </a>
                  <p className='text'>{description}</p>
                  <div className='source'>
                    <FaGithub />
                    <a href={sourceCode}>Source Code</a>
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
    </Wrapper>
  );
};

export default Projects;
