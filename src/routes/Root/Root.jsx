import styles from "./Root.module.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Root = () => {
  return (
    <div className={styles.root}>
      {/* COMPANY GOAL HEADING TOP */}
      <h1 id={styles.goal}>
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </h1>

      {/* NAVBAR COMPONENT */}
      <Navbar />

      {/* FOOTER COMPONENT */}
      <Footer />
    </div>
  );
};

export default Root;
