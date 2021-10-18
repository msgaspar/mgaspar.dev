/**@jsx jsx */
import { jsx } from 'theme-ui';

import ReachTooltip from '@reach/tooltip';
import '@reach/tooltip/styles.css';

function Tooltip({ children, label, ...props }) {
  return (
    <ReachTooltip
      {...props}
      style={{
        background: 'hsla(0, 0%, 0%, 0.95)',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        padding: '0.5em 1em',
      }}
      label={label}
    >
      {children}
    </ReachTooltip>
  );
}

export { Tooltip };
