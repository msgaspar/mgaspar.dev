import { merge } from 'theme-ui';
import { tailwind } from '@theme-ui/presets';

const theme = merge(tailwind, {
  colors: {
    toggleIcon: tailwind.colors.gray[8],
    modes: {
      dark: {
        text: tailwind.colors.gray[4],
        primary: tailwind.colors.purple[5],
        secondary: `#7f8ea3`,
        toggleIcon: tailwind.colors.gray[4],
        background: `#1A202C`,
        heading: tailwind.colors.white,
        divide: tailwind.colors.gray[8],
        muted: tailwind.colors.gray[8],
      },
    },
  },
});

export default theme;
