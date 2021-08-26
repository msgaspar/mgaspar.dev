/** @jsx jsx */
import { jsx } from 'theme-ui';
import Header from '../components/Header';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 'full',
        height: '100vh',
      }}
    >
      <Header />
      <div
        sx={{
          flexGrow: 1,
          display: 'flex',
          width: 'full',
          maxWidth: t => t.breakpoints[1],
        }}
      >
        <nav
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',

            '> a': {
              textDecoration: 'none',
              color: t => t.colors.gray[6],
              fontFamily: t => t.fonts.quicksand,
              fontSize: t => t.fontSizes[0],
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
        <main
          sx={{
            flexGrow: 1,
          }}
        ></main>
      </div>
    </div>
  );
};

export default IndexPage;
