import { Fragment, useEffect, useState } from "react";
import styles from "./SearchBox.module.css";
import { Form, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const categoryData = [
  {
    id: 0,
    img: "/searchBar/Doctor.png",
    topic: "Doctors",
  },
  {
    id: 1,
    img: "/searchBar/Drugstore.png",
    topic: "Labs",
  },
  {
    id: 2,
    img: "/searchBar/Hospital.png",
    topic: "Hospitals",
  },
  {
    id: 3,
    img: "/searchBar/Capsule.png",
    topic: "Medical Store",
  },
  {
    id: 4,
    img: "/searchBar/Ambulance.png",
    topic: "Ambulance",
  },
];

const CategoryCards = ({ categoryData }) => (
  <Fragment>
    {categoryData.map((category) => (
      <Link to="search" key={category.id} className={styles.categoryCard}>
        <img className={styles.categoryIcon} src={category.img} />

        <p className={styles.categoryTopic}>{category.topic}</p>
      </Link>
    ))}
  </Fragment>
);

const SearchBox = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();

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

  const handleStateChange = async (e) => {
    const selectedState = e.target.value;
    setSelectedState(selectedState);
    try {
      const response = await axios.get(
        `https://meddata-backend.onrender.com/cities/${selectedState}`
      );
      setCities(response.data);
    } catch (error) {
      console.error("Error fetching cities data:", error);
    }
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
    <div className={styles.searchBox}>
      <Form className={styles.searchForm} onSubmit={handleSubmit}>
        <div className={styles.search}>
          <img src="/searchBar/searchIcon.png" alt="search icon" />

          <select
            name="state"
            className={styles.searchInput}
            value={selectedState}
            onChange={handleStateChange}
          >
            <option value="" disabled selected>
              Select State
            </option>

            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.search}>
          <img src="/searchBar/searchIcon.png" />

          <select
            name="city"
            className={styles.searchInput}
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="" disabled selected>
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
          <img src="/searchBar/search.png" />
          Search
        </button>
      </Form>

      <p className={styles.categoryTitle}>You may be looking for</p>

      <div className={styles.categoryCards}>
        <CategoryCards categoryData={categoryData} />
      </div>
    </div>
  );
};

export default SearchBox;
