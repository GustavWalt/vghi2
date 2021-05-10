import React from "react";
import styles from "../../style/modules/staff/Header.module.scss";

//Assets
import H1 from "../assets/H1";
import StaffItem from "./StaffItem";

const Header = () => {
  return (
    <>
      <div className={styles.staff}>
        <H1 title="Staff" />
        <div className="flex">
          <StaffItem
            imgSrc="/example_1.jpg"
            imgDesc="Image desc"
            name="Peter Petersson"
            work="Owner"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iure quasi non laborum repellat"
          />
          <StaffItem
            imgSrc="/example_2.png"
            imgDesc="Image desc"
            name="Emil Thurgren"
            work="Staff"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iure quasi non laborum repellat"
          />
          <StaffItem
            imgSrc="/example_3.jpg"
            imgDesc="Image desc"
            name="Gustav Mortensson"
            work="Staff"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iure quasi non laborum repellat"
          />
        </div>
        <div className="flex">
          <StaffItem
            imgSrc="/example_4.jpg"
            imgDesc="Image desc"
            name="Erik Bengtsson"
            work="Staff"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iure quasi non laborum repellat"
          />
          <StaffItem
            imgSrc="/example_5.jpg"
            imgDesc="Image desc"
            name="Rasmus Petterson"
            work="Staff"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iure quasi non laborum repellat"
          />
          <StaffItem
            imgSrc="/example_6.jpg"
            imgDesc="Image desc"
            name="Kurt Nilsson"
            work="Staff"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iure quasi non laborum repellat"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
