import React from "react";
import styles from "../../style/modules/homePage/About.module.scss";

//Assets components
import H1 from "../assets/H1";
import Fade from "../assets/Fade";

const About = () => {
  return (
    <div className={styles.about}>
      <H1 title="Om mig" />
      <Fade>
        <p>
          Jag är utbildad forensisk undersköterska samt jour kvinna med gedigen
          spetskunskap om våld i nära relationer. Med kunskap i tid minimeras
          risken för att falla offer för sina egna känslor och det möjliggör för
          en förändring. Jag arbetar för att stötta utsatta kvinnor i deras kamp
          om att bli fria från våld, hot och trakasserier. Förändringsarbetet är
          svårt, skört och arbetsam men med rätt verktyg, stöttning och
          hjälpinsats är det fullt möjligt.
        </p>
      </Fade>
    </div>
  );
};

export default About;
