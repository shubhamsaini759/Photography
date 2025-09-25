import React from "react";
import styles from "./page.module.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Navbar />
      <div className={styles.contactSection}>
        <div className={styles.contactWrapper}>
          <div className={styles.header}>
            <h2>Talk to me.</h2>
            <p>
              Have a question or ready to start your project? I’d love to hear
              from you. Let’s connect and bring your vision to life.
            </p>
            <div className={styles.infoContainer}>
              <p>14 Tottenham Road, London, England</p>
              <p>+1 212 425 8617</p>
              <p>hello@framerbox.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mapSection}>
        <div className={styles.map}></div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
