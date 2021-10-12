/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

function Navbar() {
  return (
    <NavContainer>
      <NavLink to="/" title="home" />
      <NavLink to="/projects" title="projects" />
      <NavLink to="/about" title="about me" />
      <NavLink to="/contact" title="contact" />
    </NavContainer>
  );
}

const NavContainer = props => (
  <nav
    {...props}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '300px',
    }}
  />
);

const NavLink = ({ to, title }) => (
  <div
    to={to}
    sx={{
      '> a': {
        textDecoration: 'none',
        color: t => t.colors.muted,
        fontFamily: t => t.fonts.body,
        fontSize: t => t.fontSizes[2],
        fontWeight: t => t.fontWeights.regular,
        transition: 'color 0.2s',
        '&:hover': {
          color: 'text',
        },
      },
      '.active': {
        color: 'text',
        transition: 'none',
      },
    }}
  >
    <Link
      to={to}
      activeClassName="active"
      partiallyActive={to === '/' ? false : true}
    >
      {title}
    </Link>
  </div>
);

export { Navbar };
