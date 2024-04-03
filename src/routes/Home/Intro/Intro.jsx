import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <p className={styles.introSubHeading}>Skip the travel! Find Online</p>

          <p className={styles.intoHeading}>
            Medical <span className={styles.blueHeading}>Centers</span>
          </p>

          <p className={styles.introPara}>
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </p>

          <button className={styles.findBtn}>Find Centers</button>
        </div>

        <div className={styles.imageContainer}>
          <img className={styles.introImage} src="/intro.png" />

          <img className={styles.checkupImage} src="/regularCheckup.png" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
