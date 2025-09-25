import React from "react";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";

const Project = () => {
  return (
    <div className={styles.project}>
      <Navbar />
      <div className={styles.hero}>
        <div className={styles.constraint}>
          <div className={styles.highlightProject}></div>
          <div className={styles.highlightProjectHeader}>Robin</div>
        </div>
        <div className={styles.infoWrapper}>
          <p className={styles.infoTitle}>Product</p>
        </div>
      </div>
      {/* product */}
      <div className={styles.projectWrapper}>
        <div className={styles.projectLeftList}>
          {/* <div className={styles.projectLeftListCard}> */}
          <div className={styles.cardImageBox}>
            <div className={styles.cardImage}></div>
            <div className={styles.details}>
              <div className={styles.detailHeader}>
                <h3>Authenticy </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas sed malesuada turpis. Donec rutrum justo vitae ipsum
                  efficitur, a feugiat velit bibendum.{" "}
                </p>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className={styles.projectRightList}>
          <div className={styles.projectLeftListCard}>
            <div className={styles.cardImageBox}>
              <div className={styles.cardImage}></div>
              <div className={styles.details}>
                <div className={styles.detailHeader}>
                  <h3>Authenticy </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas sed malesuada turpis. Donec rutrum justo vitae
                    ipsum efficitur, a feugiat velit bibendum.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
