import React from 'react';
import { Box, Flex, Text, Image } from 'theme-ui';
import { motion } from 'framer-motion';
import Layout from 'components/layout';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import aboutUs from 'assets/images/aboutUs.svg'
const AboutUs = () => {
  return (
    <ThemeProvider theme={theme}>
        <Layout >
            <Box sx={{ padding: '7rem 2rem', backgroundColor: '#f9f9f9' }}>
            {/* Heading Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Text
                as="h1"
                sx={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: '2rem',
                    color: 'primary',
                }}
                >
                About Us
                </Text>
            </motion.div>

            {/* About Us Content */}
            <Flex
                sx={{
                flexDirection: ['column', 'column', 'row'],
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '2rem',
                marginBottom: '4rem',
                }}
            >
                {/* Text Section */}
                <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{ flex: 1 }}
                >
                <Text
                    as="p"
                    sx={{
                    fontSize: '1.2rem',
                    lineHeight: '1.8',
                    color: 'text',
                    }}
                >
                    Neotronics is a trusted technology solutions provider specializing in
                    ELV (Extra Low Voltage) systems and cutting-edge voice solutions. We empower
                    businesses by delivering reliable communication, security, and management systems. With
                    a commitment to innovation, technical excellence, and personalized service, Neotronics
                    ensures that businesses of all sizes achieve seamless connectivity and operational
                    efficiency.
                </Text>
                <Text
                    as="p"
                    sx={{
                    fontSize: '1.2rem',
                    lineHeight: '1.8',
                    color: 'text',
                    marginTop: '1rem',
                    }}
                >
                    We also offer Managed Service Provider (MSP) solutions for Hexnode Unified Endpoint
                    Management (UEM), helping organizations secure, monitor, and manage devices across their
                    networks. Neotronics is your partner for smart, scalable, and future-ready business
                    technology.
                </Text>
                </motion.div>

                {/* Image Section */}
                <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{ flex: 1 }}
                >
                <Image
                    src={aboutUs}
                    alt="About Us"
                    sx={{
                    width: '60%',
                    display: 'flex',
                    margin: 'auto',
                    borderRadius: '12px',
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
                    }}
                />
                </motion.div>
            </Flex>

            {/* Core Values Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <Text
                as="h2"
                sx={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: '2rem',
                    color: 'primary',
                }}
                >
                Core Values
                </Text>
                <Flex
                sx={{
                    flexDirection: ['column', 'column', 'row'],
                    gap: '2rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                >
                {/* Each Value */}
                {[
                    { title: 'Innovation', description: 'Driving technological advancement with forward-thinking solutions.' },
                    { title: 'Reliability', description: 'Delivering consistent, high-quality solutions that businesses can depend on.' },
                    { title: 'Customer Focus', description: 'Building long-term partnerships with tailored solutions and excellent service.' },
                    { title: 'Excellence', description: 'Committed to continuous improvement, precision, and superior performance.' },
                    { title: 'Integrity', description: 'Conducting business with transparency, honesty, and ethical practices.' },
                ].map((value, index) => (
                    <Box
                    key={index}
                    sx={{
                        backgroundColor: 'white',
                        padding: '2rem',
                        borderRadius: '8px',
                        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
                        textAlign: 'center',
                        flex: 1,
                        maxWidth: '300px',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                        transform: 'scale(1.05)',
                        },
                    }}
                    >
                    <Text
                        as="h3"
                        sx={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'primary' }}
                    >
                        {value.title}
                    </Text>
                    <Text sx={{ fontSize: '1rem', color: 'text' }}>{value.description}</Text>
                    </Box>
                ))}
                </Flex>
            </motion.div>
            </Box>
        </Layout>
    </ThemeProvider>
  );
};

export default AboutUs;
