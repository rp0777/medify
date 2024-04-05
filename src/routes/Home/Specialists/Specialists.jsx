import styles from "./Specialists.module.css";

const specialistData = [
  {
    id: 0,
    img: "/specialists/specialist-1.png",
    name: "Dr. Ahmad Khan",
    designation: "Neurologist",
  },
  {
    id: 1,
    img: "/specialists/specialist-2.png",
    name: "Dr. Heena Sachdeva",
    designation: "Orthopedics",
  },
  {
    id: 2,
    img: "/specialists/specialist-3.png",
    name: "Dr. Ankur Sharma",
    designation: "Medicines",
  },
];

const Specialists = () => {
  return (
    <div className={styles.specialists}>
      <p className={styles.specialistHeading}>Our Medical Specialist</p>

      <div className={styles.specialistCards}>
        {specialistData.map((specialist) => (
          <div key={specialist.id} className={styles.specialistCard}>
            <img
              className={styles.specialistImage}
              src={specialist.img}
              alt="specialist image"
            />

            <p className={styles.specialistName}>{specialist.name}</p>

            <p className={styles.specialistDesignation}>
              {specialist.designation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialists;
