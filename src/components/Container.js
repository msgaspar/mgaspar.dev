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
          width: 'full',
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
      width: 'full',
      minHeight: '100vh',
    }}
  >
    {children}
  </div>
);

export default Container;
