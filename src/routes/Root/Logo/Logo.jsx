import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img className={styles.logoImg} src="/medifyLogo.png" />

      <p className={styles.logoTitle}>Medify</p>
    </div>
  );
};

export default Logo;
