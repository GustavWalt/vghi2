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
      <H1 title="SHOP" />
      <div className="flex">
        <GridItem title="Nu går jag!">
          <Image src="/bok1.jpg" alt="me" width="350" height="200" />
          <p className={styles.author}>Frida Walter</p>
          <p>Pris: 149kr + frakt</p>
          <Order name={"Nu går jag!"} price={"149"} />
        </GridItem>
        <div>
          <GridItem title="Våga fråga!">
            <Image src="/bok2.jpg" alt="me" width="350" height="400" />
            <p className={styles.author}>Frida Walter</p>
            <p>Pris: 149kr + frakt</p>
            <Order name={"Våga fråga!"} price={"149"} />
          </GridItem>
        </div>
      </div>
    </div>
  );
};

export default Header;
