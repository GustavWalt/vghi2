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
      <H1 title="BESTÄLL DINA BÖCKER HÄR" />
      <div className="flex">
        <GridItem title="Nu går jag!">
          <Image src="/bok1.jpg" alt="me" width="350" height="200" />
          <p className={styles.author}>av Frida Walter</p>
          <p>Pris: 149 kr</p>
          <li>
            En handbok som riktar sig till de som ska, är mitt upp i eller har
            lämnat sin destruktiva relation. Handboken innehåller spetsinriktad
            information med tips och råd för att möjliggöra en förändring och
            vägen till frigörelse.{" "}
          </li>
          <br />
          <ul>
            <li>- ISBN: 9789178853502</li>
            <li>- Bandtyp: Hårdinbunden med 64 sidor</li>
            <li>- Format: 120x150mm</li>
          </ul>
          <div className={styles.order}>
            <Order name={"Nu går jag!"} price={"149"} />
          </div>
        </GridItem>
        <div>
          <GridItem title="Våga fråga!">
            <Image src="/bok2.jpg" alt="me" width="350" height="200" />
            <p className={styles.author}>av Frida Walter</p>
            <p>Pris: 149 kr</p>
            <li>
              Hur hjälper man på bästa sätt och hur närmar man sig en utsatt
              individ som isolerat sig med sin förövare? Frågorna är många och
              maktlösheten är ett faktum.{" "}
            </li>
            <br />
            <li>
              Denna handbok innehåller spetsinriktad information gällande
              bemötande samt vad som är bra att tänka på för att möjliggöra en
              livsviktig förändring. Handboken innehåller även tips och råd till
              dig som möter utsatta individer i din yrkesroll eller har en
              närstående som far illa i sin relation.{" "}
            </li>
            <br />
            <ul>
              <li>- ISBN: 978-91-7885-498-1</li>
              <li>- Bandtyp: Hårdinbunden med 64 sidor</li>
              <li>- Format: 120x150mm</li>
            </ul>
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
