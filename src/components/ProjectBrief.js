/** @jsx jsx */
import { jsx } from 'theme-ui';
import { navigate } from 'gatsby-link';
import { techs } from '../utils/techIcons';
import Tooltip from '@reach/tooltip';
import '@reach/tooltip/styles.css';

const typeColors = {
  trybe: 'green',
  personal: 'orange',
};

function ProjectBrief({
  title,
  description,
  slug = '',
  type,
  inProgress = false,
  techsList = [],
  ...props
}) {
  return (
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
      onClick={() => navigate(`/projects/${slug}`)}
    >
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
      <p
        sx={{
          fontWeight: 'light',
          fontFamily: 'body',
          textAlign: 'left',
          fontSize: 1,
        }}
      >
        {description}
      </p>
      {type ? (
        <p
          sx={{
            color: `badges.${typeColors[type]}.color`,
            bg: `badges.${typeColors[type]}.bg`,
            width: 'fit-content',
            px: 2,
            py: 1,
            borderRadius: '8px',
            fontSize: 0,
            m: 0,
            fontFamily: 'body',
          }}
        >
          {`${type} project`}
        </p>
      ) : null}
      {inProgress ? (
        <p
          sx={{
            color: 'badges.purple.color',
            bg: 'badges.purple.bg',
            width: 'fit-content',
            px: 2,
            py: 1,
            borderRadius: '8px',
            fontSize: 0,
            my: 1,
            fontFamily: 'body',
          }}
        >
          work in progress
        </p>
      ) : null}
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
            <Tooltip
              key={index}
              style={{
                background: 'hsla(0, 0%, 0%, 0.95)',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '0.5em 1em',
              }}
              label={techs[tech].description}
            >
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
    </button>
  );
}

export { ProjectBrief };
