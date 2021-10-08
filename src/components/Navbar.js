/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

function Navbar() {
  return (
    <nav
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        width: '100px',
        p: t => t.space[2],
        flexShrink: 0,
        mt: t => t.space[4],
        ml: t => t.space[4],
        '> a': {
          textDecoration: 'none',
          color: t => t.colors.muted,
          fontFamily: t => t.fonts.heading,
          fontSize: t => t.fontSizes[2],
          fontWeight: t => t.fontWeights.light,
          transition: 'color 0.3s',

          '&:hover': {
            color: 'text',
          },

          '& + a': {
            mt: '6px',
          },
        },
        '.active': {
          color: 'text',
          fontWeight: 'bold',
        },
      }}
    >
      <Link to="/about" activeClassName="active">
        about me
      </Link>
      <Link to="/projects" activeClassName="active">
        projects
      </Link>
      <Link to="/contact" activeClassName="active">
        contact
      </Link>
    </nav>
  );
}

export default Navbar;
