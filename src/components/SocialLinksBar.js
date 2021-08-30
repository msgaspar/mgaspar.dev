/** @jsx jsx */
import { jsx, IconButton } from 'theme-ui';
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

function SocialLinksBar() {
  return (
    <div
      sx={{
        display: 'flex',
        button: {
          width: 'fit-content',
          height: 'fit-content',
        },
      }}
    >
      <IconButton>
        <FaGithub />
      </IconButton>
      <IconButton>
        <FaLinkedin />
      </IconButton>
      <IconButton>
        <FaPaperPlane />
      </IconButton>
    </div>
  );
}

export default SocialLinksBar;
