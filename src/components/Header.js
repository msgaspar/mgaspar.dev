/** @jsx jsx */
import { jsx } from 'theme-ui';
import ColorModeToggle from './ColorModeToggle';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';

function Header() {
  return (
    <div sx={headerLayout}>
      <div sx={headerContainer}>
        <div sx={mainHeading}>
          <h1>
            Matheus Gaspar<span>/web developer</span>
          </h1>
          <div sx={socialLinks}>
            <a href="http://github.com" sx={{ '&:hover': { color: '#000' } }}>
              <FaGithub />
            </a>
            <a
              href="http://linkedin.com"
              sx={{ '&:hover': { color: '#0a66c2' } }}
            >
              <SiLinkedin />
            </a>
            <a
              href="msgaspar@outlook.com"
              sx={{ '&:hover': { color: '#da4a24' } }}
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
        <ColorModeToggle />
      </div>
    </div>
  );
}

export default Header;

const headerLayout = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: t => t.space[5],
  flexShrink: 0,
};

const headerContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: t => t.breakpoints[1],
};

const mainHeading = {
  display: 'flex',
  alignItems: 'center',

  h1: {
    fontFamily: t => t.fonts.heading,
    fontSize: t => t.fontSizes[1],
    letterSpacing: '-0.2px',
    fontWeight: t => t.fontWeights.bold,
    color: t => t.colors.gray[9],

    '> span': {
      color: t => t.colors.gray[5],
      fontWeight: t => t.fontWeights.regular,
    },

    '&:after': {
      content: '""',
      display: 'inline-block',
      verticalAlign: 'middle',
      mx: t => t.space[2],
      width: t => t.space[2],
      height: '1px',
      backgroundColor: t => t.colors.gray[4],
    },
  },
};

const socialLinks = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  px: '2px',

  a: {
    lineHeight: 1,
    verticalAlign: 'middle',
    mt: '3px',
    fontSize: t => t.fontSizes[3],
    color: t => t.colors.gray[4],
    transition: '0.2s ease',

    '&:hover': {
      transform: 'translateY(-1px)',
    },
  },
};
