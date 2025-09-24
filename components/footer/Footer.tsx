import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerSection}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.topWrapper}>
            <div className={styles.header}>
              <h2>Let's work together</h2>
              <p>
                Ready to bring your vision to life? Reach out today and let’s
                start capturing moments that matter.
              </p>
            </div>
            <div className={styles.button}>Contact</div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.bottom}>
          <div className={styles.company}>
            <h3>Charlotte Lapulres</h3>
            <p>Framing Moments. Capturing Stories.</p>
          </div>
          <div className={styles.menu}>
            <div className={styles.explore}>
              <h4>Explore</h4>
              <p>Home</p>
              <p>Project</p>
              <p>About</p>
              <p>Contact</p>
            </div>
            <div className={styles.social}>
              <h4>Social Media</h4>
              <p>Instagram</p>
              <p>Snapchat</p>
              <p>Facebook</p>
              <p>Gmail</p>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>Developed by Shubham Saini</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
