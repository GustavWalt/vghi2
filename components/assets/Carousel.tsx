import React from "react";
import styles from "../../style/modules/assets/Carousel.module.scss";

//Carousel package
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Bar = () => {
  return (
    <>
      <div className={styles.carousel}>
        <Carousel infiniteLoop dynamicHeight width="800px">
          <div>
            <img src="header.webp" />
          </div>
          <div>
            <img src="header.webp" />
          </div>
          <div>
            <img src="header.webp" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Bar;
