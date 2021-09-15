/** @jsx jsx */
import { jsx } from 'theme-ui';
import { StaticImage } from 'gatsby-plugin-image';

import Container from '../components/Container';
import PageTitle from '../components/PageTitle';

function ProjectsPage() {
  return (
    <Container>
      <div>
        <PageTitle title="Projects" />
        <StaticImage src="../images/zefirula-thumb.png" />
      </div>
    </Container>
  );
}

export default ProjectsPage;
