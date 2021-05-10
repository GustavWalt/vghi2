import React from "react";
import styles from "../../style/modules/blog/Header.module.scss";

//Assets components
import H1 from "../assets/H1";
import GridItem from "../assets/GridItem";
import Carousel from "../assets/Carousel";

const Header = () => {
  return (
    <div className={styles.header}>
      <H1 title="Recent news" />
      <Carousel />
      <div className={styles.archive}>
        <H1 title="News archive" />
        <div className="flex">
          <GridItem
            title="Discount"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nostrum minima assumenda provident nam debitis laboriosam enim"
            date="2021-05-10"
            auth="Gustav Walter"
            btn="Read more"
            btnHref="/blog"
            authHref="/staff"
          />
          <GridItem
            title="Discount"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nostrum minima assumenda provident nam debitis laboriosam enim"
            date="2021-05-10"
            auth="Gustav Walter"
            btn="Read more"
            btnHref="/blog"
            authHref="/staff"
          />
        </div>
        <div className="flex">
          <GridItem
            title="Discount"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nostrum minima assumenda provident nam debitis laboriosam enim"
            date="2021-05-10"
            auth="Gustav Walter"
            btn="Read more"
            btnHref="/blog"
            authHref="/staff"
          />
          <GridItem
            title="Discount"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nostrum minima assumenda provident nam debitis laboriosam enim"
            date="2021-05-10"
            auth="Gustav Walter"
            btn="Read more"
            btnHref="/blog"
            authHref="/staff"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
