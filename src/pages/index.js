/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Helmet } from 'react-helmet';

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

      <section id="projects" sx={{ scrollMarginTop: '100px' }}>
        <h2>Projects</h2>
        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            w: '100%',
          }}
        >
          <ProjectCard
            title="Zé Firula"
            icon="football"
            slug="ze-firula"
            description="A web app that connects to the CartolaFC official API and allows the creation and
            management of custom leagues."
            techsList={['typescript', 'react', 'nodejs', 'nextjs', 'postgres']}
            inProgress
          />
          <ProjectCard
            title="Blogs API"
            slug="blogs-api"
            icon="pencil"
            description="A REST API for managing blog posts, users, and categories."
            techsList={['javascript', 'nodejs', 'mysql', 'sequelize']}
          />
          <ProjectCard
            title="Recipes App"
            slug="recipes-app"
            icon="restaurant"
            description="Mobile-only app for exploring and keeping food and drink recipes, based on TheMealDB and TheCocktailDB APIs."
            techsList={['javascript', 'react', 'bootstrap', 'group']}
          />
          <ProjectCard
            title="Trivia"
            slug="trivia-app"
            icon="quiz"
            description="A trivia game front-end app built on top of the Open Trivia DB API."
            techsList={['javascript', 'react', 'redux', 'group']}
          />
          {/* <ProjectCard
            title="mgaspar.dev"
            slug="portfolio"
            icon="portfolio"
            description="This very website you are visiting right now."
            techsList={['javascript', 'react', 'gatsby']}
          /> */}
        </div>
      </section>
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </Layout>
  );
};

export default IndexPage;
