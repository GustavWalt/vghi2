import React from "react";
import styles from "../../style/modules/skillsitem/SkillsItem.module.scss";

const Skills = (props) => {
  return (
    <>
      <a className={styles.item} href="#">
        <img src={props.img} alt="#" />
        <p>{props.text}</p>
      </a>
    </>
  );
};

export default Skills;
