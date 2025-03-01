import React from "react";
import { useRouter } from "next/router";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#1a202c",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem 1.5rem",
  },
  headingSection: {
    textAlign: "center",
    maxWidth: "60rem",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    lineHeight: "1.2",
    marginBottom: "1rem",
  },
  subheading: {
    fontSize: "1.125rem",
    color: "#a0aec0",
    lineHeight: "1.6",
  },
  benefitsSection: {
    marginTop: "3rem",
    maxWidth: "50rem",
    width: "100%",
  },
  benefitsTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "1.5rem",
    textAlign: "center",
  },
  benefitItem: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    backgroundColor: "#2d3748",
    borderRadius: "0.5rem",
    padding: "1rem",
    marginBottom: "1rem",
  },
  benefitIcon: {
    width: "1.5rem",
    height: "1.5rem",
    color: "#38a169",
    flexShrink: "0",
  },
  benefitText: {
    color: "#e2e8f0",
    lineHeight: "1.6",
  },
};

const DetailsPage = () => {
  const router = useRouter();
  const { id } = router.query; // Access the dynamic route parameter (id)
  console.log(id);

  return (
    <div>
      <div style={styles.container}>
        {/* Heading Section */}
        <div style={styles.headingSection}>
          <h1 style={styles.heading}>
            Empower Your Business with Cutting-Edge Solutions
          </h1>
          <p style={styles.subheading}>
            Our suite of innovative tools and services is designed to drive
            your business forward, enhancing productivity, security, and
            efficiency.
          </p>
        </div>

        {/* Benefits Section */}
        <div style={styles.benefitsSection}>
          <h2 style={styles.benefitsTitle}>Key Benefits:</h2>
          <ul>
            {[
              "Enhanced cybersecurity to protect your data and operations.",
              "Scalable cloud solutions tailored to your business needs.",
              "Custom software development for seamless workflows.",
              "Digital infrastructure to keep you connected globally.",
              "24/7 expert support for uninterrupted performance.",
            ].map((benefit, index) => (
              <li key={index} style={styles.benefitItem}>
                <CheckCircleIcon style={styles.benefitIcon} />
                <p style={styles.benefitText}>{benefit}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
