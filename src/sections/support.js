/** @jsx jsx */
import { jsx, Container, Grid, Box, Flex, Heading, Text } from 'theme-ui';
import { motion } from 'framer-motion'; // Import Framer Motion
import Image from 'components/image';
import solutions from 'assets/images/solutions.svg';
import products from 'assets/images/products.svg';
import rightArrow from 'assets/images/icons/right-arrow.png';

const data = [
  {
    id: 2,
    icon: products,
    title: 'Our Products',
    description: `Drive Innovation Through Human-Centric Technology Solutions`,
    location: "/products",
    animation: { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 } }, // Left box animation
  },
  {
    id: 1,
    icon: solutions,
    title: 'Our Solutions',
    description: `We’ve got you covered digital infrastructure needs.`,
    location: "/solutions",
    animation: { initial: { x: 100, opacity: 0 }, animate: { x: 0, opacity: 1 } }, // Right box animation
  },
];

const Support = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          {data?.map((item) => (
            <motion.div
              key={item.id}
              initial={item.animation.initial}
              whileInView={item.animation.whileInView}
              animate={item.animation.animate}
              viewport={{ once: true, amount: 0.9 }}
              transition={{ duration: 0.8, delay: item.id * 0.3 }} // Stagger animation
              style={{ width: '100%' }}
            >
              <Flex
                sx={styles.supportItem}
                onClick={() => (window.location = item.location)}
              >
                <Flex as="figure" sx={styles.media}>
                  <Image src={item?.icon} alt={item?.title} />
                </Flex>
                <Box sx={styles.content}>
                  <Heading>
                    {item?.title} <Image src={rightArrow} alt="rightArrow" />
                  </Heading>
                  <Text as="p">{item?.description}</Text>
                </Box>
              </Flex>
            </motion.div>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Support;

const styles = {
  section: {
    pt: [9, null, null, 10, 11, 11, 11],
    pb: [7, null, null, 8, null, 9, 10],
  },
  grid: {
    gap: ['30px 30px'],
    justifyContent: 'center',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      null,
      'repeat(2, 540px)',
    ],
  },
  supportItem: {
    backgroundColor: '#F6F8FB',
    borderRadius: 7,
    flexDirection: ['column', null, null, null, null, 'row'],
    alignItems: 'flex-start',
    p: ['25px 25px 20px', null, null, null, '35px 30px', '45px 40px 50px'],
    transition: '0.3s ease-in-out 0s',
    ':hover': {
      backgroundColor: 'white',
      boxShadow: '0px 15px 60px rgba(63, 90, 130, 0.12)',
    },
    cursor: 'pointer',
    border: '1px solid'
  },
  media: {
    alignItems: 'center',
    mr: [6],
    mb: [5, null, null, null, null, 0],
    minWidth: [80],
    img: {
      maxWidth: [60, null, null, null, null, '100%'],
    },
  },
  content: {
    mt: ['-7px'],
    h2: {
      fontWeight: 700,
      fontSize: [2, null, null, null, 4],
      lineHeight: 1.5,
      color: 'textSecondary',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    p: {
      fontSize: [1, null, null, null, 15],
      lineHeight: [2.13],
      color: 'headingSecondary',
      mt: [3],
    },
  },
};
