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
            p: 2,
            flexShrink: 0,

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
            p: 2,
            pl: 4,

            '> p': {
              fontFamily: 'Signika',
              // fontFamily: 'Source+Sans+Pro',
              fontWeight: '300',
              // color: t => t.colors.gray[7],
              fontSize: t => t.fontSizes[1],
            },
          }}
        >
          <h1
            sx={{
              fontFamily: 'Nunito+Sans',
              letterSpacing: -0.5,
              color: t => t.colors.gray[9],
              fontWeight: '500',
              fontSize: t => t.fontSizes[3],
              m: 0,
            }}
          >
            Hi! My name is Matheus 👋
          </h1>
          <p>
            I'm a 29-year-old engineer from Brazil, taking the first steps in my
            career as a software developer. Currently, I'm studying front and
            back-end web development at the awesome school Trybe, with focus on
            JavaScript, React and Node.js.
          </p>
          <p>
            I am fascinated about how computers can make our lives easier, solve
            annoying problems and even help us build great habits. And one of
            the things I enjoy the most is making these things happen. When I'm
            not coding or studying, you'll probably find me cooking, enjoying
            nature, traveling or spending some time with family and friends.
            Always with a good cup a coffee.
          </p>
          <p>
            It's been one year since I left Civil Engineering to dive deep into
            the world of software, and it's just the beginning of an amazing
            journey.
          </p>
        </main>
      </div>
    </div>
  );
};

export default IndexPage;
