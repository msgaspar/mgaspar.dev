/** @jsx jsx */
import { jsx } from 'theme-ui';
import '@reach/tooltip/styles.css';

function Footer() {
  return (
    <footer
      sx={{
        color: 'muted',
      }}
    >
      <p>
        designed and built by <strong>matheus</strong>
      </p>
    </footer>
  );
}

export { Footer };
