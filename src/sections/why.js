/** @jsx jsx */
import { jsx, Container, Box, Grid, Heading, Text } from 'theme-ui';
import { motion } from 'framer-motion';

const WhyChooseNeotronics = () => {
  const data = [
    {
      title: 'Customized Technology Solutions',
      description: 'We provide tailored technology solutions to meet your business needs.',
      animation: { initial: { x: -100, opacity: 0 }, whileInView: { x: 0, opacity: 1 } },
    },
    {
      title: 'Expertise and Proven Track Record',
      description: 'Our experienced team has successfully delivered projects across various industries.',
      animation: { initial: { x: 100, opacity: 0 }, whileInView: { x: 0, opacity: 1 } },
    },
    {
        title: 'Comprehensive Support from Consultation to Maintenance',
        description: 'From consultation to ongoing maintenance, we offer full-cycle support.',
        animation: { initial: { x: 100, opacity: 0 }, whileInView: { x: 0, opacity: 1 } },
    },
    {
      title: 'Trusted Partnerships with Leading Technology Brands',
      description: 'We collaborate with the top technology brands to deliver the best solutions.',
      animation: { initial: { x: -100, opacity: 0 }, whileInView: { x: 0, opacity: 1 } },
    },
  ];

  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <Heading sx={styles.heading}>Why Choose Neotronics?</Heading>
        <Grid sx={styles.grid}>
          {data.map((item, index) => (
            <motion.div
              key={index}
            //   initial={item.animation.initial}
            //   whileInView={item.animation.whileInView}
            //   viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }}
            >
              <Box sx={styles.item}>
                <Heading sx={styles.itemTitle}>{item.title}</Heading>
                <Text sx={styles.itemDescription}>{item.description}</Text>
              </Box>
            </motion.div>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseNeotronics;

const styles = {
  section: {
    padding: '4rem 2rem',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'primary',
    marginBottom: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr 1fr'],
    gap: '2rem',
    alignItems: 'center',
  },
  item: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  itemTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'primary',
    marginBottom: '1rem',
  },
  itemDescription: {
    fontSize: '1rem',
    color: 'text',
  },
};
