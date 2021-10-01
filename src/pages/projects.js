/** @jsx jsx */
import { jsx } from 'theme-ui';
import { StaticImage } from 'gatsby-plugin-image';

import Container from '../components/Container';

function ProjectsPage() {
  return (
    <Container>
      <div
        sx={{
          position: 'relative',
          mt: 5,
          width: '100%',
          height: '360px',
        }}
      >
        <div
          sx={{
            position: 'absolute',
            width: '95%',
            height: '95%',
            margin: 'auto',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            overflow: 'hidden',
          }}
        >
          <StaticImage src="../images/zefirula-thumb.png" />
        </div>
        <h2
          sx={{
            position: 'absolute',
            fontFamily: 'heading',
            t: 0,
            l: 0,
            backgroundColor: '#252525',
            color: 'white',
            px: 3,
            py: 1,
            fontSize: t => t.fontSizes[5],
            mt: '-5px',
          }}
        >
          Zé Firula
        </h2>
      </div>
    </Container>
  );
}

export default ProjectsPage;
