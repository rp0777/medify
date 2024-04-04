import styles from "./HospitalList.module.css";
import HospitalCard from "../HospitalCard/HospitalCard";
import { useRecoilValue } from "recoil";
import { bookingDetailsState } from "../../../store/atoms";

const HospitalList = ({ filter }) => {
  const bookingDetails = useRecoilValue(bookingDetailsState);

  // Filter hospitals based on the search input
  let filteredHospitals = [];
  if (filter) {
    filteredHospitals = bookingDetails.filter(
      (booking) =>
        booking.hospitalDetails &&
        booking.hospitalDetails["Hospital Name"] &&
        booking.hospitalDetails["Hospital Name"]
          .toLowerCase()
          .includes(filter.toLowerCase())
    );
  } else {
    filteredHospitals = bookingDetails;
  }

  return (
    <div className={styles.hospitalList}>
      <div className={styles.upperBox}>
        <p className={styles.pageHeading}>My Bookings</p>
      </div>

      {filteredHospitals.length !== 0 ? (
        <div className={styles.searchResults}>
          <div className={styles.resultsAndAds}>
            <div className={styles.resultCards}>
              {filteredHospitals.map((booking) => (
                <div key={booking} className={styles.cardContainer}>
                  <HospitalCard booking={booking} />
                </div>
              ))}
            </div>
            <img src="/searchPage/advertisement.png" />
          </div>
        </div>
      ) : (
        <div className={styles.space}></div>
      )}
    </div>
  );
};

export default HospitalList;
