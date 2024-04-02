import { Fragment } from "react";
import styles from "./Specialisations.module.css";

const specialisationData = [
  {
    id: 0,
    img: "/specialisation/Drugstore.png",
    topic: "Dentistry",
  },
  {
    id: 1,
    img: "/specialisation/Stethoscope.png",
    topic: "Primary Care",
  },
  {
    id: 2,
    img: "/specialisation/HeartRate.png",
    topic: "Cardiology",
  },
  {
    id: 3,
    img: "/specialisation/HeartRateMonitor.png",
    topic: "MRI Resonance",
  },
  {
    id: 4,
    img: "/specialisation/BloodSample.png",
    topic: "Blood Test",
  },
  {
    id: 5,
    img: "/specialisation/Immune.png",
    topic: "Piscologist",
  },
  {
    id: 6,
    img: "/specialisation/Drugstore.png",
    topic: "Laboratory",
  },
  {
    id: 7,
    img: "/specialisation/X-Ray.png",
    topic: "X-Ray",
  },
];

const SpecialCards = ({ specialisationData }) => (
  <Fragment>
    {specialisationData.map((specialData) => (
      <div key={specialData.id} className={styles.specialCard}>
        <img className={styles.specialImg} src={specialData.img} />

        <p className={styles.specialTopic}>{specialData.topic}</p>
      </div>
    ))}
  </Fragment>
);

const Specialisations = () => {
  return (
    <div className={styles.specialisations}>
      <p className={styles.mainHeading}>Find By Specialisation</p>

      <div className={styles.specialisationCards}>
        <SpecialCards specialisationData={specialisationData} />
      </div>

      <button className={styles.veiwAllBtn}>View All</button>
    </div>
  );
};

export default Specialisations;
