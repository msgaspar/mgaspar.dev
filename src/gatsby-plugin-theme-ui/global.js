const globalStyles = {
  overflowY: 'scroll',
  height: '100%',
  'body, #___gatsby, #gatsby-focus-wrapper': {
    height: '100%',
  },
  '*::selection': {
    background: '#2daadb4d',
  },
  '.styled-link': {
    a: {
      fontWeight: 'semi',
      color: 'link',
      textUnderlineOffset: '1px',
      textDecorationThickness: '2px',
      transition: 'color 0.3s',
      '&:hover': {
        color: 'hoverLink',
      },
    },
    svg: {
      verticalAlign: 'middle',
    },
  },
};

export { globalStyles };
