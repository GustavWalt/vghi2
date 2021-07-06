import React from "react";
import styles from "../../style/modules/shop/Header.module.scss";
import Image from "next/image";
import Link from "next/link";

//Assets components
import H1 from "../assets/H1";
import GridItem from "../assets/GridItem";
import Order from "../assets/order";

const Header = () => {
  return (
    <div className={styles.header}>
      <H1 title="BESTÄLL DIN BOK HÄR" />
      <div className="flex">
        <GridItem title="Nu går jag!">
          <Image src="/bok1.jpg" alt="me" width="350" height="200" />
          <p className={styles.author}>av Frida Walter</p>
          <p>Pris: 149 kr</p>
          <div className={styles.order}>
            <Order name={"Nu går jag!"} price={"149"} />
          </div>
        </GridItem>
        <div>
          <GridItem title="Våga fråga!">
            <Image src="/bok2.jpg" alt="me" width="350" height="200" />
            <p className={styles.author}>av Frida Walter</p>
            <p>Pris: 149 kr</p>
            <div className={styles.order}>
              <Order name={"Våga fråga!"} price={"149"} />
            </div>
          </GridItem>
        </div>
      </div>
      <p>
        För bokning av föreläsning,{" "}
        <a href="mailto:varforgarhoninte@outlook.com">mejla</a> eller kontakta
        via <Link href="/kontakt">kontaktformuläret</Link> så gör vi tillsammans
        ett upplägg som passar just er verksamhet bäst.
      </p>
    </div>
  );
};

export default Header;
