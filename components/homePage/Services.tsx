import React from "react";
import styles from "../../style/modules/homePage/Services.module.scss";

//Assets components
import H1 from "../assets/H1";
import GridItem from "../assets/GridItem";

const Services = () => {
  return (
    <div className={styles.services}>
      <H1 title="INFORMTION OM HEMSIDAN" />
      <div className="flex">
        <GridItem
          title="Information"
          desc="Här kan du hitta information om mig och vem jag är."
          btn="Klicka här"
          btnHref="/information"
        />
        <GridItem
          title="Kunder"
          desc="Här kan du läsa om vilka kunder jag har föreläst för."
          btn="Klicka här"
          btnHref="/kunder"
        />
      </div>
      <div className="flex">
        <GridItem
          title="Shop"
          desc="Intresserad av att köpa en av mina böcker? Klicka nedan."
          btn="Klicka här"
          btnHref="/shop"
        />
        <GridItem
          title="Kontakt"
          desc="Kontakta mig genom att klicka på knappen nedan och fyll i formuläret."
          btn="Klicka här"
          btnHref="/kontakt"
        />
      </div>
    </div>
  );
};

export default Services;
