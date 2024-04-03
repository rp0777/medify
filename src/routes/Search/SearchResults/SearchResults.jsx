import { Fragment } from "react";
import styles from "./SearchResults.module.css";

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

const SearchResultCards = ({ mockData }) => (
  <Fragment>
    {mockData.map((hospital) => (
      <div key={hospital.id} className={styles.searchResultCard}>
        <div className={styles.hospitalIcon}>
          <img src={hospital.img} />
        </div>

        <div className={styles.hospitalDetails}>
          <p className={styles.hospitalName}>{hospital.hospitalName}</p>

          <p className={styles.hospitalCity}>
            {hospital.city}, {hospital.state}
          </p>

          <p className={styles.hospitalLandmark}>{hospital.landmark}</p>

          <p className={styles.consultationFee}>
            <span className={styles.freeTag}>FREE</span> &nbsp;
            <span className={styles.fees}>₹500</span> &nbsp; Consultation fee at
            clinic
          </p>

          <p className={styles.hospitalRating}>
            <img src="/searchPage/like.png" />
            {hospital.rating}
          </p>
        </div>

        <div className={styles.booking}>
          <p className={styles.availability}>Available Today</p>

          <button className={styles.bookBtn}>Book FREE Center Visit</button>
        </div>
      </div>
    ))}
  </Fragment>
);

const SearchResults = () => {
  return (
    <div className={styles.searchPage}>
      <div className={styles.upperBox}></div>

      <div className={styles.searchResults}>
        <p className={styles.mainHeading}>
          15 medical centers available in Alaska
        </p>

        <p className={styles.subHeading}>
          <img src="/searchPage/verified.png" />
          Book appointments with minimum wait-time & verified doctor details
        </p>

        <div className={styles.resultsAndAds}>
          <div className={styles.resultCards}>
            <SearchResultCards mockData={mockData} />
          </div>

          <img src="/searchPage/advertisement.png" />
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
