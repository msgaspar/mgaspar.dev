/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ProjectBrief } from '../components/ProjectBrief';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import {
  PageSection,
  SectionTitle,
  TextContent,
  TrybeLink,
} from '../components/lib';
import { SocialLinksBar } from '../components/SocialLinksBar';

function ProjectsPage() {
  return (
    <Layout>
      <Helmet>
        <title>Projects - Matheus Gaspar</title>
      </Helmet>
      <PageSection>
        <SectionTitle>Personal and side projects</SectionTitle>
        <TextContent>
          <p>
            I try to spend some of my free time building stuff that is simple,
            but can be very useful - for me or someone else. It's also a great
            way to practice the things I've been studying and learning.
          </p>
        </TextContent>
        <div
          sx={{
            display: 'flex',
            w: '100%',
            pb: 3,
          }}
        >
          <ProjectBrief
            title="Zé Firula"
            description="A web app that connects to the CartolaFC official API and allows the creation and
            management of custom leagues."
            techsList={['typescript', 'react', 'nodejs', 'nextjs', 'postgres']}
            inProgress
          />
          <ProjectBrief
            title="mgaspar.dev"
            description="This very website you are visiting right now."
            techsList={['javascript', 'react', 'gatsby']}
          />
        </div>
      </PageSection>

      <PageSection
        sx={{
          mt: 5,
          mb: 6,
        }}
      >
        <SectionTitle>Trybe projects</SectionTitle>
        <TextContent>
          <p>
            Throughout the web development course at <TrybeLink />, students
            practice the learned skills with hands-on activities, and are
            required to complete <strong>over 35 projects</strong>. The
            following are some of my favorites so far:
          </p>
        </TextContent>
        <div
          sx={{
            display: 'flex',
            w: '100%',
          }}
        >
          <ProjectBrief
            title="Trivia"
            description="A trivia game front-end app built on top of the Open Trivia DB API."
            techsList={['javascript', 'react', 'redux']}
          />
        </div>
      </PageSection>
      <SocialLinksBar />
    </Layout>
  );
}

export default ProjectsPage;
