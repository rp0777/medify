import { Form, useNavigate } from "react-router-dom";
import styles from "./SearchHospitals.module.css";

const SearchHospitals = ({ handleSearchInputChange }) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate("/bookings");
  };

  return (
    <Form className={styles.searchHospitals} onSubmit={handleSubmit}>
      <div id={styles.cityInput} className={styles.search}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search By Hospital"
          name="hospital"
          defaultValue={""}
          onChange={handleSearchInputChange}
        />
      </div>

      <button type="submit" className={styles.searchBtn}>
        <img src="/searchPage/search.png" />
        Search
      </button>
    </Form>
  );
};

export default SearchHospitals;
