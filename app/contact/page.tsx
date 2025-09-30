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
              <p>
                <span className={styles.infoTitle}>Name : </span>Rohit Setia
              </p>
              <p>
                <span className={styles.infoTitle}>Address : </span> 14
                Tottenham Road, London, England
              </p>
              <p>
                <span className={styles.infoTitle}>Phone No. : </span>+1 212 425
                8617
              </p>
              <p>
                <span className={styles.infoTitle}>Email : </span>
                hello@framerbox.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mapSection}>
        <div className={styles.map}>
          <iframe
            title="location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.123456!2d4.880123!3d52.379123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609123456789%3A0xabcdef123456!2sFramer+B.V!5e0!3m2!1sen!2snl!4v1696111111111"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
