import React from "react";
import styles from "../../style/modules/assets/SkillsItem.module.scss";
import Link from "next/link";

const Skills = (props) => {
  return (
    <>
      <Link href="#">
        <a className={styles.item}>
          <img src={props.img} alt="#" />
          <p>{props.text}</p>
        </a>
      </Link>
    </>
  );
};

export default Skills;
