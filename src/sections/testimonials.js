
import dynamic from 'next/dynamic';/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import SectionHeading from 'components/section-heading';
const Testimonial = dynamic(() => import('components/cards/testimonial'));
import maleAvatar from 'assets/images/testimonials/male_avatar.png';
import femaleAvatar from 'assets/images/testimonials/female_avatar.png';

// Install Swiper modules
SwiperCore.use([Autoplay]);

const data = [
  [
    {
      id: 1,
      avatar: femaleAvatar,
      name: 'Veena Menon',
      username: '@hi.veona',
      text: `I would just like to say hello to Estelle Pestana. She has been very professional and has gone out of her way to help me. Her patience with me as I continually changed my plans is to be commended. Her service reaffirms why I always choose to book through an agency rather than direct. Thank you`,
    },
    {
      id: 2,
      avatar: femaleAvatar,
      name: 'Minnie',
      username: '@hello.mimmie',
      text: `I would like to take this opportunity to thank SA Places for the excellent service provided to us and in particular Estelle. You gave me the best place ever within moments of me speaking to you.`,
    },
  ],
  [
    {
      id: 3,
      avatar: femaleAvatar,
      name: 'Merry Jacob',
      username: '@merryn.manley',
      text: `Thank you very much for your friendly and efficient service. I have already recommended you and will definitely continue to recommend your services to others in the future.`,
    },
    {
      id: 4,
      avatar: maleAvatar,
      name: 'Prabhu Neel',
      username: '@hey.nku',
      text: `I would just like to say hello to Alan. He has been very professional and has gone out of her way to help me. His patience with me as I continually changed my plans is to be commended. His service reaffirms why I always choose to book through an agency rather than direct. Thank you`,
    },
  ],
  [
    {
      id: 5,
      avatar: maleAvatar,
      name: 'Justin Jacob',
      username: '@cherice.me',
      text: `Thank you for all your help. Your service was excellent and very FAST.`,
    },
    {
      id: 6,
      avatar: maleAvatar,
      name: 'Thejus',
      username: '@myself.thais',
      text: `For our recent trip to SA, I booked several accommodations through SA Places. I just wanted to say that everything went perfectly with all the bookings and also your booking was very quick and professional. I hope to have the opportunity to visit South Africa again soon, so I will be booking with your company again. I will also recommend`,
    },
  ],
  [
    {
      id: 7,
      avatar: maleAvatar,
      name: 'Vijay Kumar',
      username: '@hi.veona',
      text: `I would just like to say hello to Manu. He has been very professional and has gone out of her way to help me. His patience with me as I continually changed my plans is to be commended. His service reaffirms why I always choose to book through an agency rather than direct. Thank you`,
    },
    {
      id: 8,
      avatar: maleAvatar,
      name: 'Vinay',
      username: '@hello.mimmie',
      text: `I would like to take this opportunity to thank SA Places for the excellent service provided to us and in particular Estelle. You gave me the best place ever within moments of me speaking to you.`,
    },
  ],
  [
    {
      id: 9,
      avatar: femaleAvatar,
      name: 'Merlyn',
      username: '@merryn.manley',
      text: `Thank you very much for your friendly and efficient service. I have already recommended you and will definitely continue to recommend your services to others in the future.`,
    },
    {
      id: 10,
      avatar: femaleAvatar,
      name: 'Pooja Kumar',
      username: '@hey.nku',
      text: `I would just like to say hello to Estelle Pestana. She has been very professional and has gone out of her way to help me. Her patience with me as I continually changed my plans is to be commended. Her service reaffirms why I always choose to book through an agency rather than direct. Thank you`,
    },
  ],
  [
    {
      id: 11,
      avatar: femaleAvatar,
      name: 'Cherry Justin',
      username: '@cherice.me',
      text: `Thank you for all your help. Your service was excellent and very FAST.`,
    },
    {
      id: 12,
      avatar: maleAvatar,
      name: 'Thomas Issac',
      username: '@myself.thais',
      text: `For our recent trip to SA, I booked several accommodations through SA Places. I just wanted to say that everything went perfectly with all the bookings and also your booking was very quick and professional. I hope to have the opportunity to visit South Africa again soon, so I will be booking with your company again. I will also recommend`,
    },
  ],
];

const Testimonials = () => {
  const options = {
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000, // Time in milliseconds between slide changes
      disableOnInteraction: false, // Keeps autoplay active even after user interaction
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1366: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <section id="testimonials" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="What our customers say about us"
          description="Customer testimonial"
        />
      </Container>
      <Swiper sx={styles.carousel} {...options}>
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {item.map((slide) => (
              <Testimonial key={slide.id} data={slide} />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Box sx={styles.testimonials}></Box> */}
    </section>
  );
};

export default Testimonials;

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
  carousel: {
    '&.swiper-container': {
      pb: [8],
      pl: [6, null, null, 0],
      pr: [6, null, null, 0],
    },
  },
};
