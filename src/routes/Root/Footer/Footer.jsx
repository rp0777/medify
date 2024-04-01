import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* FOOTER LOGO & LINKS */}
      <div className={styles.footerLinks}>
        {/* LOGO AND SOCIAL MEDIA LINKS */}
        <div className={styles.logoAndSocialHandles}>
          <Logo />

          <ul className={styles.socialMediaLinks}>
            <li>
              <img
                className={styles.socialMediaIcons}
                src="/facebookIcon.png"
              />
            </li>
            <li>
              <img className={styles.socialMediaIcons} src="/twitterIcon.png" />
            </li>
            <li>
              <img className={styles.socialMediaIcons} src="/youtubeIcon.png" />
            </li>
            <li>
              <img
                className={styles.socialMediaIcons}
                src="/pinterestIcon.png"
              />
            </li>
          </ul>
        </div>

        {/* LINKS FOR ORGANISATIONS INFORMATION */}
        <ul className={styles.organisationLinks}>
          <li>&gt; &nbsp; About Us</li>
          <li>&gt; &nbsp; Our Pricing</li>
          <li>&gt; &nbsp; Our Gallery</li>
          <li>&gt; &nbsp; Appointment</li>
          <li>&gt; &nbsp; Privacy Policy</li>
        </ul>

        {/* LINKS FOR MEDICAL SERVICES OFFERED */}
        <ul className={styles.serviceLinks}>
          <li>&gt; &nbsp; Orthology</li>
          <li>&gt; &nbsp; Neurology</li>
          <li>&gt; &nbsp; Dental Care</li>
          <li>&gt; &nbsp; Ophthalmology</li>
          <li>&gt; &nbsp; Cardiology</li>
        </ul>

        {/* LINKS FOR ORGANISATIONS INFORMATION */}
        <ul className={styles.organisationLinks}>
          <li>&gt; &nbsp; About Us</li>
          <li>&gt; &nbsp; Our Pricing</li>
          <li>&gt; &nbsp; Our Gallery</li>
          <li>&gt; &nbsp; Appointment</li>
          <li>&gt; &nbsp; Privacy Policy</li>
        </ul>
      </div>

      {/* COPYRIGHT SECTION */}
      <div className={styles.copyright}>
        Copyright ©2023 Medify Medical Centers. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
