/** @jsx jsx */
import { jsx } from 'theme-ui';
import Header from './Header';

function Container({ children }) {
  return (
    <ContainerLayout>
      <Header />
      <div
        sx={{
          flexGrow: 1,
          display: 'flex',
          width: '100%',
          maxWidth: t => t.breakpoints[1],
        }}
      >
        {children}
      </div>
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
      minHeight: '100vh',
    }}
  >
    {children}
  </div>
);

export default Container;
