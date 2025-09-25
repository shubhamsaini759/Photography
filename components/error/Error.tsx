import React from "react";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <div className={styles.error}>
      <div className={styles.errorSection}>
        <div className={styles.errorWrapper}>
          <div className={styles.errorImage}></div>
          <h2>Page Not Found</h2>
          <p>We can’t find the page your are looking for.</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
