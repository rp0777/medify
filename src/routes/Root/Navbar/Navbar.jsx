import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      {/* LOGO */}
      <Logo />

      {/* NAVBAR LINKS */}
      <ul className={styles.navbarLinks}>
        <li>Find Doctors</li>
        <li>Medical Stores</li>
        <li>Hospitals</li>
        <li>Laboratories</li>
        <li>Surgeries</li>
        <li id={styles.myBookings}>My Bookings</li>
      </ul>
    </div>
  );
};

export default Navbar;
