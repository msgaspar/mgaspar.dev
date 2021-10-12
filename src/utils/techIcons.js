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
} from 'react-icons/si';

const techs = {
  gatsby: {
    description: 'Gatsby',
    color: '#663399',
    icon: <SiGatsby />,
  },
  javascript: {
    description: 'JavaScript',
    color: '#F7DF1E',
    icon: <SiJavascript />,
  },
  nextjs: {
    description: 'Next.js',
    color: '#000000',
    icon: <SiNextdotjs />,
  },
  nodejs: {
    description: 'Node.js',
    color: '#339933',
    icon: <SiNodedotjs />,
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
  typescript: {
    description: 'TypeScript',
    color: '#3178C6',
    icon: <SiTypescript />,
  },
};

export { techs };
