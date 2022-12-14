import React from "react";
import styles from "../../style/modules/temp/Closed.module.scss";

const Closed = () => {
  return (
    <>
        <div className={styles.closed}>
            <h1>Sidan är temporärt nedstängd.</h1>
            <p>Vid beställning av böcker/föreläsningar, vänligen kontakta:</p>
            <p>
                <a href="mailto:varforgarhoninte@outlook.com">varforgarhoninte@outlook.com</a>
            </p>
        </div>
    </>
  );
};

export default Closed;
