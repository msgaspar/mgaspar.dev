/** @jsx jsx */
import { jsx } from 'theme-ui';
import { StaticImage } from 'gatsby-plugin-image';
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiChakraui,
  SiVercel,
  SiNodedotjs,
  SiExpress,
  SiAmazonaws,
  SiDocker,
  SiPostgresql,
} from 'react-icons/si';

const thumbImgPath = '../../images/zefirula-thumb.png';

function ZeFirulaThumb() {
  return (
    <ProjectThumbContainer>
      <ProjectThumbContent>
        <CoverImage />
        <ThumbDescription
          text="A full-stack web application that connects to the official CartolaFC API
          and allows the creation and management of custom leagues."
        />
      </ProjectThumbContent>
      <ProjectTitle title="Zé Firula" />
    </ProjectThumbContainer>
  );
}

const ProjectThumbContainer = ({ children }) => (
  <div
    sx={{
      mt: 5,
      position: 'relative',
      width: '100%',
      height: '360px',
    }}
  >
    {children}
  </div>
);

const ProjectThumbContent = ({ children }) => (
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

      '&:hover': {
        '.gatsby-image-wrapper': {
          transform: 'scale(1.05)',
        },
        '.project-thumb-description': {
          transform: 'translateX(0)',
        },
      },
    }}
  >
    {children}
  </div>
);

const CoverImage = () => {
  return (
    <StaticImage
      sx={{
        transition: 'transform 2s',
      }}
      src={thumbImgPath}
      alt=""
    />
  );
};

const ThumbDescription = ({ text, frontendIcons, backendIcons }) => (
  <div
    className="project-thumb-description"
    sx={{
      position: 'absolute',
      right: '0',
      top: 0,
      width: '300px',
      p: 4,
      height: '100%',
      backgroundColor: '#252525',
      color: 'white',
      opacity: 0.95,
      transform: 'translateX(100%)',
      transition: 'transform 0.5s',
      fontFamily: 'body',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <p
      sx={{
        fontWeight: 'light',
        flex: 1,
      }}
    >
      {text}
    </p>
    <h3
      sx={{
        fontSize: t => t.fontSizes[1],
        fontWeight: 'normal',
      }}
    >
      Front-end
    </h3>
    <div
      sx={{
        display: 'flex',
        gap: '8px',
      }}
    >
      <SiTypescript />
      <SiReact />
      <SiNextdotjs />
      <SiChakraui />
      <SiVercel />
    </div>
    <h3
      sx={{
        fontSize: t => t.fontSizes[1],
        fontWeight: 'normal',
        marginTop: 4,
      }}
    >
      Back-end
    </h3>
    <div
      sx={{
        display: 'flex',
        gap: '8px',
      }}
    >
      <SiTypescript />
      <SiNodedotjs />
      <SiExpress />
      <SiPostgresql />
      <SiDocker />
      <SiAmazonaws />
    </div>
  </div>
);

const ProjectTitle = ({ title }) => (
  <h2
    sx={{
      position: 'absolute',
      fontFamily: 'heading',
      opacity: 0.95,
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
    {title}
  </h2>
);

export default ZeFirulaThumb;
