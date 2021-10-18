import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';

function NotFoundPage() {
  return (
    <Layout>
      <Helmet>
        <title>Not found - Matheus Gaspar</title>
      </Helmet>
      <section>
        <h2>Oops! Page not found 😔</h2>
        <p>
          <Link to="/">Go home</Link>
        </p>
      </section>
    </Layout>
  );
}

export default NotFoundPage;
