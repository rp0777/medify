import { Fragment } from "react";
import styles from "./SearchBox.module.css";
import { Form, Link, redirect } from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData();
  let state = formData.get("state");
  let city = formData.get("city");

  function capitalizeWords(str) {
    return str.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  }

  state = capitalizeWords(state);
  city = city.toUpperCase();

  const redirectUrl = `/search?state=${state}&city=${city}`;

  return redirect(redirectUrl);
}

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
      <Form className={styles.searchForm} method="post">
        <div className={styles.search}>
          <img src="/searchBar/searchIcon.png" />

          <input
            className={styles.searchInput}
            type="text"
            name="state"
            placeholder="State"
          />
        </div>

        <div className={styles.search}>
          <img src="/searchBar/searchIcon.png" />

          <input
            className={styles.searchInput}
            type="text"
            name="city"
            placeholder="City"
          />
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
