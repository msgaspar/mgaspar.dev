/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ProjectBrief } from '../components/ProjectBrief';

import Layout from '../components/Layout';
import {
  PageSection,
  SectionTitle,
  TextContent,
  TrybeLink,
} from '../components/lib';

function ProjectsPage() {
  return (
    <Layout>
      <PageSection>
        <SectionTitle>Personal and side projects</SectionTitle>
        <TextContent>
          <p>
            I try to spend some of my free time building stuff that is simple,
            but can be very useful - for me or someone else. Also a great way to
            practice the things I've been learning.
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

      <PageSection>
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
    </Layout>
  );
}

export default ProjectsPage;
