import React from "react";
import styles from "../../style/modules/homePage/About.module.scss";

//Assets components
import H1 from "../assets/H1";
import Fade from "../assets/Fade";

const About = () => {
  return (
    <div className={styles.about}>
      <H1 title="ABOUT US" />
      <Fade>
        <p>
          RSBoosts is created by me, the person writing this. My name is Gustav
          & I’m from Sweden, I just finished high-school focusing on software
          development. I’m a full-time student heading into college and I’m a
          huge fan of Old school Runescape and been playing the last 6 years.
          This is a project for fun, I don’t expect many people buying services
          but the main reason is to learn software development and handling
          secure payments and owning a web-shop.
        </p>
      </Fade>
    </div>
  );
};

export default About;
