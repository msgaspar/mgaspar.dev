/** @jsx jsx */
import { Helmet } from 'react-helmet';
import { jsx } from 'theme-ui';
import { Footer } from './footer';
import { Header } from './header';
import favicon from '../../images/favicon.ico';

function Layout({ showSocialIcons, children }) {
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header sx={{ mt: 3, mb: 0 }} />
      <BodyLayout>
        <Content>{children}</Content>
      </BodyLayout>
      <Footer showSocialIcons={showSocialIcons} />
    </Container>
  );
}

const Container = ({ children }) => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 'fit-content',
      minHeight: '100%',
      backgroundColor: 'background',
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

      section: {
        display: 'flex',
        flexDirection: 'column',
        my: 3,

        '& + section': {
          mt: 4,
        },

        h2: {
          fontFamily: 'heading',
          letterSpacing: -0.4,
          fontSize: 6,
          fontWeight: 'extra',
          m: 0,
          pt: 2,
          pb: 3,
        },

        '> p': {
          fontWeight: 'light',
          fontSize: 3,
          lineHeight: 'body',
          strong: {
            fontWeight: 'semi',
          },
          mt: 2,
          mb: 3,
        },

        li: {
          fontWeight: 'light',
          fontSize: 2,
          lineHeight: 'body',
          '& + li': {
            pt: 3,
          },
        },
      },
    }}
  >
    {children}
  </main>
);

export default Layout;
