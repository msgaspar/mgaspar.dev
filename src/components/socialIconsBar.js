/**@jsx jsx */
import { jsx } from 'theme-ui';

import { Tooltip } from '../components/tooltip';
import { socialLinks } from '../utils/socialLinks';

function SocialIconsBar() {
  const services = ['github', 'linkedin'];
  return (
    <aside
      sx={{
        display: 'flex',
        justifyContent: 'center',
        fontSize: 6,
        gap: 4,
        my: 5,
        color: 'muted',
      }}
    >
      {services.map((service, index) => (
        <Tooltip key={index} label={socialLinks[service].label}>
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
            target="_blank"
            rel="noreferrer"
          >
            {socialLinks[service].icon}
          </a>
        </Tooltip>
      ))}
    </aside>
  );
}

export { SocialIconsBar };
