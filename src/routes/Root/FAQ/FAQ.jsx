import styles from "./FAQ.module.css";

const FAQ = () => {
  return (
    <div className={styles.faq}>
      <img className={styles.lineGraph} src="faq/lineGraph.png" />

      <img className={styles.curves} src="faq/curves.png" />

      <div className={styles.titleBlock}>
        <p className={styles.subHeading}>Get Your Answer</p>
        <p className={styles.mainHeading}>Frequently Asked Questions</p>
      </div>

      <div className={styles.imgAndQuestions}>
        <div className={styles.stylesAndImg}>
          <img className={styles.faqImg} src="/faq/faq.jpeg" />

          <img className={styles.happyImg} src="/faq/happyPatients.png" />

          <img className={styles.heartIcon} src="/faq/heartIcon.png" />
        </div>

        <ul className={styles.faqQuestions}>
          <li className={styles.question}>
            <p>Why choose our medical family for your family?</p>
            <button className={styles.icon}>+</button>
          </li>

          <li className={styles.question}>
            <p>Why we are different from others?</p>
            <p className={styles.icon}>+</p>
          </li>

          <li className={styles.question}>
            <p>Trusted & experience senior care & love</p>
            <p className={styles.icon}>+</p>
          </li>

          <li className={styles.question}>
            <p>How to get appointment for emergency cases?</p>
            <p className={styles.icon}>+</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
