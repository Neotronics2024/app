/** @jsx jsx */
import { jsx, Box, Container, Grid } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import Image from 'components/image';
import WhoWeAre from 'assets/images/who_we_are.svg';

const data = [
  {
    title: 'Our Mission',
    contents: (
      <div>
        To deliver innovative, reliable, and cost-effective technology solutions that enhance communication, security, and productivity for businesses, while ensuring superior customer service and technical support.
      </div>
    ),
  },
  {
    title: 'Our Vision',
    contents: (
      <div>
        To become a leading technology integrator and service provider, recognized for cutting-edge ELV solutions, voice communication systems, and unmatched expertise in device management that empower businesses to thrive in a connected world.
      </div>
    ),
  },
  {
    title: `Driven by`,
    contents: (
      <div>
        Dedication and Passion: We have passion for our client’s success and dedication to the most level of professionalism in everything we do.
        Truth and Trustworthiness: Though it is rarely simple, doing the right thing is always worthwhile. Oneness: We work as a team, even with our clients to achieve something extraordinary.
      </div>
    ),
  },
];

const About = () => {
  return (
    <section id="about" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <Box as="figure" sx={styles.illustration}>
            <Image style={{padding:"25px"}} src={WhoWeAre} alt="WhoWeAre" />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="Who we are ?"
              description=" Neotronics is an IT System Integration company operating turn-key solutions to address technology-enabled solutions with right equipment, tools and software.
              We combine our specialized, integrated knowledge with a thriving ecosystem of digital entrepreneurs to produce better, quicker, and longer-lasting results."
            />
            <Box sx={styles.accordionGroup}>
              <Accordion items={data} />
            </Box>
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default About;

const styles = {
  section: {
    pt: [6, null, null, 6, 8, 9],
    pb: [6, null, null, null, 7, 9, 11, null],
  },
  grid: {
    alignItems: 'center',
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      null,
      '1fr 431px',
      '1fr 530px',
      '1fr 550px',
    ],
  },
  heading: {
    textAlign: ['left', null, null, 'center', 'left'],
    ml: [null, null, null, 'auto'],
    maxWidth: [null, null, null, 520, 660],
    h2: {
      fontSize: [null, null, null, 10, 8, 10, 40],
      img: {
        maxWidth: [24, null, null, 30, 25, null, '100%'],
        top: ['4px', '8px', null, null, '4px', '8px'],
      },
    },
    p: {
      fontSize: [null, null, null, 2],
    },
  },
  illustration: {
    mb: [-6, null, null, -8, 0],
  },
  accordionGroup: {
    m: [null, null, null, '0 auto', 'unset'],
    maxWidth: [null, null, null, 600, 'none'],
  },
};
