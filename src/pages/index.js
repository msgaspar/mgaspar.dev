/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Helmet } from 'react-helmet';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import { ProjectCard } from '../components/projectCard';
import CoverSection from '../components/coverSection';
import ContactSection from '../components/contactSection';
import AboutSection from '../components/aboutSection';
import SkillsSection from '../components/skillsSection';

const IndexPage = () => {
  return (
    <Layout showSocialIcons>
      <Helmet>
        <title>Matheus Gaspar - web developer</title>
      </Helmet>

      <CoverSection />

      <section>
        <h2>Projects</h2>
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
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </Layout>
  );
};

export default IndexPage;
