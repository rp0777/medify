import { useLocation } from "react-router-dom";
import FAQ from "../Root/FAQ/FAQ";
import styles from "./Search.module.css";
import SearchForm from "./SearchForm/SearchForm";
import SearchResults from "./SearchResults/SearchResults";

const Search = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const state = params.get("state") || "";
  const city = params.get("city") || "";

  return (
    <div className={styles.search}>
      <SearchForm />

      {state && city && <SearchResults state={state} city={city} />}

      {(!state || !city) && <div className={styles.space}></div>}

      <FAQ />
    </div>
  );
};

export default Search;
