/**@jsx jsx */
import { jsx } from 'theme-ui';

import { graphql } from 'gatsby';

import Layout from '../../components/layout';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout showSocialIcons>
      <div
        sx={{
          flexGrow: 1,
          fontWeight: 'light',
          fontSize: '2',
          pb: '4',

          'h1, h2, h3, h4': {
            fontFamily: 'heading',
          },

          h1: {
            fontSize: '7',
            fontWeight: 'extra',
          },

          h3: {
            mt: '5',
          },

          p: {
            lineHeight: 1.6,
          },

          '.gatsby-resp-image-wrapper': {
            my: '4',
          },
        }}
      >
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        slug
        title
        icon
      }
    }
  }
`;
