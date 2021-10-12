/** @jsx jsx */
import { jsx } from 'theme-ui';
import Tooltip from '@reach/tooltip';
import '@reach/tooltip/styles.css';
import { socialLinks } from '../utils/socialLinks';

function Footer() {
  const services = ['github', 'linkedin'];
  return (
    <footer
      sx={{
        display: 'flex',
        flexDirection: 'column',
        color: 'muted',
      }}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: 6,
          gap: 4,
          my: 5,
        }}
      >
        {services.map((service, index) => (
          <Tooltip
            style={{
              background: 'hsla(0, 0%, 0%, 0.95)',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '0.5em 1em',
            }}
            key={index}
            label={socialLinks[service].label}
          >
            <a
              key={index}
              sx={{
                color: 'inherit',
                transition: 'color 0.2s',
                '&:hover': {
                  color: socialLinks[service].color,
                },
              }}
              href={socialLinks[service].link}
            >
              {socialLinks[service].icon}
            </a>
          </Tooltip>
        ))}
      </div>
      <p>
        designed and built by <strong>matheus</strong>
      </p>
    </footer>
  );
}

export { Footer };
