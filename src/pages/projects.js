/** @jsx jsx */
import { jsx } from 'theme-ui';

import Layout from '../components/Layout';
import ZeFirulaThumb from '../components/projectThumbnails/ZeFirulaThumb';
import TrybeThumb from '../components/projectThumbnails/TrybeThumb';

function ProjectsPage() {
  return (
    <Layout>
      <ZeFirulaThumb />
      <TrybeThumb />
    </Layout>
  );
}

export default ProjectsPage;
