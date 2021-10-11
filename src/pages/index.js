/** @jsx jsx */
import { jsx } from 'theme-ui';

import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <MainHeading
        heading="Matheus Gaspar"
        subheading="Full-stack web developer"
        sx={{
          my: 5,
        }}
      />

      <IntroText>
        <p>
          I'm a 29-year-old engineer from Brazil, taking the first steps in my
          career as a <strong>software developer</strong>. Currently, I'm
          studying front and back-end web development at the awesome school{' '}
          <a
            href="https://www.betrybe.com"
            className="trybe"
            target="_blank"
            rel="noreferrer"
          >
            Trybe
          </a>
          , with focus on <strong>JavaScript</strong>, <strong>React</strong>{' '}
          and <strong>Node.js</strong>.
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
          This is my personal spot in the internet - you can learn more{' '}
          <a href="/#">about me</a> or check what I've been{' '}
          <a href="/#">working on</a> recently.
        </p>
      </IntroText>
    </Layout>
  );
};

const MainHeading = ({ heading, subheading, ...props }) => (
  <header {...props}>
    <h1
      sx={{
        fontFamily: 'heading',
        fontWeight: 'extra',
        letterSpacing: -1,
        fontSize: 7,
        m: 0,
      }}
    >
      {heading}
    </h1>
    <h2
      sx={{
        m: 0,
        fontFamily: 'body',
        fontWeight: 'light',
        fontSize: 4,
      }}
    >
      {subheading}
    </h2>
  </header>
);

const IntroText = ({ children, ...props }) => (
  <section
    {...props}
    sx={{
      pt: 2,
      p: {
        fontFamily: 'body',
        fontWeight: 'light',
        fontSize: 3,
        lineHeight: 'body',

        'strong, a': {
          fontWeight: 'semi',
        },

        a: {
          color: 'link',
          textUnderlineOffset: '1px',
          textDecorationThickness: '2px',
        },

        '.trybe': {
          fontWeight: 'semi',
          color: 'trybe',
        },
      },
    }}
  >
    {children}
  </section>
);

export default IndexPage;
