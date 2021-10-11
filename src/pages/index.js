/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { BsArrowRight } from 'react-icons/bs';

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

      <IntroText className="styled-link">
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

      <section
        sx={{
          display: 'flex',
          flexDirection: 'column',
          my: 5,
        }}
      >
        <SectionTitle>Latest projects</SectionTitle>
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            w: '100%',
            height: '300px',
          }}
        >
          <ProjectStub title="Zé Firula" />
          <ProjectStub title="Trivia" />
          <ProjectStub title="Recipes8" />
        </div>
        <div
          className="styled-link"
          sx={{
            my: 4,
            fontFamily: 'body',
            fontSize: 3,
          }}
        >
          <Link to="/projects">
            Check all projects <BsArrowRight />
          </Link>
        </div>
      </section>
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
      py: 2,
      p: {
        fontFamily: 'body',
        fontWeight: 'light',
        fontSize: 3,
        lineHeight: 'body',

        strong: {
          fontWeight: 'semi',
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

const SectionTitle = ({ children, ...props }) => (
  <h3
    {...props}
    sx={{
      fontFamily: 'heading',
      fontSize: 5,
      fontWeight: 'extra',
      m: 0,
      pb: 4,
    }}
  >
    {children}
  </h3>
);

const ProjectStub = ({ title, ...props }) => (
  <div
    sx={{
      height: '100%',
      flex: 1,
      bg: '#e3e3e3',
      m: 1,
      p: 4,
      borderRadius: '8px',
    }}
  >
    <h4
      sx={{
        fontFamily: 'heading',
        m: 0,
        fontSize: 4,
      }}
    >
      {title}
    </h4>
  </div>
);

export default IndexPage;
