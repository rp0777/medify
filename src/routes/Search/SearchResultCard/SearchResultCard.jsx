import { Fragment, useState } from "react";
import styles from "./SearchResultCard.module.css";
import BookingPage from "../BookingPage/BookingPage";

const SearchResultCard = ({ hospital }) => {
  const [showBookingPage, setShowBookingPage] = useState(false);

  const hospitalId = hospital["Provider ID"];

  const handleBookClick = () => {
    setShowBookingPage(!showBookingPage);
  };

  return (
    <Fragment>
      <div className={styles.searchResultCard}>
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

          <button className={styles.bookBtn} onClick={handleBookClick}>
            Book FREE Center Visit
          </button>
        </div>
      </div>

      {showBookingPage && <BookingPage hospitalId={hospitalId} />}
    </Fragment>
  );
};

export default SearchResultCard;
