/** @jsx jsx */
import { jsx } from 'theme-ui';

function PageTitle({ title }) {
  return (
    <header>
      <h1
        sx={{
          fontFamily: t => t.fonts.heading,
          letterSpacing: -0.5,
          color: t => t.colors.heading,
          fontWeight: t => t.fontWeights.extra,
          fontSize: t => t.fontSizes[7],
          mt: t => t.space[4],
          mb: t => t.space[1],
        }}
      >
        {title}
      </h1>
    </header>
  );
}

export default PageTitle;
