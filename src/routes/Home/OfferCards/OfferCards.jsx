import styles from "./OfferCards.module.css";

const OfferCards = () => {
  return (
    <div className={styles.offerCards}>
      <div className={styles.imageContainer}>
        <img className={styles.offer} src="/offers/offer1.png" />

        <img className={styles.offer} src="/offers/offer2.png" />

        <img className={styles.offer} src="/offers/offer1.png" />
      </div>
    </div>
  );
};

export default OfferCards;
