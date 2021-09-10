const theme = {
  breakpoints: ['640px', '768px', '1024px', '1280px'],
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#609',
    secondary: '#306',
    muted: '#f6f6f6',
    toggleIcon: '#cbd5e0',
    gray: [
      '',
      '#f7fafc',
      '#edf2f7',
      '#e2e8f0',
      '#cbd5e0',
      '#a0aec0',
      '#718096',
      '#4a5568',
      '#2d3748',
      '#1a202c',
    ],
    modes: {
      dark: {
        //     text: tailwind.colors.gray[4],
        //     primary: tailwind.colors.purple[5],
        //     secondary: `#7f8ea3`,
        toggleIcon: '#edf2f7',
        //     background: `#1A202C`,
        //     heading: tailwind.colors.white,
        //     divide: tailwind.colors.gray[8],
        //     muted: tailwind.colors.gray[8],
      },
    },
  },
  fonts: {
    body: 'Signika, sans-serif',
    heading: 'Nunito Sans, sans-serif',
  },
  fontSizes: [
    '0.875rem',
    '1rem',
    '1.125rem',
    '1.25rem',
    '1.5rem',
    '1.875rem',
    '2.25rem',
    '3rem',
    '4rem',
    '4.5rem',
  ],
  space: [
    '0',
    '0.25rem',
    '0.5rem',
    '1rem',
    '2rem',
    '4rem',
    '8rem',
    '16rem',
    '32rem',
  ],
  fontWeights: {
    light: 300,
    regular: 400,
    semi: 600,
    bold: 700,
    extra: 800,
  },
  styles: {
    root: {
      'html, body, #___gatsby': {
        height: '100%',
      },
    },
  },
};

export default theme;
