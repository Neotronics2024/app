
import React from "react";
import { jsx, Box, Grid, Heading, Text } from 'theme-ui';
import { keyframes } from '@emotion/react';
import Arrow from 'assets/images/icons/arrow.svg';
import 'animate.css'; // Importing animation styles

const ProductListing = ({ solutions }) => {
  return (
    <section
      sx={styles.section}
      style={{
        paddingTop: '10rem',
        paddingBottom: '20px',
        backgroundColor: '#fffcf7',
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '1rem',
          paddingLeft:"25px"
        }}
        className="animate__animated animate__fadeInRight animate__delay-0s"
      >
        <img src={Arrow} alt="arrow" style={{ marginRight: '10px', marginTop: "5px", marginBottom:'auto' }} />
        <Heading as="h2" sx={styles.heading} style={{ fontSize: '20px' }}>
          SOLUTIONS
        </Heading>
      </div>
      <Heading
        as="h1"
        sx={styles.heading}
        style={{ fontSize: '47px', lineHeight: '66px', width:"75%",paddingLeft:"25px" }}
        className="animate__animated animate__fadeInRight animate__delay-0s"
      >
       We’ve got you covered digital infrastructure needs.
      </Heading>
      <Grid
        sx={styles.grid}
      >
        {solutions.map((product) => (
          <Box key={product.id} sx={styles.card}>
            <Box sx={styles.cardInner}>
              <Box sx={styles.cardFront}>
                <Heading as="h3" sx={styles.productName}>
                  {product.title}
                </Heading>
              </Box>
              <Box sx={styles.cardBack}>
                <Text sx={styles.description}>{product.description}</Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Grid>
    </section>
  );
};

export default ProductListing;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const styles = {
  section: {
    py: [5, 6],
    backgroundColor: '#ffc059',
    textAlign: 'center',
    mt: '8rem',
  },
  heading: {
    animation: `${fadeInRight} 1s ease-in-out`,
    mb: [4, 5],
    fontSize: [4, 5],
    color: '#333',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)'],
    gap: 4,
    px: [3, 5],
    animation: `${fadeInRight} 1s ease-in-out`,
  },
  card: {
    perspective: '1000px',
    height: '250px',
    position: 'relative',
    border: '2px solid #FFC059'
  },
  cardInner: {
    position: 'relative',
    width: '100%',
    height: '100%',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.6s ease',
    '&:hover': {
      transform: 'rotateY(180deg)',
    },
  },
  cardFront: {
    backfaceVisibility: 'hidden',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 8px 16px rgba(0,0,0,0.1)',
    padding: 3,
    height: '100%',
  },
  cardBack: {
    backfaceVisibility: 'hidden',
    backgroundColor: '#FFC059',
    color: '#fff',
    borderRadius: '8px',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transform: 'rotateY(180deg)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    textAlign: 'center',
    boxShadow: '0px 8px 16px rgba(0,0,0,0.2)',
  },
  productName: {
    fontSize: 3,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 2,
    lineHeight: 1.5,
    fontWeight: '400',
  },
};

