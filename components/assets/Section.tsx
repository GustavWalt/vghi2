import React from "react";
import styles from "../../style/modules/assets/Section.module.scss";
import Fade from "./Fade";
import H2 from "./H2";

const Section = (props) => {
  return (
    <>
      <Fade>
        <div className={styles.section}>
          {props.title && <H2 title={props.title} />}
          <p>{props.paragraph}</p>
        </div>
      </Fade>
    </>
  );
};

export default Section;
