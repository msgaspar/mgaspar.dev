/** @jsx jsx */
import { jsx } from 'theme-ui';
import { StaticImage } from 'gatsby-plugin-image';
import { useColorMode } from '@theme-ui/color-modes';

import Container from '../components/Container';

const profileImgPath = '../images/profile.jpeg';

const IndexPage = () => {
  return (
    <Container>
      <div
        sx={{
          header: {
            my: t => t.space[5],
          },
          p: {
            fontFamily: t => t.fonts.body,
            fontWeight: t => t.fontWeights.light,
            fontSize: t => t.fontSizes[2],
            maxWidth: '550px',
            mx: 'auto',
            lineHeight: t => t.lineHeights.body,
          },
        }}
      >
        <MainHeader />
        <section>
          <p>
            I'm a 29-year-old engineer from Brazil, taking the first steps in my
            career as a software developer. Currently, I'm studying front and
            back-end web development at the awesome school Trybe, with focus on
            JavaScript, React and Node.js.
          </p>
          {/* <p>
            I am fascinated about how computers can make our lives easier, solve
            annoying problems and even help us build great habits. They can also
            provide us beautiful and life-changing experiences! And one of the
            things I enjoy the most is making these things happen. When I'm not
            coding or studying, you'll probably find me cooking, enjoying
            nature, traveling or spending some time with family and friends.
            Always with a good cup a coffee.
          </p> */}
          {/* <p>
            It's been one year since I left Civil Engineering to dive deep into
            the world of software, and it's just the beginning of an amazing
            journey.
          </p> */}
          <p>
            This is my personal spot in the internet - learn more about me or
            check what I've been working on recently.
          </p>
        </section>
      </div>
    </Container>
  );
};

const MainHeader = () => {
  const [colorMode] = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <header
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        position: 'relative',
        width: 'fit-content',
        pl: '67px',
      }}
    >
      <StaticImage
        src={profileImgPath}
        layout="fixed"
        width={150}
        placeholder="blurred"
        draggable="false"
        sx={{
          position: 'absolute',
          filter: `blur(80px) opacity(${isDark ? 1 : 0.35})`,
          transform: 'scale(1.5) translateX(15%) translateY(15%)',
          borderRadius: '50%',
        }}
      />
      <StaticImage
        src={profileImgPath}
        layout="fixed"
        alt="A photo of Matheus"
        width={150}
        placeholder="blurred"
        draggable="false"
        sx={{
          borderRadius: '50%',
          filter: 'drop-shadow(0px 0px 20px hsl(0deg 0% 0% / 0.15))',
          boxShadow: t => `0 0 0 3px ${t.colors.background},0 0 0 6px #9580ff`,
        }}
      />
      <h1
        sx={{
          fontFamily: t => t.fonts.heading,
          letterSpacing: -0.5,
          color: t => t.colors.heading,
          fontWeight: t => t.fontWeights.bold,
          fontSize: t => t.fontSizes[7],
          m: 0,
          // backgroundImage:
          //   'linear-gradient(135deg, rgb(149, 128, 255) 0px, rgb(128, 255, 234) 100%)',
          transform: 'translateY(10%) translateX(8%)',
        }}
      >
        Hi! I'm Matheus
      </h1>
    </header>
  );
};

export default IndexPage;
