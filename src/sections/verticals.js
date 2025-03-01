import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Box, Container, Grid } from "theme-ui";

import { FaCode, FaCloud, FaShieldAlt, FaNetworkWired } from "react-icons/fa";
import { SiCyberdefenders } from "react-icons/si";
import { TbCloudComputing } from "react-icons/tb";

const services = [
  { id: 1, name: "Software Development", icon: <FaCode />, color: "#FF8C00" },
  { id: 2, name: "ELV", icon: <FaCloud />, color: "#228B22" },
  { id: 3, name: "Surveillance", icon: <FaShieldAlt />, color: "#ffc059" },
  { id: 4, name: "Cloud Computing", icon: <TbCloudComputing />, color: "#4682B4" },
  { id: 5, name: "Cyber Security", icon: <SiCyberdefenders />, color: "#DC143C" },
  { id: 6, name: "VoIP", icon: <FaNetworkWired />, color: "#8B4513" },
];

const WhatWeDo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start({ opacity: 1, y: 0 });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [controls]);

  return (
    <section id="what-we-do" style={styles.section} ref={sectionRef}>
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={styles.heading}
        >
          What We Do
        </motion.h2>
        <Grid sx={styles.grid}>
          {services.map((service, index) => (
            <motion.div
            key={service.id}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            style={{ ...styles.card, borderColor: service.color }}
            whileHover={{
              scale: 1.1, // Grows slightly
              rotateX: 8, // Subtle 3D tilt effect
              rotateY: 5,
              y: -10, // Lifts slightly
              backgroundColor: `${service.color}22`, // Slight background color shift
              boxShadow: `0px 10px 25px ${service.color}88`, // Soft glow effect
              transition: {
                type: "spring",
                stiffness: 120,
                damping: 10,
              },
            }}
            whileTap={{
              scale: 0.97, // Slight press effect
              boxShadow: `0px 4px 15px ${service.color}66`,
            }}
          >
            <motion.div
              style={{ ...styles.icon, backgroundColor: service.color }}
              whileHover={{
                scale: 1.3, // Slight bounce
                rotate: [0, 10, -10, 0], // Wobble effect
                transition: {
                  repeat: Infinity,
                  duration: 0.6,
                  ease: "easeInOut",
                },
              }}
            >
              {service.icon}
            </motion.div>
            <h3 style={styles.text}>{service.name}</h3>
          </motion.div>          
          
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default WhatWeDo;

const styles = {
  section: {
    background: "#f9f9f9",
    padding: "80px 20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: ["1fr", "1fr 1fr", "1fr 1fr 1fr"],
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    transition: "0.3s ease-in-out",
    border: "3px solid",
  },
  icon: {
    fontSize: "40px",
    color: "white",
    padding: "15px",
    borderRadius: "50%",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "15px",
    width: "60px",
    height: "60px",
  },
  text: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
  },
};
