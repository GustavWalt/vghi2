import React from "react";
import styles from "../../style/modules/customers/Header.module.scss";
import Image from "next/image";

//Assets components
import H1 from "../assets/H1";
import GridItem from "../assets/GridItem";

const Header = () => {
  return (
    <div className={styles.header}>
      <H1 title="KUNDER" />
      <div className={styles.logoSection}>
        <div className="flex">
          <div className={styles.img}>
            <Image src="/kunder/friskis.png" alt="me" width="250" height="75" />
          </div>
          <div className={styles.img}>
            <Image
              src="/kunder/stadsmissionen.png"
              alt="me"
              width="250"
              height="75"
            />
          </div>
          <div className={styles.img}>
            <Image src="/kunder/handen.webp" alt="me" width="350" height="75" />
          </div>
          <div className={styles.img}>
            <Image
              src="/kunder/katrineholm.png"
              alt="me"
              width="250"
              height="75"
            />
          </div>
        </div>
      </div>
      <div className={styles.logoSection}>
        <div className="flex">
          <div className={styles.img}>
            <Image
              src="/kunder/kvinnojour.jpg"
              alt="me"
              width="250"
              height="75"
            />
          </div>
          <div className={styles.img}>
            <Image src="/kunder/nynas.png" alt="me" width="250" height="75" />
          </div>
          <div className={styles.img}>
            <Image src="/kunder/sos.png" alt="me" width="250" height="75" />
          </div>
          <div className={styles.img}>
            <Image src="/kunder/tyreso.svg" alt="me" width="250" height="75" />
          </div>
        </div>
      </div>
      <div className={styles.logoSection}>
        <div className="flex">
          <div className={styles.img}>
            <Image
              src="/kunder/svenska-kyrkan.png"
              alt="me"
              width="250"
              height="160"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
