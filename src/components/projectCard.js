/** @jsx jsx */
import { jsx } from 'theme-ui';
import { navigate } from 'gatsby-link';
import { techs } from '../utils/techIcons';
import { Tooltip } from '../components/tooltip';

const typeColors = {
  trybe: 'green',
  personal: 'orange',
};

function ProjectCard({
  title,
  description,
  slug = '',
  type,
  inProgress = false,
  techsList = [],
  ...props
}) {
  return (
    <CardContainer {...props} onClick={() => navigate(`/projects/${slug}`)}>
      <CardTitle title={title} />
      <CardDescription text={description} />
      {type ? (
        <Badge text={`${type} project`} color={typeColors[type]} />
      ) : null}
      {inProgress ? (
        <Badge text="work in progress" color="purple" sx={{ mt: 1 }} />
      ) : null}
      <TechIconsList techsList={techsList} />
    </CardContainer>
  );
}

const CardContainer = ({ children, ...props }) => (
  <button
    {...props}
    sx={{
      color: 'text',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      height: '330px',
      maxWidth: '248px',
      flex: 1,
      bg: 'offset',
      m: 1,
      p: 4,
      pb: 3,
      borderRadius: '8px',
      border: '2px solid',
      borderColor: 'offsetBorder',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'translateY(-5px)',
        cursor: 'pointer',
      },
    }}
  >
    {children}
  </button>
);

const CardTitle = ({ title }) => (
  <h4
    sx={{
      fontFamily: 'heading',
      m: 0,
      fontSize: 4,
      textAlign: 'left',
    }}
  >
    {title}
  </h4>
);

const CardDescription = ({ text }) => (
  <p
    sx={{
      fontWeight: 'light',
      fontFamily: 'body',
      textAlign: 'left',
      fontSize: 1,
    }}
  >
    {text}
  </p>
);

const Badge = ({ text, color, ...props }) => (
  <p
    sx={{
      color: `badges.${color}.color`,
      bg: `badges.${color}.bg`,
      width: 'fit-content',
      px: 2,
      py: 1,
      borderRadius: '8px',
      fontSize: 0,
      m: 0,
      fontFamily: 'body',
    }}
    {...props}
  >
    {text}
  </p>
);

const TechIconsList = ({ techsList }) => (
  <div
    sx={{
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      gap: 2,
      flexGrow: 1,
    }}
  >
    {techsList.map((tech, index) => {
      return (
        <Tooltip key={index} label={techs[tech].description}>
          <span
            sx={{
              color: techs[tech].color,
              fontSize: 4,
            }}
          >
            {techs[tech].icon}
          </span>
        </Tooltip>
      );
    })}
  </div>
);

export { ProjectCard };
