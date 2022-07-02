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
  SiLaravel,
  SiPhp,
} from 'react-icons/si';
import { FiDatabase } from 'react-icons/fi';
import { AiOutlineFundProjectionScreen, AiOutlineTeam } from 'react-icons/ai';
import { BiFootball, BiPencil } from 'react-icons/bi';
import { BsJournalCode } from 'react-icons/bs';
import {
  MdRestaurantMenu,
  MdContactPage,
  MdQuiz,
  MdWorkOutline,
} from 'react-icons/md';
import { HiLightBulb } from 'react-icons/hi';

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
  ideas: {
    color: '#F7DF1E',
    icon: <HiLightBulb />,
  },
  laravel: {
    description: 'Laravel',
    color: '#FF2D20',
    icon: <SiLaravel />,
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
  other: {
    color: 'muted',
    icon: <BsJournalCode />,
  },
  php: {
    description: 'PHP',
    color: '#777BB4',
    icon: <SiPhp />,
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
  work: <MdWorkOutline />,
};

export { techs, otherIcons };
