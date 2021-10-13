/**@jsx jsx */
import { jsx } from 'theme-ui';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import { PageSection, SectionTitle, TextContent } from '../components/lib';
import { socialLinks } from '../utils/socialLinks';

function ContactPage() {
  return (
    <Layout>
      <Helmet>
        <title>Contact - Matheus Gaspar</title>
      </Helmet>
      <PageSection>
        <SectionTitle>Get in touch</SectionTitle>
        <TextContent sx={{ maxWidth: '500px' }}>
          <p>
            Send me an email if you're looking for a developer, if you have any
            questions, or if you just want to say hi.
          </p>
          <p>
            <a href="mailto:msgaspar@outlook.com">msgaspar@outlook.com</a>
          </p>
          <p>
            You can also find me on <a href={socialLinks.github.link}>GitHub</a>{' '}
            and <a href={socialLinks.linkedin.link}>LinkedIn</a>.
          </p>
        </TextContent>
      </PageSection>
    </Layout>
  );
}

export default ContactPage;
