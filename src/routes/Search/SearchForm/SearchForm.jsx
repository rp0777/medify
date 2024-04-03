import { Form, useLocation, useNavigate } from "react-router-dom";
import styles from "./SearchForm.module.css";
import { useState } from "react";

const SearchForm = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  let initialState = params.get("state") || "";
  let initialCity = params.get("city") || "";

  function capitalizeWords(str) {
    return str.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  }

  initialState = capitalizeWords(initialState);
  initialCity = initialCity.toUpperCase();

  const [state, setState] = useState(initialState);
  const [city, setCity] = useState(initialCity);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedState = capitalizeWords(state);
    const updatedCity = city.toUpperCase();

    const redirectUrl = `/search?state=${updatedState}&city=${updatedCity}`;

    navigate(redirectUrl);
  };

  return (
    <Form className={styles.searchForm} onSubmit={handleSubmit}>
      <div id={styles.stateInput} className={styles.search}>
        <img src="/searchPage/location.png" />

        <input
          className={styles.searchInput}
          type="text"
          placeholder="State"
          name="state"
          onChange={(e) => setState(e.target.value)}
          value={state ? state : ""}
        />
      </div>

      <div id={styles.cityInput} className={styles.search}>
        <img src="/searchPage/location.png" />

        <input
          className={styles.searchInput}
          type="text"
          placeholder="City"
          name="city"
          defaultValue={city ? city : ""}
          onChange={(e) => setCity(e.target.value)}
          style={city ? { color: "black !important" } : {}}
        />
      </div>

      <button type="submit" className={styles.searchBtn}>
        <img src="/searchPage/search.png" />
        Search
      </button>
    </Form>
  );
};

export default SearchForm;
