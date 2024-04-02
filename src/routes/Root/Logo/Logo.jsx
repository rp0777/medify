import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import { Fragment } from "react";

const Logo = () => {
  return (
    <Fragment>
      <Link className={styles.logo} to="/">
        <img className={styles.logoImg} src="/medifyLogo.png" />

        <p className={styles.logoTitle}>Medify</p>
      </Link>
    </Fragment>
  );
};

export default Logo;
