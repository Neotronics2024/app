import React from 'react';
"use client";
import { motion } from "framer-motion";

const styles = {
  container: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "0 20px",
  },
  textContainer: {
    color: "#fff",
    maxWidth: "800px",
  },
  heading: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    display: "flex",
    flexWrap: "wrap", // Ensure words wrap properly
    justifyContent: "center",
    color: "grey",
  },
};

// Framer Motion Variants
const headingVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 1, ease: "easeOut", delay: 1 } // Delay for better effect
  },
};

// Word-by-word animation with slight delay
const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.1, ease: "easeOut" } 
  },
};

// Wrapper for staggered word animation
const paragraphContainerVariants = {
  hidden: { opacity: 1 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2, delayChildren: 1 } // Staggered words with delay
  },
};

export default function LandingPage() {
  const subtitleText = "Tailored IT solutions that fit your unique business needs. Let's build something amazing together.";

  return (
    <div style={styles.container}>
      {/* Background Video */}
      <video autoPlay loop muted style={styles.video}>
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay with Animated Text */}
      <div style={styles.overlay}>
        <motion.div style={styles.textContainer}>
          {/* Main Heading with Delay */}
          <motion.h1 variants={headingVariants} initial="hidden" animate="visible" style={styles.heading}>
            INNOVATING YOUR DIGITAL FUTURE
          </motion.h1>

          {/* Word-by-Word Subtitle Animation */}
          <motion.p
            variants={paragraphContainerVariants}
            initial="hidden"
            animate="visible"
            style={styles.paragraph}
          >
            {subtitleText.split(" ").map((word, index) => (
              <motion.span key={index} variants={wordVariants} style={{ marginRight: "8px" }}>
                {word}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
