import React from "react";
import styles from "../../style/modules/homePage/Services.module.scss";

//Assets components
import H1 from "../assets/H1";
import GridItem from "../assets/GridItem";

const Services = () => {
  return (
    <div className={styles.services}>
      <H1 title="INFORMATION" />
      <div className="flex">
        <GridItem
          title="Om mig"
          desc="Här kan du läsa mer om mig och mina föreläsningar och böcker."
          btn="OM MIG"
          btnHref="/information"
        />
        <GridItem
          title="Kunder"
          desc="Här kan du hitta ett urval av de kunder som har bokat en föreläsning med mig."
          btn="KUNDER"
          btnHref="/kunder"
        />
      </div>
      <div className="flex">
        <GridItem
          title="Kontakt"
          desc="Kontakta mig genom att klicka på knappen nedan och fyll i formuläret."
          btn="KONTAKT"
          btnHref="/kontakt"
        />
      </div>
    </div>
  );
};

export default Services;
