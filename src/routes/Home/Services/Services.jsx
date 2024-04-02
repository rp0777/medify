import styles from "./Services.module.css";

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.consultationCard}>
            <div className={styles.headingContainer}>
              <img className={styles.callIcon} src="/services/callIcon.png" />

              <p className={styles.consultHeading}>Free Consultation</p>
            </div>
            <p className={styles.subTitle}>Consultation with the best</p>
          </div>

          <img className={styles.servicePic1} src="/services/service2.png" />

          <img className={styles.servicePic2} src="/services/service1.png" />
        </div>

        <div className={styles.textContainer}>
          <p className={styles.subHeading}>
            HELPING PATIENTS FROM AROUND THE GLOBE!
          </p>

          <p className={styles.heading}>
            Patient <span className={styles.headingBlue}>Caring</span>
          </p>

          <p className={styles.goal}>
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </p>

          <ul className={styles.keypoints}>
            <li className={styles.points}>
              <img src="/services/checkIcon.png" />
              Stay Updated About Your Health
            </li>
            <li className={styles.points}>
              <img src="/services/checkIcon.png" />
              Check Your Results Online
            </li>
            <li className={styles.points}>
              <img src="/services/checkIcon.png" />
              Manage Your Appointments
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
