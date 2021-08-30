/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useColorMode } from 'theme-ui';

// This component was adapted from https://github.com/LekoArts/gatsby-themes/blob/630bffe32b9ef8f7b48ef061cdfb7903055b92c2/themes/gatsby-theme-minimal-blog/src/components/colormode-toggle.tsx#L11
//  and https://codepen.io/aaroniker/pen/KGpXZo. All credits to @LekoArts.

function ColorModeToggle() {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === 'dark';

  function toggleColorMode() {
    setColorMode(isDark ? 'light' : 'dark');
  }

  return (
    <button
      type="button"
      onClick={toggleColorMode}
      aria-label={isDark ? 'Activate Light Mode' : 'Activate Dark Mode'}
      title={isDark ? 'Activate Light Mode' : 'Activate Dark Mode'}
      sx={containerStyles}
    >
      <div sx={sunOrMoonStyles(isDark)} />
    </button>
  );
}

export default ColorModeToggle;

const containerStyles = {
  opacity: 0.65,
  position: 'relative',
  borderRadius: '5px',
  width: '40px',
  height: '25px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'opacity 0.3s ease',
  border: 'none',
  outline: 'none',
  background: 'none',
  cursor: 'pointer',
  padding: 0,
  appearance: 'none',
  '&:hover, &:focus': { opacity: 1 },
};

const sunOrMoonStyles = isDark => ({
  position: 'relative',
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  border: t => (isDark ? `4px solid ${t.colors.toggleIcon}` : `none`),
  backgroundColor: isDark ? 'toggleIcon' : 'transparent',
  transform: isDark ? 'scale(0.55)' : 'scale(1)',
  transition: 'all 0.45s ease',
  overflow: isDark ? 'visible' : 'hidden',
  boxShadow: t =>
    isDark ? 'none' : `inset 8px -8px 0px 0px ${t.colors.toggleIcon}`,

  '&:before': {
    content: '""',
    position: 'absolute',
    right: '-9px',
    top: '-9px',
    height: '24px',
    width: '24px',
    border: t => (isDark ? `2px solid ${t.colors.toggleIcon}` : 'none'),
    borderRadius: '50%',
    transform: isDark ? 'translate(14px, -14px)' : 'translate(0, 0)',
    opacity: isDark ? 0 : 1,
    transition: 'transform 0.45s ease',
  },

  '&:after': {
    content: '""',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    margin: '-4px 0 0 -4px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    boxShadow: t =>
      `0 -23px 0 ${t.colors.toggleIcon}, 0 23px 0 ${t.colors.toggleIcon}, 23px 0 0 ${t.colors.toggleIcon}, -23px 0 0 ${t.colors.toggleIcon}, 15px 15px 0 ${t.colors.toggleIcon}, -15px 15px 0 ${t.colors.toggleIcon}, 15px -15px 0 ${t.colors.toggleIcon}, -15px -15px 0 ${t.colors.toggleIcon}`,
    transform: isDark ? 'scale(1)' : 'scale(0)',
    transition: 'all 0.35s ease',
  },
});
