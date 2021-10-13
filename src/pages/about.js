/** @jsx jsx */
import { StaticImage } from 'gatsby-plugin-image';
import { jsx } from 'theme-ui';

import Layout from '../components/Layout';
import { PageSection, SectionTitle, TextContent } from '../components/lib';
import { SocialLinksBar } from '../components/SocialLinksBar';
import { techs } from '../utils/techIcons';

function AboutPage() {
  return (
    <Layout>
      <PageSection>
        <SectionTitle>About me</SectionTitle>
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <TextContent>
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
          </TextContent>
          <StaticImage
            src="../images/matheus.jpg"
            height={300}
            sx={{
              borderRadius: '8px',
              flexShrink: 0,
              ml: 4,
              mt: 4,
            }}
          />
        </div>
      </PageSection>
      <PageSection>
        <SectionTitle>Skills</SectionTitle>
        <TextContent>
          <p>
            These are the main skills I've been praticing and developing
            recently:
          </p>
          <SkillsList>
            <SkillsListItem iconName="git">
              <strong>Version control with Git</strong> - workflow for
              collaboration on GitHub
            </SkillsListItem>
            <SkillsListItem iconName="javascript">
              <strong>Javascript (ES6+)</strong> - DOM manipulation,
              asynchronous programming, unit testing with Jest
            </SkillsListItem>
            <SkillsListItem iconName="react">
              <strong>React</strong> - Hooks, Context API, state management with
              Redux, Jamstack (with Next.js and Gatsby), CSS-in-JS frameworks
              (Emotion and Styled Components), testing with React Testing
              Library
            </SkillsListItem>
            <SkillsListItem iconName="database">
              <strong>Relational and noSQL Databases</strong> - MySQL,
              PostgreSQL and MongoDB
            </SkillsListItem>
            <SkillsListItem iconName="nodejs">
              <strong>Node.js</strong> - REST APIs with Express, JWT
              authentication, software architecture and SOLID principles
            </SkillsListItem>
            <SkillsListItem iconName="project">
              <strong>Organisational and communication skills</strong> - project
              planning and management, agile methodologies, breaking big tasks
              into achievable pieces, clear and assertive communication (written
              and verbal)
            </SkillsListItem>
          </SkillsList>
        </TextContent>
      </PageSection>
      <SocialLinksBar />
    </Layout>
  );
}

const SkillsList = ({ children }) => (
  <ul
    sx={{
      li: { listStyleType: 'none' },
      'div + div': {
        pt: 3,
      },
    }}
  >
    {children}
  </ul>
);

const SkillsListItem = ({ children, iconName = 'git' }) => (
  <div
    sx={{
      display: 'flex',

      svg: {
        flexShrink: 0,
        mt: 1,
        mr: 3,
        width: '20px',
        height: '20px',
        color: techs[iconName].color,
      },
    }}
  >
    {techs[iconName].icon}
    <li>{children}</li>
  </div>
);

export default AboutPage;
