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
        p: t => t.space[2],
        flexShrink: 0,
        mt: t => t.space[5],
        '> a': {
          textDecoration: 'none',
          color: t => t.colors.muted,
          fontFamily: t => t.fonts.heading,
          fontSize: t => t.fontSizes[1],
          fontWeight: t => t.fontWeights.light,

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
