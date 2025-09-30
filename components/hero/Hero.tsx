import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroImageWrapper}>
          {/* leftSideImage */}
          <div className={styles.leftSideImage}></div>
          {/* leftImageGroup */}
          <div className={styles.leftImageGroup}>
            <div className={styles.bottomImage}></div>
            <div className={styles.topImage}></div>
          </div>
          {/* centerImage */}
          <div className={styles.centerImage}>
            <div className={styles.centerHeroImage}></div>
          </div>
          {/* rightImageGroup */}
          <div className={styles.rightImageGroup}>
            <div className={styles.bottomImage}></div>
            <div className={styles.topImage}></div>
          </div>
          {/* rightImage */}
          <div className={styles.rightImage}></div>
        </div>
      </div>
      <div className={styles.heroDesc}>
        <p className={styles.desc}>
          Through light and storytelling, fleeting moments are transformed into
          timeless memories. Each frame is crafted to reflect beauty, emotion,
          and meaning.
        </p>
      </div>
    </div>
  );
};

export default Hero;
