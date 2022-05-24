import React from "react";
import styles from "../../style/modules/information/Header.module.scss";
import Image from "next/image";

//Assets components
import H1 from "../assets/H1";
import H2 from "../assets/H2";
import Section from "../assets/Section";
import Fade from "../assets/Fade";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.commonQuestions}>
        <H1 title="INFORMATION" />
        <Fade>
          <div className={styles.imgWrap}>
            <Image
              className={styles.profile}
              src="/logo.png"
              alt="me"
              width="391"
              height="234.5"
            />
          </div>
        </Fade>
        <Section
          title="Om mig"
          paragraph="Mitt namn är Frida Walter. Jag är utbildad forensisk undersköterska samt jourkvinna med
            gedigen spetskunskap om våld i nära relationer. Med kunskap i tid
            minimeras risken för att falla offer för sina egna känslor och det
            möjliggör för en förändring. Jag arbetar för att stötta utsatta
            kvinnor i deras kamp om att bli fria från våld, hot och
            trakasserier. Förändringsarbetet är svårt, skört och arbetsam men
            med rätt verktyg, stöttning och hjälpinsats är det fullt möjligt.
            Jag är också författaren till handböckerna 'Nu går jag!' och 'Våga fråga!'."
        />
        <Section
          title="Varför går hon inte?"
          paragraph="Min föreläsning heter 'Varför går hon inte?' vilket inte bara är en
          titel utan också en fråga som många ställer sig i samhället.
          Föreläsningen är personlig och helt utan filter för hur verkligheten
          ser ut. Att möjliggöra för en förändring är inte enkelt, det krävs
          mod och beslutsamhet. Var finns hjälpen, hur blir man stark i det
          svaga och hur finner man lyckan mitt i sorgen? Frågorna är många och
          ovissheten är ett faktum. Skam, skuld, rädsla är bara några av många
          svåra känslor en utsatt person måste handskas med i sin vardag."
        />
        <Section
          paragraph="Jag föreläser både utifrån egna erfarenheter men också utifrån mina
          olika yrkesroller. Jag anpassar min föreläsning efter målgrupp och
          behov vilket gör att jag både möter ungdomar och vuxna. Mitt mål är
          att öppna upp för dialog samt sprida kunskap kring detta tabubelagda
          ämne. Jag arbetar mobilt i hela Sverige."
        />
        <Section
          paragraph="För bokning av föreläsning, mejla till varforgarhoninte@outlook.com
          så gör vi tillsammans ett upplägg som passar just er verksamhet
          bäst."
        />
        <Section title="VÄLKOMNA!" />
      </div>
      <Fade>
        <div className={styles.imgWrap}>
          <Image
            className={styles.profile}
            src="/profile.jpg"
            alt="me"
            width="341.5"
            height="455.5"
          />
        </div>
      </Fade>
    </div>
  );
};

export default Header;
