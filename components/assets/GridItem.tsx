import React, { useState } from "react";
import styles from "../../style/modules/assets/GridItem.module.scss";
import Image from "next/image";
import Fade from "./Fade";
import Link from "next/link";

const GridItem = (props) => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!isOpen);

  return (
    <>
      <Fade>
        <div className={styles.gridItem}>
          <h2 className="text-color">{props.title}</h2>
          {props.children}
        </div>
      </Fade>
    </>
  );
};

export default GridItem;
