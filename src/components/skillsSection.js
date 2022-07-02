/** @jsx jsx */
import { jsx } from 'theme-ui';
import { techs } from '../utils/techIcons';

function SkillsSection() {
  return (
    <section>
      <h2>Skills</h2>
      <p>
        These are the main skills I've been praticing and developing recently:
      </p>
      <SkillsList>
        <SkillsListItem iconName="git">
          <strong>Version control with Git</strong> - workflow for collaboration
          on GitHub
        </SkillsListItem>
        <SkillsListItem iconName="javascript">
          <strong>Javascript (ES6+)</strong> - DOM manipulation, asynchronous
          programming, unit testing with Jest
        </SkillsListItem>
        <SkillsListItem iconName="react">
          <strong>React</strong> - Hooks, state management with Context API and
          Redux, Jamstack (with Next.js and Gatsby), CSS-in-JS frameworks
          (Emotion and Styled Components), testing with React Testing Library
        </SkillsListItem>
        <SkillsListItem iconName="database">
          <strong>Relational and noSQL Databases</strong> - MySQL, PostgreSQL
          and MongoDB
        </SkillsListItem>
        <SkillsListItem iconName="nodejs">
          <strong>Node.js</strong> - REST APIs with Express, JWT authentication,
          Sequelize ORM, software architecture and SOLID principles
        </SkillsListItem>
        <SkillsListItem iconName="project">
          <strong>Organisational and communication skills</strong> - project
          planning and management, agile methodologies, breaking big tasks into
          achievable pieces, clear and assertive communication (written and
          verbal)
        </SkillsListItem>
        <SkillsListItem iconName="other">
          <strong>Other</strong> - Linux system administration, data science
          fundamentals and web scraping with Python, basic knowledge of PHP
          (Laravel framework) and Java languages.
        </SkillsListItem>
        <SkillsListItem iconName="ideas">
          <strong>Interests</strong> - Right now I'm trying to spend some time
          to improve my back-end skills, studying Go language, concurrency,
          microservices and cloud infrastructure.
        </SkillsListItem>
      </SkillsList>
    </section>
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

export default SkillsSection;
