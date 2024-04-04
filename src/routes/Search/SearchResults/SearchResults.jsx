import { useEffect } from "react";
import styles from "./SearchResults.module.css";
import axios from "axios";
import { useRecoilState } from "recoil";
import { hospitalListState } from "../../../store/atoms";
import SearchResultCard from "../SearchResultCard/SearchResultCard";

const SearchResults = ({ state, city }) => {
  const [hospitalList, setHospitalList] = useRecoilState(hospitalListState);

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
            {hospitalList.map((hospital) => (
              <div
                key={hospital["Provider ID"]}
                className={styles.cardContainer}
              >
                <SearchResultCard hospital={hospital} />
              </div>
            ))}
          </div>

          <img src="/searchPage/advertisement.png" />
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
