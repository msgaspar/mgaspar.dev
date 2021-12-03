import React from 'react';
import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiPostgresql,
  SiJavascript,
  SiGatsby,
  SiRedux,
  SiGit,
  SiBootstrap,
  SiSequelize,
  SiMysql,
} from 'react-icons/si';
import { FiDatabase } from 'react-icons/fi';
import { AiOutlineFundProjectionScreen, AiOutlineTeam } from 'react-icons/ai';
import { BiFootball, BiPencil } from 'react-icons/bi';
import { MdRestaurantMenu, MdContactPage, MdQuiz } from 'react-icons/md';

const techs = {
  bootstrap: {
    description: 'Bootstrap',
    color: '#7952B3',
    icon: <SiBootstrap />,
  },
  database: {
    color: 'muted',
    icon: <FiDatabase />,
  },
  gatsby: {
    description: 'Gatsby',
    color: '#663399',
    icon: <SiGatsby />,
  },
  git: {
    description: 'Git',
    color: '#F05032',
    icon: <SiGit />,
  },
  group: {
    description: 'Group project',
    color: 'text',
    icon: <AiOutlineTeam />,
  },
  javascript: {
    description: 'JavaScript',
    color: '#F7DF1E',
    icon: <SiJavascript />,
  },
  mysql: {
    description: 'MySQL',
    color: '#4479A1',
    icon: <SiMysql />,
  },
  nextjs: {
    description: 'Next.js',
    color: 'text',
    icon: <SiNextdotjs />,
  },
  nodejs: {
    description: 'Node.js',
    color: '#339933',
    icon: <SiNodedotjs />,
  },
  project: {
    color: 'muted',
    icon: <AiOutlineFundProjectionScreen />,
  },
  postgres: {
    description: 'PostgreSQL',
    color: '#4169E1',
    icon: <SiPostgresql />,
  },
  react: {
    description: 'React',
    color: '#61DAFB',
    icon: <SiReact />,
  },
  redux: {
    description: 'Redux',
    color: '#764ABC',
    icon: <SiRedux />,
  },
  sequelize: {
    description: 'Sequelize',
    color: '#52B0E7',
    icon: <SiSequelize />,
  },
  typescript: {
    description: 'TypeScript',
    color: '#3178C6',
    icon: <SiTypescript />,
  },
};

const otherIcons = {
  football: <BiFootball />,
  quiz: <MdQuiz />,
  restaurant: <MdRestaurantMenu />,
  pencil: <BiPencil />,
  portfolio: <MdContactPage />,
};

export { techs, otherIcons };
