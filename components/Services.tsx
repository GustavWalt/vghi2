import React from "react";
import styles from "../style/modules/services/Services.module.scss";

import H1 from "./assets/H1";
import GridItem from "./assets/GridItem";

const Services = () => {
  return (
    <div className={styles.services}>
      <H1 title="OSRS SERVICES" />
      <div className="flex">
        <GridItem
          title="Hello"
          desc="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
          btn="CLICK HERE"
        />
        <GridItem
          title="Hello"
          desc="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
          btn="CLICK HERE"
        />
      </div>
      <div className="flex">
        <GridItem
          title="Hello"
          desc="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
          btn="CLICK HERE"
        />
        <GridItem
          title="Hello"
          desc="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
          btn="CLICK HERE"
        />
      </div>
    </div>
  );
};

export default Services;
