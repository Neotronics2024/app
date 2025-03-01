import dynamic from 'next/dynamic'; /** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import SectionHeading from 'components/section-heading';

// Install Swiper modules
SwiperCore.use([Autoplay]);

import brand1 from 'assets/images/brands/brand1.png';
import brand2 from 'assets/images/brands/brand2.png';
import brand3 from 'assets/images/brands/brand3.png';
import brand4 from 'assets/images/brands/brand4.png';
import brand5 from 'assets/images/brands/brand5.svg';

const brandLogos = [
    { id: 1, src: brand1, alt: "Brand 1" },
    { id: 2, src: brand2, alt: "Brand 2" },
    { id: 3, src: brand3, alt: "Brand 3" },
    { id: 4, src: brand4, alt: "Brand 4" },
    { id: 5, src: brand5, alt: "Brand 5" },
];

const Brands = () => {
    const options = {
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        centeredSlides: false,
        speed: 4000, // Controls smooth flow speed
        autoplay: {
          delay: 0, // No delay for continuous flow
          disableOnInteraction: false,
        },
        slidesPerView: "auto", // Ensures all logos fit properly
        breakpoints: {
          320: {
            slidesPerView: 2, // Mobile view
          },
          768: {
            slidesPerView: 3, // Tablet view
          },
          1024: {
            slidesPerView: 5, // Desktop view
          },
        },
    };

    return (
      <section id="brands" sx={styles.section}>
        <Container>
          <SectionHeading
            sx={styles.heading}
            title="Brands Who Trust Us"
            description="Our esteemed partners"
          />
        </Container>
        <Box sx={styles.carouselWrapper}>
          <div sx={styles.overlayLeft} /> {/* Left fade effect */}
          <Swiper sx={styles.carousel} {...options}>
              {brandLogos.concat(brandLogos).map((logo, index) => ( // Duplicate for infinite loop effect
                  <SwiperSlide key={index} sx={styles.slide}>
                      <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '150px', // Fixed width per slide
                      }}>
                          <img src={logo.src} alt={logo.alt} sx={styles.image} />
                      </div>
                  </SwiperSlide>
              ))}
          </Swiper>
          <div sx={styles.overlayRight} /> {/* Right fade effect */}
        </Box>
      </section>
    );
};

export default Brands;

const styles = {
  section: {
    backgroundColor: '#FFFCF7',
    pt: [10, null, null, 9, 10, 11, 11],
    pb: [7, null, null, 7, 7, 9, 9],
  },
  heading: {
    mb: [7, null, null, null, 8],
    h2: {
      fontSize: [6, null, null, 8],
    },
    p: {
      color: '#858B91',
      fontSize: 3,
      m: ['10px auto', null, null, '0 auto'],
    },
  },
  carouselWrapper: {
    position: 'relative',
    mx: 'auto',
    maxWidth: '100%',
    overflow: 'hidden', // Ensures smooth sliding effect
  },
  carousel: {
    mt: 4,
  '&.swiper-container': {
    pb: [8],
    pl: [6, null, null, 0],
    pr: [6, null, null, 0],
  },
image: {
    maxWidth: '150px',
    maxHeight: '100px',
    objectFit: 'contain',
},
slide: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
  },
},
image: {
  maxWidth: '150px',
  maxHeight: '100px',
  objectFit: 'contain',
},
  overlayLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '10%',
    height: '100%',
    background: 'linear-gradient(to right, #FFFCF7, transparent)',
    zIndex: 10,
  },
  overlayRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '10%',
    height: '100%',
    background: 'linear-gradient(to left, #FFFCF7, transparent)',
    zIndex: 10,
  },
};
