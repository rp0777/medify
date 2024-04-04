import styles from "./MyBookings.module.css";
import HospitalList from "./HospitalList/HospitalList";
import SearchHospitals from "./SearchHospitals/SearchHospitals";
import { useState } from "react";

const MyBookings = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className={styles.myBookings}>
      <SearchHospitals handleSearchInputChange={handleSearchInputChange} />

      <HospitalList filter={searchInput} />
    </div>
  );
};

export default MyBookings;
