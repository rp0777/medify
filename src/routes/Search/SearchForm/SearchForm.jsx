import styles from "./SearchForm.module.css";

const SearchForm = () => {
  return (
    <div className={styles.searchForm}>
      <div id={styles.stateInput} className={styles.search}>
        <img src="/searchPage/location.png" />

        <input className={styles.searchInput} type="text" placeholder="State" />
      </div>

      <div id={styles.cityInput} className={styles.search}>
        <img src="/searchPage/location.png" />

        <input className={styles.searchInput} type="text" placeholder="City" />
      </div>

      <button className={styles.searchBtn}>
        <img src="/searchPage/search.png" />
        Search
      </button>
    </div>
  );
};

export default SearchForm;
