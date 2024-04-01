import styles from "./AppDownload.module.css";

const AppDownload = () => {
  return (
    <div className={styles.appDownload}>
      <div className={styles.container}>
        <img className={styles.phones} src="/appDownload/phones.png" />

        <div className={styles.contactForm}>
          <div className={styles.headingStyles}>
            <img className={styles.dots} src="/appDownload/dots.png" />

            <img className={styles.lines} src="/appDownload/lines.png" />

            <img className={styles.arrow} src="/appDownload/arrow.png" />

            <h2 className={styles.heading}>
              Download the <br></br> <span>Medify</span> App
            </h2>
            <p className={styles.subHeading}>
              Get the link to download the app
            </p>
          </div>

          <div className={styles.phoneNumberForm}>
            <select name="callingIds" id={styles.callingIds}>
              <option value="India">+91</option>
              <option value="USA">+1</option>
              <option value="Canada">+2</option>
              <option value="Pakistan">+92</option>
              <option value="UK">+44</option>
            </select>

            <input
              type="text"
              className={styles.phoneInput}
              placeholder="Enter phone number"
            />
            <button className={styles.sendBtn}>Send SMS</button>
          </div>

          <div className={styles.storeLinks}>
            <img
              className={styles.playstore}
              src="/appDownload/googlePlay.png"
            />

            <img
              className={styles.appStore}
              src="/appDownload/appleStore.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
