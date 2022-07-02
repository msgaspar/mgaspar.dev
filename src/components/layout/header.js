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
      width: '100%',
      flexShrink: 0,
      height: '100px',
      zIndex: 10,
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
      width: t => t.breakpoints[1],
    }}
  />
);

export { Header };
