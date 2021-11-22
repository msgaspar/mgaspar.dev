const globalStyles = {
  scrollBehavior: 'smooth',
  overflowY: 'scroll',
  height: '100%',
  fontFamily: 'body',
  'body, #___gatsby, #gatsby-focus-wrapper': {
    height: '100%',
  },
  '*::selection': {
    background: '#2daadb4d',
  },

  a: {
    fontWeight: 'semi',
    color: 'link',
    textUnderlineOffset: '1px',
    textDecorationThickness: '2px',
    transition: 'color 0.2s',
    '&:hover': {
      color: 'hoverLink',
    },
    svg: {
      verticalAlign: 'middle',
    },
  },
};

export { globalStyles };
