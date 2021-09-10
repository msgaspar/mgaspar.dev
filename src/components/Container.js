/** @jsx jsx */
import { jsx } from 'theme-ui';
import Header from './Header';
import Navbar from './Navbar';

function Container({ children }) {
  return (
    <ContainerLayout>
      <Header />
      <BodyLayout>
        <Content>{children}</Content>
        <Navbar />
      </BodyLayout>
    </ContainerLayout>
  );
}

const ContainerLayout = ({ children }) => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      minHeight: '100%',
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
      width: '100%',
      maxWidth: t => t.breakpoints[1],
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
