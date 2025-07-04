import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link className={styles.logo}>Viaje Mais</Link>

        <div>
          <Link className={styles.navLink}>Blog de Viagens</Link>
          <Link className={styles.navLink}>Galeria</Link>
          <Link className={styles.navLink}>Contato</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
