/** @jsx jsx */
import { StaticImage } from 'gatsby-plugin-image';
import { jsx } from 'theme-ui';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import { TrybeLink } from '../components/trybeLink';
import { techs } from '../utils/techIcons';

function AboutPage() {
  return (
    <Layout showSocialIcons>
      <Helmet>
        <title>About me - Matheus Gaspar</title>
      </Helmet>
      <section>
        <h2>About me</h2>
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <div
            sx={{
              p: {
                fontWeight: 'light',
                fontSize: 2,
                lineHeight: 'body',
                strong: {
                  fontWeight: 'semi',
                },
              },
            }}
          >
            <p>
              Hey, it's nice to have you here! I'm Matheus, a brazilian web
              developer who's fascinated about how technology can make our lives
              easier, solve annoying problems and help making the world a better
              place. And one of the things I enjoy the most is being able to
              make these things happen by writing code. I also love enjoying
              nature, traveling, cooking, reading a good book and spending time
              with my family and friends.
            </p>
            <p>
              I graduated in Civil Engineering in 2016 and earned a master's
              degree in Transportation Engineering in 2019, both at the
              University of São Paulo. During those years I dedicated myself to
              scientific research, and soon after that I decided on a career
              change to work with something I knew I really enjoyed -
              programming.
            </p>
            <p>
              Currently, I'm studying for a degree in System Analysis and
              Development at the Senac University Center, and I'm entering the
              final module of the web development course at <TrybeLink />. I'm
              also looking for my first developer job opportunity, and I feel
              this is just the beginning of an amazing journey.
            </p>
          </div>
          <StaticImage
            src="../images/matheus.jpg"
            height={300}
            placeholder="blurred"
            sx={{
              borderRadius: '8px',
              flexShrink: 0,
              ml: 5,
              mr: -5,
              mt: 4,
            }}
          />
        </div>
      </section>
      <section>
        <h2>Skills</h2>
        <p>
          These are the main skills I've been praticing and developing recently:
        </p>
        <SkillsList>
          <SkillsListItem iconName="git">
            <strong>Version control with Git</strong> - workflow for
            collaboration on GitHub
          </SkillsListItem>
          <SkillsListItem iconName="javascript">
            <strong>Javascript (ES6+)</strong> - DOM manipulation, asynchronous
            programming, unit testing with Jest
          </SkillsListItem>
          <SkillsListItem iconName="react">
            <strong>React</strong> - Hooks, Context API, state management with
            Redux, Jamstack (with Next.js and Gatsby), CSS-in-JS frameworks
            (Emotion and Styled Components), testing with React Testing Library
          </SkillsListItem>
          <SkillsListItem iconName="database">
            <strong>Relational and noSQL Databases</strong> - MySQL, PostgreSQL
            and MongoDB
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
      </section>
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
