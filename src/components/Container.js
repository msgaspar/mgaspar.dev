/** @jsx jsx */
import { jsx } from 'theme-ui';
import Header from './Header';
import Navbar from './Navbar';

function Container({ children }) {
  return (
    <ContainerLayout>
      <BackgroundPattern />
      <Header />
      <BodyLayout>
        <Content>{children}</Content>
        <Navbar />
      </BodyLayout>
    </ContainerLayout>
  );
}

const BackgroundPattern = () => (
  <div
    sx={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: '-999',
      // backgroundImage: t =>
      //   `radial-gradient(${t.colors.bgPattern1} 0.9px, transparent 0.9px), radial-gradient(${t.colors.bgPattern1} 0.9px, ${t.colors.bgPattern2} 0.9px)`,
      // backgroundSize: '36px 36px',
      // backgroundPosition: '0 0,18px 18px',

      backgroundImage:
        'linear-gradient(#f2f2ff 2.2px, transparent 2.2px), linear-gradient(90deg, #f2f2ff 2.2px, transparent 2.2px), linear-gradient(#f2f2ff 1.1px, transparent 1.1px), linear-gradient(90deg, #f2f2ff 1.1px, #ffffff 1.1px)',
      backgroundSize: '55px 55px, 55px 55px, 11px 11px, 11px 11px',
      backgroundPosition:
        '-2.2px -2.2px, -2.2px -2.2px, -1.1px -1.1px, -1.1px -1.1px',
    }}
  />
);

const ContainerLayout = ({ children }) => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 'fit-content',
      minHeight: '100%',
      backgroundColor: t => t.colors.background,
      mx: 'auto',
    }}
  >
    {children}
  </div>
);

const BodyLayout = ({ children }) => (
  <div
    sx={{
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      width: t => t.breakpoints[1],
      mx: t => t.space[4],
    }}
  >
    {children}
  </div>
);

const Content = ({ children }) => (
  <main
    sx={{
      flex: 1,
    }}
  >
    {children}
  </main>
);

export default Container;
