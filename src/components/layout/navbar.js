/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

function Navbar() {
  return (
    <NavContainer>
      <NavLink to="/" title="home" />
      <NavLink to="/#projects" title="work" />
      <NavLink to="/#about" title="about me" />
      {/* <NavLink to="/#contact" title="contact" /> */}
    </NavContainer>
  );
}

const NavContainer = props => (
  <nav
    {...props}
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
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
        color: 'muted',
        fontFamily: 'body',
        fontSize: 2,
        fontWeight: 'regular',
        transition: 'color 0.2s',
        '&:hover': {
          color: 'text',
        },
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
