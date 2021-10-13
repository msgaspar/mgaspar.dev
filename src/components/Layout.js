/** @jsx jsx */
import { Helmet } from 'react-helmet';
import { jsx } from 'theme-ui';
import { Footer } from './Footer';
import { Header } from './Header';
import favicon from '../images/favicon.ico';

function Layout({ children }) {
  return (
    <ContainerLayout>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header sx={{ mt: 3, mb: 0 }} />
      <BodyLayout>
        <Content>{children}</Content>
      </BodyLayout>
      <Footer />
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
