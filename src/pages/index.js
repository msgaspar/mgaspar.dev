/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import { BsArrowRight } from 'react-icons/bs';
import { ProjectCard } from '../components/projectCard';
import { TrybeLink } from '../components/trybeLink';

const IndexPage = () => {
  return (
    <Layout showSocialIcons>
      <Helmet>
        <title>Matheus Gaspar - web developer</title>
      </Helmet>
      <MainHeading
        heading="Matheus Gaspar"
        subheading="Full-stack web developer"
        sx={{
          my: 5,
        }}
      />

      <section sx={{ mb: 4 }}>
        <p>
          I'm a 29-year-old engineer from Brazil, taking the first steps in my
          career as a <strong>software developer</strong>. Currently, I'm
          studying front and back-end web development at the awesome school{' '}
          <TrybeLink />, with focus on <strong>JavaScript</strong>,{' '}
          <strong>React</strong> and <strong>Node.js</strong>.
        </p>
        <p>
          This is my personal spot in the internet - you can learn more{' '}
          <Link to="/about">about me</Link> or check what I've been{' '}
          <Link to="/projects">working on</Link> recently.
        </p>
      </section>

      <section>
        <h2>Latest projects</h2>
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            w: '100%',
          }}
        >
          <ProjectCard
            title="Zé Firula"
            description="A web app that connects to the CartolaFC official API and allows the creation and
            management of custom leagues."
            type="personal"
            techsList={['typescript', 'react', 'nodejs', 'nextjs', 'postgres']}
            inProgress
          />
          <ProjectCard
            title="Trivia"
            type="trybe"
            description="A trivia game front-end app built on top of the Open Trivia DB API."
            techsList={['javascript', 'react', 'redux']}
          />
          <ProjectCard
            title="mgaspar.dev"
            description="This very website you are visiting right now."
            type="personal"
            techsList={['javascript', 'react', 'gatsby']}
          />
        </div>
        <div
          sx={{
            my: 4,
            fontFamily: 'body',
            fontSize: 3,
          }}
        >
          <Link to="/projects">
            View all projects <BsArrowRight />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

const MainHeading = ({ heading, subheading, ...props }) => (
  <header
    {...props}
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      pr: 5,
    }}
  >
    <div>
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
    </div>
    <div>
      <StaticImage
        width={160}
        placeholder="blurred"
        alt="Matheus Gaspar"
        src="../images/profile.png"
      />
    </div>
  </header>
);

export default IndexPage;
