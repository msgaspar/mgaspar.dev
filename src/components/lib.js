/** @jsx jsx */
import { jsx } from 'theme-ui';

export const PageSection = ({ children, ...props }) => (
  <section
    {...props}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      my: 3,
    }}
  >
    {children}
  </section>
);

export const SectionTitle = ({ children, ...props }) => (
  <h3
    {...props}
    sx={{
      fontFamily: 'heading',
      letterSpacing: -0.4,
      fontSize: 5,
      fontWeight: 'extra',
      m: 0,
      pt: 4,
    }}
  >
    {children}
  </h3>
);

export const TextContent = ({ children, ...props }) => (
  <div
    {...props}
    sx={{
      p: {
        fontFamily: 'body',
        fontWeight: 'light',
        fontSize: 3,
        lineHeight: 'body',
        strong: {
          fontWeight: 'semi',
        },
      },
    }}
  >
    {children}
  </div>
);

export const TrybeLink = () => (
  <a
    href="https://www.betrybe.com"
    sx={{
      color: 'trybe',
    }}
    target="_blank"
    rel="noreferrer"
  >
    Trybe
  </a>
);
