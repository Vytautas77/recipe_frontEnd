import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contact}>
        <h5>Kontaktai:</h5>
        <p> Turinio klausimais rašykite: receptai@receptai.lt</p>
        <p>Korespondencijos adresas:</p>
        <p>Smilties Pylimo gatvė 21, </p>
        <p>Klaipėda LT-92256</p>
      </div>
      <div className={styles.infoBox}>
        <h5>Pagalba:</h5>
        <p>
          <Link className={styles.link} href={"/privacyPolicy"}>
            Privatumo politika
          </Link>
        </p>
        <p>Slapukų nustatymai</p>
        <p>Skaidrumas ir teisinė informacija</p>
      </div>
    </div>
  );
};

export default Footer;
