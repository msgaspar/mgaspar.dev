/** @jsx jsx */
import { jsx } from 'theme-ui';
import ColorModeToggle from './ColorModeToggle';

function Header() {
  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: '20',
        width: 'full',
        flexShrink: 0,
      }}
    >
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 'full',
          px: 2,
          maxWidth: t => t.breakpoints[1],
        }}
      >
        <h1
          sx={{
            fontFamily: t => t.fonts.quicksand,
            fontSize: t => t.fontSizes[1],
            fontWeight: '700',
            color: t => t.colors.gray[9],

            '> span': {
              color: t => t.colors.gray[5],
              fontWeight: 500,
            },
          }}
        >
          Matheus Gaspar<span>/web developer</span>
        </h1>
        <ColorModeToggle />
      </div>
    </div>
  );
}

export default Header;
