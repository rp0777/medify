import FAQ from "../Root/FAQ/FAQ";
import styles from "./Search.module.css";
import SearchForm from "./SearchForm/SearchForm";
import SearchResults from "./SearchResults/SearchResults";

const Search = () => {
  return (
    <div className={styles.search}>
      <SearchForm />

      <SearchResults />

      <FAQ />
    </div>
  );
};

export default Search;
