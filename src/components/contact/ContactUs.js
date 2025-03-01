import React, { useState } from "react";
import styles from './ContactUs.module.css';
import ContactUs from 'assets/images/contact_us.png'
import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { RxAvatar } from "react-icons/rx";
import { HiMail } from 'react-icons/hi';

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.svgSection}>
          <img
            src={ContactUs}
            alt="Contact Us"
            className={styles.contactSvg}
          />
        </div>
        <div className={styles.formSection}>
          <div className={styles.title}>
            <h1>Contact Us</h1>
            <p>
              We'd love to hear from you! Whether you have a question, feedback, or need support,
              reach out to us via the form below, email, or phone.
            </p>
          </div>
          <form className={styles.form}>
            <div className={styles.formGroup}>
                <div style={{display: "flex",alignItems: "center"}}>
                    <div><label htmlFor="name" className={styles.label}>Name</label></div>
                    <div style={{marginLeft: "5px"}}><RxAvatar fontSize="20px" /></div>
                </div>
              <input
                type="text"
                id="name"
                className={styles.input}
                placeholder="Your Name"
                required
              />
            </div>
            <div className={styles.formGroup}>
            <div style={{display: "flex",alignItems: "center"}}>
                <div><label htmlFor="email" className={styles.label}>Email</label></div>
                <div style={{marginLeft: "5px"}}><HiMail fontSize="20px" /></div>
            </div>
              <input
                type="email"
                id="email"
                className={styles.input}
                placeholder="Your Email"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <div style={{display: "flex",alignItems: "center"}}>
                <div><label htmlFor="phone" className={styles.label}>Phone</label></div>
                <div style={{marginLeft: "5px"}}><FaPhoneAlt fontSize="20px" /></div>
            </div>
              <input
                type="tel"
                id="phone"
                className={styles.input}
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <div style={{display: "flex",alignItems: "center"}}>
                <div><label htmlFor="message" className={styles.label}>Message</label></div>
                <div style={{marginLeft: "5px"}}><MdMessage fontSize="20px" /></div>
            </div>
              <textarea
                id="message"
                className={styles.textarea}
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
