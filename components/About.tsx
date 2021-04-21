import React from "react";
import styles from "../style/modules/about/About.module.scss";

import H1 from "./assets/H1";

const About = () => {
  return (
    <div className={styles.about}>
      <H1 title="ABOUT US" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias modi
        quae ipsum laborum unde odit neque aspernatur sed veniam? Amet sint
        culpa laborum eligendi consequatur vitae vel veritatis, ratione alias!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt iste
        assumenda itaque quas quam quia quod eos eius perferendis, molestias
        quasi, adipisci velit cumque sed pariatur, quidem sequi esse quisquam.
      </p>
    </div>
  );
};

export default About;
