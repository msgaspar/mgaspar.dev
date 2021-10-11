/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Header } from './Header';

function Layout({ children }) {
  return (
    <ContainerLayout>
      <Header sx={{ mt: 3, mb: 0 }} />
      <BodyLayout>
        <Content>{children}</Content>
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
      width: 'fit-content',
      minHeight: '100%',
      backgroundColor: t => t.colors.background,
      mx: 'auto',
      boxShadow: t => t.colors.bgShadow,
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
      mx: t => t.space[6],
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

export default Layout;
