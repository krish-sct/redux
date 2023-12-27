import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image
          src="/assets/instagram.jpeg"
          width={15}
          height={15}
          className={styles.icon}
          alt="account"
        />
        <Image
          src="/assets/twitter.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="account"
        />
        <Image
          src="/assets/whatsapp.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="account"
        />
      </div>

      <br />
      <div>copyright @2024 e-con Systems.</div>
    </div>
  );
};

export default Footer;
