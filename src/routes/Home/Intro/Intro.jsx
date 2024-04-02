import styles from "./Intro.module.css";
import SearchBox from "./SearchBox/SearchBox";

const Intro = () => {
  return (
    <div className={styles.intro}>
      Intro
      <SearchBox />
    </div>
  );
};

export default Intro;
