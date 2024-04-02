import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      {/* LOGO */}
      <Logo />

      {/* NAVBAR LINKS */}
      <ul className={styles.navbarLinks}>
        <li>
          <Link className={styles.links} to="search">
            Find Doctors
          </Link>
        </li>
        <li>
          <Link className={styles.links} to="search">
            Medical Stores
          </Link>
        </li>
        <li>
          <Link className={styles.links} to="search">
            Hospitals
          </Link>
        </li>
        <li>
          <Link className={styles.links} to="search">
            Laboratories
          </Link>
        </li>
        <li>
          <Link className={styles.links} to="search">
            Surgeries
          </Link>
        </li>
        <li id={styles.myBookings}>
          <Link
            className={styles.links}
            to="/bookings"
            style={{ color: "#ffffff" }}
          >
            My Bookings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
