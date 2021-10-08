/** @jsx jsx */
import { jsx } from 'theme-ui';

import Container from '../components/Container';
import ZeFirulaThumb from '../components/projectThumbnails/ZeFirulaThumb';
import TrybeThumb from '../components/projectThumbnails/TrybeThumb';

function ProjectsPage() {
  return (
    <Container>
      <ZeFirulaThumb />
      <TrybeThumb />
    </Container>
  );
}

export default ProjectsPage;
