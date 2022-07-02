/** @jsx jsx */
import { jsx } from 'theme-ui';
import ColorModeToggle from './colorModeToggle';
import { Navbar } from './navbar';

function Header(props) {
  return (
    <HeaderLayout {...props}>
      <HeaderContainer>
        <Navbar />
        <ColorModeToggle />
      </HeaderContainer>
    </HeaderLayout>
  );
}

const HeaderLayout = props => (
  <div
    {...props}
    sx={{
      position: 'sticky',
      top: '-1px',
      bg: 'background',
      display: 'flex',
      justifyContent: 'center',
      width: '95vw',
      flexShrink: 0,
      height: '100px',
      zIndex: 10,
      px: [4, 4, 4, '3rem', 5],
    }}
  />
);

const HeaderContainer = props => (
  <header
    {...props}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      maxWidth: t => t.breakpoints[2],
    }}
  />
);

export { Header };
