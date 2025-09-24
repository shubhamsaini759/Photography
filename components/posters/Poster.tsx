import React from "react";
import styles from "./Poster.module.css";

const Poster = () => {
  return (
    <div className={styles.posters}>
      <div className={styles.posterWrapper}>
        <div className={styles.header}>
          <h2 className={styles.leftHeader}>
            Focusing on fashion & personal projects
          </h2>
          <p className={styles.rightHeader}>
            Every photo holds a memory, and every memory deserves to be
            beautifully told. This template is designed to highlight your
            passion for photography.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.leftImageWrapper}>
            <div className={styles.leftImage}></div>
          </div>
          <div className={styles.rightImageWrapper}>
            <div className={styles.rightImage}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
