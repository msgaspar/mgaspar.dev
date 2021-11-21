/** @jsx jsx */
import { StaticImage } from 'gatsby-plugin-image';
import { jsx } from 'theme-ui';

import { TrybeLink } from '../components/trybeLink';

function AboutSection() {
  return (
    <section id="about" sx={{ scrollMarginTop: '100px' }}>
      <h2>About me</h2>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <div
          sx={{
            p: {
              fontWeight: 'light',
              fontSize: 2,
              lineHeight: 'body',
              strong: {
                fontWeight: 'semi',
              },
            },
          }}
        >
          <p>
            Hey, it's nice to have you here! I'm Matheus, a brazilian web
            developer who's fascinated about how technology can make our lives
            easier, solve annoying problems and help making the world a better
            place. And one of the things I enjoy the most is being able to make
            these things happen by writing code. I also love enjoying nature,
            traveling, cooking, reading a good book and spending time with my
            family and friends.
          </p>
          <p>
            I graduated in Civil Engineering in 2016 and earned a master's
            degree in Transportation Engineering in 2019, both at the University
            of São Paulo. During those years I dedicated myself to scientific
            research, and soon after that I decided on a career change to work
            with something I knew I really enjoyed - programming.
          </p>
          <p>
            Currently, I'm studying for a degree in System Analysis and
            Development at the Senac University Center, and I'm entering the
            final module of the web development course at <TrybeLink />. I'm
            also looking for my first developer job opportunity, and I feel this
            is just the beginning of an amazing journey.
          </p>
        </div>
        <StaticImage
          src="../images/matheus.jpg"
          height={300}
          placeholder="blurred"
          sx={{
            borderRadius: '8px',
            flexShrink: 0,
            ml: 5,
            mr: -5,
            mt: 4,
          }}
        />
      </div>
    </section>
  );
}

export default AboutSection;
