import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      {/* LOGO */}
      <div className={styles.logo}>
        <img className={styles.logoImg} src="/medifyLogo.png" />

        <p className={styles.logoTitle}>Medify</p>
      </div>

      {/* NAVBAR LINKS */}
      <ul className={styles.navbarLinks}>
        <li>Find Doctors</li>
        <li>Medical Stores</li>
        <li>Hospitals</li>
        <li>Labs</li>
        <li>Surgeries</li>
        <li id={styles.myBookings}>My Bookings</li>
      </ul>
    </div>
  );
};

export default Navbar;
