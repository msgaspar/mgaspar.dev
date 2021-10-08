/** @jsx jsx */
import { jsx } from 'theme-ui';

function TrybeThumb() {
  return (
    <ProjectThumbContainer>
      <ProjectThumbContent>
        <p
          sx={{
            p: 2,
            lineHeight: 1.5,
            fontSize: t => t.fontSizes[2],
            fontWeight: 'light',
          }}
        >
          Throughout the web development course at Trybe, students practice the
          learned skills with hands-on activities, and are required to complete
          over 35 projects. The following are some of the most interesting and
          challenging so far:{' '}
        </p>
      </ProjectThumbContent>
      <ProjectTitle>Trybe Projects</ProjectTitle>
    </ProjectThumbContainer>
  );
}

const ProjectThumbContainer = props => (
  <div
    {...props}
    sx={{
      mt: 5,
      position: 'relative',
      width: '100%',
      height: '360px',
    }}
  />
);

const ProjectThumbContent = props => (
  <div
    {...props}
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
      fontFamily: 'body',
      pt: 4,
    }}
  />
);

const ProjectTitle = props => (
  <h2
    {...props}
    sx={{
      position: 'absolute',
      fontFamily: 'heading',
      opacity: 0.95,
      t: 0,
      l: 0,
      backgroundColor: 'trybe',
      color: 'white',
      px: 3,
      py: 1,
      fontSize: t => t.fontSizes[5],
      mt: '-5px',
    }}
  />
);

export default TrybeThumb;
