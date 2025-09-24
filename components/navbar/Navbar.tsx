import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbarSection}>
      <div className={styles.navbar}>
        <p>Photograher</p>
        <p>Menu</p>
      </div>
    </div>
  );
};

export default Navbar;
