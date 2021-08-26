module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Matheus Gaspar - Web dev.',
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Quicksand`, `quicksand\:400,500,700`],
        display: 'swap',
      },
    },
  ],
};
