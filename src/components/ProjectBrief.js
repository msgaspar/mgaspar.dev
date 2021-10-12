/** @jsx jsx */
import { jsx } from 'theme-ui';

const typeColors = {
  trybe: 'green',
  personal: 'orange',
};

function ProjectBrief({
  title,
  description,
  type = 'personal',
  techsList = [],
  ...props
}) {
  return (
    <div
      {...props}
      sx={{
        height: '100%',
        flex: 1,
        bg: 'offset',
        m: 1,
        p: 4,
        borderRadius: '8px',
        border: '2px solid #E4E4E7',
      }}
    >
      <h4
        sx={{
          fontFamily: 'heading',
          m: 0,
          fontSize: 4,
        }}
      >
        {title}
      </h4>
      <p
        sx={{
          fontWeight: 'light',
        }}
      >
        A web app that connects to the CartolaFC api and allows the creation and
        management of custom leagues.
      </p>
      <p
        sx={{
          color: `badges.${typeColors[type]}.color`,
          bg: `badges.${typeColors[type]}.bg`,
          width: 'fit-content',
          px: 2,
          py: 1,
          borderRadius: '8px',
          fontSize: 0,
        }}
      >
        {`${type} project`}
      </p>
    </div>
  );
}

export { ProjectBrief };
