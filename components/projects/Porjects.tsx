import React from "react";
import styles from "./Projects.module.css";

const Porjects = () => {
  return (
    <div className={styles.projectsSection}>
      <div className={styles.projects}>
        <div className={styles.project}>
          <div className={styles.projectCard}></div>
          <div className={styles.projectCard}></div>
          <div className={styles.projectCard}></div>
          <div className={styles.projectCard}></div>
          <div className={styles.projectCard}></div>
          <div className={styles.projectCard}></div>
          <div className={styles.projectCard}></div>
          <div className={styles.projectCard}></div>
          <div className={styles.projectCard}></div>
          <div className={styles.projectCard}></div>
        </div>
      </div>
      <div className={styles.button}>All Photos</div>
    </div>
  );
};

export default Porjects;
