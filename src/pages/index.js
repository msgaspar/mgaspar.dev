/** @jsx jsx */
import { jsx } from 'theme-ui';
import Header from '../components/Header';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { keyframes } from '@emotion/react';
import SocialLinksBar from '../components/SocialLinksBar';

const morph = keyframes({
  '0%': {
    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
  },

  '50%': {
    borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
  },
});

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
        <main
          sx={{
            flexGrow: 1,
            p: 2,
            pl: 4,
            display: 'flex',
            justifyContent: 'space-between',

            p: {
              fontFamily: 'Signika',
              // fontFamily: 'Source+Sans+Pro',
              fontWeight: '300',
              // color: t => t.colors.gray[7],
              fontSize: t => t.fontSizes[2],
              maxWidth: '600px',
            },
          }}
        >
          <section>
            <div
              sx={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                mb: '40px',
              }}
            >
              <StaticImage
                src="../images/profile.jpeg"
                layout="fixed"
                alt="A photo of Matheus"
                width={150}
                placeholder="blurred"
                draggable="false"
                sx={{
                  position: 'absolute',
                  filter: 'blur(80px) opacity(0.35)',
                  transform: 'scale(1.5) translateX(5%)',
                  borderRadius: '50%',
                }}
              />
              <StaticImage
                src="../images/profile.jpeg"
                layout="fixed"
                alt="A photo of Matheus"
                width={180}
                placeholder="blurred"
                draggable="false"
                sx={{
                  borderRadius: '50%',
                  filter: 'drop-shadow(0px 0px 20px hsl(0deg 0% 0% / 0.15))',
                }}
              />
              <h1
                sx={{
                  position: 'absolute',
                  bottom: -10,
                  left: 190,
                  fontFamily: 'Nunito+Sans',
                  letterSpacing: -0.5,
                  color: t => t.colors.gray[9],
                  fontWeight: '600',
                  fontSize: t => t.fontSizes[6],
                  m: 0,
                  filter: 'drop-shadow(0px 0px 30px #fff)',
                }}
              >
                Hi! I'm Matheus
              </h1>
            </div>
            <p>
              I'm a 29-year-old engineer from Brazil, taking the first steps in
              my career as a software developer. Currently, I'm studying front
              and back-end web development at the awesome school Trybe, with
              focus on JavaScript, React and Node.js.
            </p>
            <p>
              I am fascinated about how computers can make our lives easier,
              solve annoying problems and even help us build great habits. They
              can also provide us beautiful and life-changing experiences! And
              one of the things I enjoy the most is making these things happen.
              When I'm not coding or studying, you'll probably find me cooking,
              enjoying nature, traveling or spending some time with family and
              friends. Always with a good cup a coffee.
            </p>
            <p>
              It's been one year since I left Civil Engineering to dive deep
              into the world of software, and it's just the beginning of an
              amazing journey.
            </p>
          </section>
        </main>
        <nav
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            p: 2,
            flexShrink: 0,
            mr: 2,

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
      </div>
    </div>
  );
};

export default IndexPage;
