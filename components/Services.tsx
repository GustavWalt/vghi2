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
          desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia facilis eveniet, nam libero autem accusamus deserunt necessitatibus eligendi quidem tenetur, odio doloribus ad aut veritatis ut nulla? Expedita, ipsam tenetur!"
          btn="CLICK HERE"
        />
        <GridItem
          title="Hello"
          desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia facilis eveniet, nam libero autem accusamus deserunt necessitatibus eligendi quidem tenetur, odio doloribus ad aut veritatis ut nulla? Expedita, ipsam tenetur!"
          btn="CLICK HERE"
        />
      </div>
      <div className="flex">
        <GridItem
          title="Hello"
          desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia facilis eveniet, nam libero autem accusamus deserunt necessitatibus eligendi quidem tenetur, odio doloribus ad aut veritatis ut nulla? Expedita, ipsam tenetur!"
          btn="CLICK HERE"
        />
        <GridItem
          title="Hello"
          desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia facilis eveniet, nam libero autem accusamus deserunt necessitatibus eligendi quidem tenetur, odio doloribus ad aut veritatis ut nulla? Expedita, ipsam tenetur!"
          btn="CLICK HERE"
        />
      </div>
    </div>
  );
};

export default Services;
