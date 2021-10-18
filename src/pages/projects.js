/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ProjectCard } from '../components/projectCard';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import { TrybeLink } from '../components/trybeLink';
import { SocialIconsBar } from '../components/socialIconsBar';

function ProjectsPage() {
  return (
    <Layout>
      <Helmet>
        <title>Projects - Matheus Gaspar</title>
      </Helmet>
      <section>
        <h2>Personal and side projects</h2>
        <p>
          I try to spend some of my free time building stuff that is simple, but
          can be very useful - for me or someone else. It's also a great way to
          practice the things I've been studying and learning.
        </p>
        <div
          sx={{
            display: 'flex',
            w: '100%',
            pb: 3,
          }}
        >
          <ProjectCard
            title="Zé Firula"
            description="A web app that connects to the CartolaFC official API and allows the creation and
            management of custom leagues."
            techsList={['typescript', 'react', 'nodejs', 'nextjs', 'postgres']}
            inProgress
          />
          <ProjectCard
            title="mgaspar.dev"
            description="This very website you are visiting right now."
            techsList={['javascript', 'react', 'gatsby']}
          />
        </div>
      </section>

      <section
        sx={{
          mt: 5,
          mb: 6,
        }}
      >
        <h2>Trybe projects</h2>
        <p>
          Throughout the web development course at <TrybeLink />, students
          practice the learned skills with hands-on activities, and are required
          to complete <strong>over 35 projects</strong>. The following are some
          of my favorites so far:
        </p>
        <div
          sx={{
            display: 'flex',
            w: '100%',
          }}
        >
          <ProjectCard
            title="Trivia"
            description="A trivia game front-end app built on top of the Open Trivia DB API."
            techsList={['javascript', 'react', 'redux']}
          />
        </div>
      </section>
      <SocialIconsBar />
    </Layout>
  );
}

export default ProjectsPage;
