import React from "react";
import styles from "./page.module.css";

const About = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.heroImage}>
        <h1>A story - minded film and video production company</h1>
      </div>
      <div className={styles.desc}>
        <p>
          Thourgh careful consideration of color, light, and narrative, French
          pohotographer Charlotte Lapulres creates seenes
        </p>
      </div>
    </div>
  );
};

export default About;
