/** @jsx jsx */
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { AiOutlineMail } from 'react-icons/ai';
import { jsx } from 'theme-ui';

function Footer() {
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
          fontSize: 5,
          gap: 4,
          my: 4,
        }}
      >
        <span>
          <SiGithub />
        </span>
        <span>
          <SiLinkedin />
        </span>
        <span>
          <AiOutlineMail />
        </span>
      </div>
      <p>
        designed and built by <strong>matheus</strong>
      </p>
    </footer>
  );
}

export { Footer };
