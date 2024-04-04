import { Fragment } from "react";
import styles from "./HospitalCard.module.css";

const HospitalCard = ({ booking }) => {
  return (
    <Fragment>
      <div className={styles.hospitalCard}>
        <div className={styles.hospitalIcon}>
          <img src="/searchPage/hospitalImg.png" />
        </div>

        <div className={styles.hospitalDetails}>
          <p className={styles.hospitalName}>
            {booking.hospitalDetails["Hospital Name"]}
          </p>

          <p className={styles.hospitalCity}>
            {booking.hospitalDetails.City}, {booking.hospitalDetails.State}
          </p>

          <p className={styles.hospitalLandmark}>
            {booking.hospitalDetails.Address}
          </p>

          {booking.hospitalDetails["Hospital overall rating"] !==
            "Not Available" && (
            <p className={styles.hospitalRating}>
              <img src="/searchPage/like.png" />
              {booking.hospitalDetails["Hospital overall rating"]}
            </p>
          )}
        </div>

        <div className={styles.booking}>
          <p className={styles.timeTag}>{booking.time}</p>

          <p className={styles.dateTag}>{booking.date}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default HospitalCard;
