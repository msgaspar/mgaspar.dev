module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Matheus Gaspar - Web dev.',
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Signika:300,400,600`, `Nunito+Sans:400,600,700,800`],
        display: 'swap',
      },
    },
  ],
};
