import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa6';
import { HiOutlineCode } from 'react-icons/hi';
import { MdOutlineDesignServices } from 'react-icons/md';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';

export const pageLinks = [
  {
    to: '/',
    name: 'Home',
  },
  {
    to: 'about',
    name: 'About',
  },
  {
    to: 'projects',
    name: 'Projects',
  },
  {
    to: 'contact',
    name: 'Contact',
  },
];

export const socialLinks = [
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

export const events = [
  {
    year: 2017,
    text: 'Arrived in Germany and started learning English from scratch',
  },
  {
    year: 2018,
    text: 'Joined a parkour group in Wiesbaden and formed a team',
  },
  {
    year: 2019,
    text: 'Moved to FISO, English is getting better. Covid hits and I started studying from my house. Took the opportunity to start learning Python (my first ever programming language)',
  },
  {
    year: 2020,
    text: 'Still in DLP & Sometimes in school, build my first water rocket mini simulator with my dad. Got my Physics & ESL award. Doing pretty good at Parkour and learning data analysis with Python and game development',
  },
  {
    year: 2021,
    text: 'Fully back to school, now fluent in English, started learning Javascript and CSS.',
  },
];

export const services = [
  {
    icon: <HiOutlineCode className='icon' />,
    title: 'Web Development',
    text: 'I will give life to whatever idea, template or sketch you might have. Using ReactJS and other libraries and/or frameworks',
  },
  {
    icon: <MdOutlineDesignServices className='icon' />,
    title: 'Web Design',
    text: 'I will draw your ideas into paper (online paper). I will make it responsive (web & mobile), and will add all necessary details to make it look amazing',
  },
  {
    icon: <LiaChalkboardTeacherSolid className='icon' />,
    title: 'Mentor',
    text: 'I will teach you the foundation and more of one of my top 3 skills: web development, calisthenics and parkour',
  },
];
