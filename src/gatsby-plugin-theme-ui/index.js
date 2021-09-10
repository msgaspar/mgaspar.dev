const theme = {
  breakpoints: ['640px', '768px', '1024px', '1280px'],
  colors: {
    background: '#FFF',
    text: '#374151',
    heading: '#111827',
    muted: '#afb4be',
    primary: '#609',
    secondary: '#306',
    github: '#000',
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
        text: '#f8f8f2',
        //     primary: tailwind.colors.purple[5],
        //     secondary: `#7f8ea3`,
        background: '#14141b',
        heading: '#f8f8f2',
        //     divide: tailwind.colors.gray[8],
        muted: '#9ca0a8',
        github: '#FFF',
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
  lineHeights: {
    body: 1.625,
  },
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
