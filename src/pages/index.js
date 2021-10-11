/** @jsx jsx */
import { jsx } from 'theme-ui';

import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <div
        sx={{
          pr: t => t.space[2],
          header: {
            mt: t => t.space[5],
            mb: t => t.space[1],
          },
          p: {
            fontFamily: t => t.fonts.body,
            fontWeight: t => t.fontWeights.light,
            fontSize: t => t.fontSizes[3],
            lineHeight: t => t.lineHeights.body,

            'strong, a': {
              fontWeight: t => t.fontWeights.semi,
            },

            a: {
              color: 'link',
              textUnderlineOffset: '3px',
            },

            '.trybe': {
              fontWeight: t => t.fontWeights.semi,
              // fontSize: t => t.fontSizes[4],
              color: t => t.colors.trybe,
            },
          },
        }}
      >
        <MainHeader />
        <section>
          <p>
            I'm a 29-year-old engineer from Brazil, taking the first steps in my
            career as a <strong>software developer</strong>. Currently, I'm
            studying front and back-end web development at the awesome school{' '}
            <span className="trybe">Trybe</span>, with focus on{' '}
            <strong>JavaScript</strong>,<strong>React</strong> and{' '}
            <strong>Node.js</strong>.
          </p>
          {/* <p>
            I am fascinated about how computers can make our lives easier, solve
            annoying problems and even help us build great habits. They can also
            provide us beautiful and life-changing experiences! And one of the
            things I enjoy the most is making these things happen. When I'm not
            coding or studying, you'll probably find me cooking, enjoying
            nature, traveling or spending some time with family and friends.
            Always with a good cup a coffee.
          </p> */}
          {/* <p>
            It's been one year since I left Civil Engineering to dive deep into
            the world of software, and it's just the beginning of an amazing
            journey.
          </p> */}
          <p>
            This is my personal spot in the internet - you can learn more{' '}
            <a href="/#">about me</a> or check what I've been{' '}
            <a href="/#">working on</a> recently.
          </p>
        </section>
      </div>
    </Layout>
  );
};

const MainHeader = () => (
  <header>
    <h1
      sx={{
        fontFamily: t => t.fonts.heading,
        letterSpacing: -0.5,
        color: t => t.colors.heading,
        fontWeight: t => t.fontWeights.extra,
        fontSize: t => t.fontSizes[9],
        m: 0,

        '&:after': {
          display: 'block',
          content: '""',
          width: '100px',
          height: '10px',
          backgroundColor: '#fac832',
          mt: '20px',
          mb: '40px',
        },
      }}
    >
      Hi! I'm Matheus
    </h1>
  </header>
);

export default IndexPage;
