import { Form, useLocation, useNavigate } from "react-router-dom";
import styles from "./SearchForm.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const SearchForm = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  let initialState = params.get("state") || "";
  let initialCity = params.get("city") || "";

  const [selectedState, setSelectedState] = useState(initialState);
  const [selectedCity, setSelectedCity] = useState(initialCity);

  useEffect(() => {
    const fetchStatesData = async () => {
      try {
        const response = await axios.get(
          `https://meddata-backend.onrender.com/states`
        );
        setStates(response.data);
      } catch (error) {
        console.error("Error fetching states data:", error);
      }
    };

    fetchStatesData();
  }, []);

  useEffect(() => {
    const fetchCitiesData = async () => {
      try {
        const response = await axios.get(
          `https://meddata-backend.onrender.com/cities/${selectedState}`
        );
        setCities(response.data);
      } catch (error) {
        console.error("Error fetching cities data:", error);
      }
    };

    fetchCitiesData();
  }, [selectedState]);

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setSelectedState(selectedState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const state = formData.get("state");
    const city = formData.get("city");
    const redirectUrl = `/search?state=${state}&city=${city}`;
    navigate(redirectUrl);
  };

  return (
    <Form className={styles.searchForm} onSubmit={handleSubmit}>
      <div id={styles.stateInput} className={styles.search}>
        <img src="/searchPage/location.png" />

        <select
          name="state"
          className={styles.searchInput}
          value={selectedState}
          onChange={handleStateChange}
        >
          <option value="" disabled>
            Select State
          </option>

          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div id={styles.cityInput} className={styles.search}>
        <img src="/searchPage/location.png" />

        <select
          name="city"
          className={styles.searchInput}
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="" disabled>
            Select City
          </option>

          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className={styles.searchBtn}>
        <img src="/searchPage/search.png" />
        Search
      </button>
    </Form>
  );
};

export default SearchForm;
