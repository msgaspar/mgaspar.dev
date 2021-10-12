import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const socialLinks = {
  github: {
    label: 'GitHub',
    link: 'https://github.com/msgaspar',
    color: '#000',
    icon: <SiGithub />,
  },
  linkedin: {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/matheussgaspar/',
    color: '#0A66C2',
    icon: <SiLinkedin />,
  },
};

export { socialLinks };
