import { Fragment } from "react";
import styles from "./SearchBox.module.css";
import { Link } from "react-router-dom";

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
  return (
    <div className={styles.searchBox}>
      <div className={styles.searchForm}>
        <div className={styles.search}>
          <img src="/searchBar/searchIcon.png" />

          <input
            className={styles.searchInput}
            type="text"
            placeholder="State"
          />
        </div>

        <div className={styles.search}>
          <img src="/searchBar/searchIcon.png" />

          <input
            className={styles.searchInput}
            type="text"
            placeholder="City"
          />
        </div>

        <button className={styles.searchBtn}>
          <img src="/searchBar/search.png" />
          Search
        </button>
      </div>

      <p className={styles.categoryTitle}>You may be looking for</p>

      <div className={styles.categoryCards}>
        <CategoryCards categoryData={categoryData} />
      </div>
    </div>
  );
};

export default SearchBox;
