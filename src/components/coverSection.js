/** @jsx jsx */
import { jsx } from 'theme-ui';

import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { Link } from 'gatsby';
import { TrybeLink } from '../components/trybeLink';
import { CelebrarLink } from './celebrarLink';

export default function CoverSection() {
  return (
    <React.Fragment>
      <MainHeading
        heading="Matheus Gaspar"
        subheading="Full stack web developer"
        sx={{
          my: [2, 2, 5],
        }}
      />

      <section sx={{ mb: [0, 4] }}>
        <p>
          I'm a 30-year-old engineer from Brazil, taking the first steps in my
          career as a <strong>software developer</strong>. Currently, I'm
          working as a full stack developer at <CelebrarLink />, with focus on{' '}
          <strong>JavaScript</strong>, <strong>React</strong> and{' '}
          <strong>Node.js</strong>.
        </p>
        <p>
          This is my personal spot in the internet - you can learn more{' '}
          <Link to="#about">about me</Link> or check what I've been{' '}
          <Link to="#projects">working on</Link> recently.
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
      flexWrap: 'wrap-reverse',
      gap: [4, 4, '3rem'],
      pr: 4,
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
          lineHeight: [1, 1.3],
          mb: [3, 0],
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
          mb: [2, 2, '3rem'],
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
