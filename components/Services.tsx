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
          title="SKILLING"
          desc="Our skilling service is the most popular choice, with our reliable prices you can expect great service and fast delivery. "
          btn="Buy now"
        />
        <GridItem
          title="BOSSING"
          desc="Do you want a pet but tired of grinding? Let us handle this by letting our professional staff get your desired amount of kc.  "
          btn="Buy now"
        />
      </div>
      <div className="flex">
        <GridItem
          title="QUESTING"
          desc="Questing is boring, we know. That’s why we’re here to solve the issue for you, cheap prices and fast delivery. "
          btn="Buy now"
        />
        <GridItem
          title="SUPPORT"
          desc="Feel free to contact us at any time by contacting our support team. We are available 24/7 by mail & chat."
          btn="Contact us"
        />
      </div>
    </div>
  );
};

export default Services;
