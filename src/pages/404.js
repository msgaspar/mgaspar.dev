import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { PageSection, SectionTitle, TextContent } from '../components/lib';
import { Helmet } from 'react-helmet';

function NotFoundPage() {
  return (
    <Layout>
      <Helmet>
        <title>Not found - Matheus Gaspar</title>
      </Helmet>
      <PageSection>
        <SectionTitle>Oops! Page not found 😔</SectionTitle>
        <TextContent>
          <p>
            <Link to="/">Go home</Link>
          </p>
        </TextContent>
      </PageSection>
    </Layout>
  );
}

export default NotFoundPage;
