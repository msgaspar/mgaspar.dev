/** @jsx jsx */
import { jsx } from 'theme-ui';

import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { Link } from 'gatsby';
import { TrybeLink } from '../components/trybeLink';

export default function CoverSection() {
  return (
    <React.Fragment>
      <MainHeading
        heading="Matheus Gaspar"
        subheading="Full-stack web developer"
        sx={{
          my: 5,
        }}
      />

      <section sx={{ mb: 4 }}>
        <p>
          I'm a 29-year-old engineer from Brazil, taking the first steps in my
          career as a <strong>software developer</strong>. Currently, I'm
          studying front and back-end web development at the awesome school{' '}
          <TrybeLink />, with focus on <strong>JavaScript</strong>,{' '}
          <strong>React</strong> and <strong>Node.js</strong>.
        </p>
        <p>
          This is my personal spot in the internet - you can learn more{' '}
          <Link to="/about">about me</Link> or check what I've been{' '}
          <Link to="/projects">working on</Link> recently.
        </p>
      </section>
    </React.Fragment>
  );
}

const MainHeading = ({ heading, subheading, ...props }) => (
  <header
    {...props}
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      pr: 5,
    }}
  >
    <div>
      <h1
        sx={{
          fontFamily: 'heading',
          fontWeight: 'extra',
          letterSpacing: -1,
          fontSize: 7,
          m: 0,
        }}
      >
        {heading}
      </h1>
      <h2
        sx={{
          m: 0,
          fontFamily: 'body',
          fontWeight: 'light',
          fontSize: 4,
        }}
      >
        {subheading}
      </h2>
    </div>
    <div>
      <StaticImage
        width={160}
        placeholder="blurred"
        alt="Matheus Gaspar"
        src="../images/profile.png"
      />
    </div>
  </header>
);
