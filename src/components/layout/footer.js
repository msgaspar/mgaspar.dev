/** @jsx jsx */
import { jsx } from 'theme-ui';

import React from 'react';
import { SocialIconsBar } from './socialIconsBar';

function Footer({ showSocialIcons }) {
  return (
    <React.Fragment>
      {showSocialIcons ? <SocialIconsBar /> : null}
      <footer
        sx={{
          color: 'muted',
        }}
      >
        <p>
          designed and built by <strong>matheus</strong>
        </p>
      </footer>
    </React.Fragment>
  );
}

export { Footer };
