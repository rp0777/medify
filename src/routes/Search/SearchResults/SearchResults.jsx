import { Fragment, useEffect, useState } from "react";
import styles from "./SearchResults.module.css";
import axios from "axios";

const mockData = [
  {
    id: 0,
    img: "/searchPage/hospitalImg.png",
    hospitalName: "Fortis Hospital Richmond Road",
    city: "Bangalore",
    state: "Karnataka",
    landmark: "Smilessence Centre for Advanced Dentistry +1 more",
    rating: 5,
  },
  {
    id: 1,
    img: "/searchPage/hospitalImg.png",
    hospitalName: "Fortis Hospital Richmond Road",
    city: "Bangalore",
    state: "Karnataka",
    landmark: "Smilessence Centre for Advanced Dentistry +1 more",
    rating: 5,
  },
];

const SearchResultCards = ({ hospitalList }) => (
  <Fragment>
    {hospitalList.map((hospital) => (
      <div key={hospital.id} className={styles.searchResultCard}>
        <div className={styles.hospitalIcon}>
          <img src="/searchPage/hospitalImg.png" />
        </div>

        <div className={styles.hospitalDetails}>
          <p className={styles.hospitalName}>{hospital["Hospital Name"]}</p>

          <p className={styles.hospitalCity}>
            {hospital.City}, {hospital.State}
          </p>

          <p className={styles.hospitalLandmark}>{hospital.Address}</p>

          <p className={styles.consultationFee}>
            <span className={styles.freeTag}>FREE</span> &nbsp;
            <span className={styles.fees}>₹500</span> &nbsp; Consultation fee at
            clinic
          </p>

          {hospital["Hospital overall rating"] !== "Not Available" && (
            <p className={styles.hospitalRating}>
              <img src="/searchPage/like.png" />
              {hospital["Hospital overall rating"]}
            </p>
          )}
        </div>

        <div className={styles.booking}>
          <p className={styles.availability}>Available Today</p>

          <button className={styles.bookBtn}>Book FREE Center Visit</button>
        </div>
      </div>
    ))}
  </Fragment>
);

const SearchResults = ({ state, city }) => {
  const [hospitalList, setHospitalList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://meddata-backend.onrender.com/data?state=${state}&city=${city.toUpperCase()}`
        );
        setHospitalList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [state, city]);

  return (
    <div className={styles.searchPage}>
      <div className={styles.upperBox}></div>

      <div className={styles.searchResults}>
        <p className={styles.mainHeading}>
          15 medical centers available in {state}
        </p>

        <p className={styles.subHeading}>
          <img src="/searchPage/verified.png" />
          Book appointments with minimum wait-time & verified doctor details
        </p>

        <div className={styles.resultsAndAds}>
          <div className={styles.resultCards}>
            <SearchResultCards hospitalList={hospitalList} />
          </div>

          <img src="/searchPage/advertisement.png" />
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
