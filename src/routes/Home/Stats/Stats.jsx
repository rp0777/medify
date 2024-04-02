import { Fragment } from "react";
import styles from "./Stats.module.css";

const cardsData = [
  {
    id: 0,
    img: "/stats/support.png",
    numbers: 5000,
    topic: "Happy Patients",
  },
  {
    id: 1,
    img: "/stats/labs.png",
    numbers: 1000,
    topic: "Laboratories",
  },
  {
    id: 2,
    img: "/stats/hospitals.png",
    numbers: 200,
    topic: "Hospitals",
  },
  {
    id: 3,
    img: "/stats/doctor.png",
    numbers: 700,
    topic: "Expert Doctors",
  },
];

const cardsGroup1 = [cardsData[0], cardsData[1]];
const cardsGroup2 = [cardsData[2], cardsData[3]];

const Cards = ({ groupDetails }) => {
  return (
    <Fragment>
      {groupDetails.map((data) => (
        <div key={data.id} className={styles.card}>
          <img className={styles.cardIamge} src={data.img} />

          <p className={styles.cardStats}>{data.numbers}+</p>

          <p className={styles.cardTopic}>{data.topic}</p>
        </div>
      ))}
    </Fragment>
  );
};

const Stats = () => {
  return (
    <div className={styles.stats}>
      <div className={styles.textAndCards}>
        <div className={styles.textContainer}>
          <p className={styles.subHeading}>
            CARING FOR THE HEATH OF YOU AND YOUR FAMILY.
          </p>

          <p className={styles.mainheading}>Our Families</p>

          <p className={styles.motivePara}>
            We will work with you to develop individualised care plans,
            including management of chronic diseases. If we cannot assist, we
            can provide referrals or advice about the type of practitioner you
            require. We treat all enquiries sensitively and in the strictest
            confidence.
          </p>
        </div>

        <div className={styles.cardsContainer}>
          <div className={styles.cardsGrop1}>
            <Cards groupDetails={cardsGroup1} />
          </div>

          <div className={styles.cardsGrop2}>
            <Cards groupDetails={cardsGroup2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
