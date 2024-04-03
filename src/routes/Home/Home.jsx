import FAQ from "../Root/FAQ/FAQ";
import BlogAndNews from "./BlogAndNews/BlogAndNews";
import styles from "./Home.module.css";
import Intro from "./Intro/Intro";
import OfferCards from "./OfferCards/OfferCards";
import Services from "./Services/Services";
import Specialists from "./Specialists/Specialists";
import Specialisations from "./Specialisations/Specialisations";
import Stats from "./Stats/Stats";
import SearchBox from "./SearchBox/SearchBox";

const Home = () => {
  return (
    <div className={styles.home}>
      <Intro />

      <SearchBox />

      <OfferCards />

      <Specialisations />

      <Specialists />

      <Services />

      <BlogAndNews />

      <Stats />

      <FAQ />
    </div>
  );
};

export default Home;
