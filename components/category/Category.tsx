import React from "react";
import styles from "./Category.module.css";

const Category = () => {
  return (
    <div className={styles.categorySection}>
      <div className={styles.header}>
        <h2>Focusing on fashion & personal projects</h2>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.categoriesWrapper}>
        <div className={styles.categories}>
          <div className={styles.category}>Landscape,</div>
          <div className={styles.category}>Model,</div>
          <div className={styles.category}>Street,</div>
          <div className={styles.category}>Architecture,</div>
          <div className={styles.category}>Film,</div>
          <div className={styles.category}>Fashion,</div>
          <div className={styles.category}>Product</div>
        </div>
      </div>
    </div>
  );
};

export default Category;
