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
        p: 2,
        flexShrink: 0,

        '> a': {
          textDecoration: 'none',
          color: t => t.colors.gray[6],
          fontFamily: 'Nunito+Sans',
          fontSize: t => t.fontSizes[1],
          fontWeight: '500',

          '& + a': {
            mt: '4px',
          },
        },
      }}
    >
      <Link to="/">about me</Link>
      <Link to="/">projects</Link>
      <Link to="/">contact</Link>
    </nav>
  );
}

export default Navbar;
