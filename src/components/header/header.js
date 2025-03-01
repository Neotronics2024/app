"use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaTools, FaProductHunt, FaNewspaper, FaPhone, FaInfoCircle, FaShoppingCart, FaAudioDescription } from "react-icons/fa";
import { MdComputer, MdSecurity, MdCloud, MdCameraAlt, MdHeadsetMic, MdHotel, MdLocalHospital, MdSchool, MdElectricBolt, MdOutlineCorporateFare, MdOutlineTravelExplore } from "react-icons/md";
import { BsBank, BsFillCameraReelsFill } from "react-icons/bs";
import { GiJewelCrown, GiAngelOutfit } from "react-icons/gi";

const styles = {
  navbar: (isScrolled, isHomePage) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: isScrolled ? "#fff" : !isHomePage ? "#fff" : "transparent", // Transparent with overlay effect
    backdropFilter: isScrolled ? "none" : "blur(5px)", // Apply blur effect on transparency
    color: isScrolled ? "#333" : !isHomePage ? "#333" : "#fff", // Change text color on scroll
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1000,
    boxShadow: isScrolled ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : !isHomePage ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none",
  }),
  logo: {
    width: "25%",
    display: 'flex',
    justifyContent: 'center',
    fontSize: "1.5rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
  navItems: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
    listStyle: "none",
    fontSize: "1.1rem",
  },
  navItem: {
    cursor: "pointer",
    position: "relative",
    padding: "10px 15px",
    transition: "color 0.3s",
  },
  navItemHover: {
    color: "#ffc059",
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "#333",
    padding: "15px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
    minWidth: "600px",
    background: "white",
    color:'black'
  },
  dropdownItem: {
    padding: "8px 12px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "black",
  },
  dropdownItemHover: {
    backgroundColor: "#444",
    borderRadius: "5px",
  },
};

const services = {
  Verticals: [
    { name: "Software Development", icon: <MdComputer /> },
    { name: "ELV", icon: <MdElectricBolt /> },
    { name: "Surveillance", icon: <MdCameraAlt /> },
    { name: "Cloud Computing", icon: <MdCloud /> },
    { name: "Cyber Security", icon: <MdSecurity /> },
    { name: "VoIP", icon: <MdHeadsetMic /> },
  ],
  Industry: [
    { name: "Hotel", icon: <MdHotel /> },
    { name: "Hospital", icon: <MdLocalHospital /> },
    { name: "Corporate", icon: <MdOutlineCorporateFare /> },
    { name: "Edu Consultancy", icon: <MdSchool /> },
    { name: "E-commerce", icon: <FaShoppingCart /> },
    { name: "Banks", icon: <BsBank /> },
    { name: "Study Abroad", icon: <MdSchool /> },
    { name: "Travel Company", icon: <MdOutlineTravelExplore /> },
    { name: "Matrimony", icon: <GiAngelOutfit /> },
    { name: "Media", icon: <BsFillCameraReelsFill /> },
    { name: "Loan Agencies", icon: <BsBank /> },
    { name: "Jewellery", icon: <GiJewelCrown /> },
    { name: "Medical Distribution", icon: <MdLocalHospital /> },
  ],
};

const products = {
  "AV": ["Analog Audio System", "IP PA System", "Video Conference", "Digital Signage"],
  "Network Solution": ["Access Points", "Network Switches", "Firewall"],
  "IT Infra": ["Structured Server Room", "Fiber Cable", "Network Racks", "Server"],
  "VoIP": ["Call Center Solution", "IPBX", "IP Phones", "Cloud Telephony"],
  "Emergency AlarmSystem": ["Nurse Calling System", "Panic Alarm System"],
  "Surveillance": ["IP Camera", "ANPR Camera"],
  "Cloud Computing": ["AWS", "Azure", "Jio"],
  "Cyber Security": ["Cyber Security", "Mobile Device Management"],
};

export default function Header() {
  const [dropdown, setDropdown] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('AV');
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    setIsHomePage(window.location.pathname === "/");
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change navbar after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav style={styles.navbar(isScrolled, isHomePage)}>
        {/* Logo */}
        <div style={styles.logo} onClick={()=> window.location = '/'}>Neotronics</div>

        {/* Navbar Items */}
        <ul style={styles.navItems}>
          <li style={styles.navItem} onClick={()=> window.location = '/'}><FaHome /> Home</li>

          {/* Services Dropdown */}
          <li
            style={styles.navItem}
            onClick={()=> window.location = '/solutions'}
            onMouseEnter={() => setDropdown("services")}
            onMouseLeave={() => setDropdown(null)}
          >
            <FaTools /> Services
            <AnimatePresence>
            {dropdown === "services" && (
              <motion.div 
                style={styles.dropdown} 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: 10 }}
              >
                {/* Verticals */}
                <div>
                  <h2>Verticals</h2>
                  {services.Verticals.map((item, idx) => (
                    <motion.div key={idx} style={styles.dropdownItem} whileHover={styles.dropdownItemHover}>
                      {item.icon} {item.name}
                    </motion.div>
                  ))}
                </div>
                {/* Industry */}
                <div>
                  <h2>Industry</h2>
                  {services.Industry.map((item, idx) => (
                    <motion.div key={idx} style={styles.dropdownItem} whileHover={styles.dropdownItemHover}>
                      {item.icon} {item.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </li>

          {/* Products Dropdown */}
        <li 
          style={styles.navItem}
          onClick={()=> window.location = '/products'}
          onMouseEnter={() => setDropdown("products")} 
          onMouseLeave={() => { setDropdown(null); setSelectedProduct('AV'); }}
        >
          <FaProductHunt /> Products
          <AnimatePresence>
            {dropdown === "products" && (
              <motion.div 
                style={styles.dropdown} 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: 10 }}
              >
                {/* Left Column (Product Names) */}
                <div>
                  {Object.keys(products).map((product, idx) => (
                    <motion.div 
                      key={idx} 
                      style={styles.dropdownItem} 
                      onMouseEnter={() => setSelectedProduct(product)}
                      whileHover={styles.dropdownItemHover}
                      onClick={()=> window.location = '/sdf'}
                    >
                      {product}
                    </motion.div>
                  ))}
                </div>
                {/* Right Column (Sub-products) */}
                <div>
                  {selectedProduct && (
                    <>
                      <h2>{selectedProduct}</h2>
                      {products[selectedProduct].map((sub, idx) => (
                        <motion.div key={idx} style={styles.dropdownItem} whileHover={styles.dropdownItemHover}>
                          {sub}
                        </motion.div>
                      ))}
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </li>

          <li style={styles.navItem} onClick={()=> window.location = '#newsletter'}><FaNewspaper /> Newsletters</li>
          <li style={styles.navItem} onClick={()=> window.location = '/contact'}><FaPhone /> Contact Us</li>
          <li style={styles.navItem} onClick={()=> window.location = '/about'}><FaInfoCircle /> About Us</li>
        </ul>
      </nav>

      {/* Apply top padding to prevent overlap */}
      <div style={styles.pagePadding}></div>
    </>
  );
}
