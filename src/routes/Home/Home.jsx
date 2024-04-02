import FAQ from "../Root/FAQ/FAQ";
import BlogAndNews from "./BlogAndNews/BlogAndNews";
import styles from "./Home.module.css";
import Intro from "./Intro/Intro";
import OfferCards from "./OfferCards/OfferCards";
import SearchBox from "./SearchBox/SearchBox";
import Specialists from "./Specialists/Specialists";
import Specializations from "./Specializations/Specializations";
import Stats from "./Stats/Stats";

const Home = () => {
  return (
    <div className={styles.home}>
      <Intro />

      <SearchBox />

      <OfferCards />

      <Specializations />

      <Specialists />

      <BlogAndNews />

      <Stats />

      <FAQ />
    </div>
  );
};

export default Home;
