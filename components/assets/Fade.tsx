import React, { useEffect } from "react";
import styles from "../../style/modules/navbar/Navbar.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Fade = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        data-aos="fade-zoom-in"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        {props.children}
      </div>
    </>
  );
};

export default Fade;
