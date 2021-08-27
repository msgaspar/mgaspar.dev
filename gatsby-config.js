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
        fonts: [
          `quicksand\:400,500,700`,
          `Signika:300`,
          `Catamaran:wght@100;200;300;400`,
          `Nunito+Sans:wght@300;400`,
        ],
        display: 'swap',
      },
    },
  ],
};
