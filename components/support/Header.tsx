import React from "react";
import styles from "../../style/modules/support/Header.module.scss";

//Assets components
import H1 from "../assets/H1";
import GridItem from "../assets/GridItem";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.search}>
        <H1 title="What can we help you with?" />
        <input placeholder="Search ..." type="text" />
      </div>
      <div className={styles.commonQuestions}>
        <H1 title="Common topics" />
        <div className="flex">
          <GridItem
            title="Trust"
            open="I understand that it's hard to trust somthing new, but I can assure you that we will finish your requested service as soon as possible."
          />
          <GridItem
            title="Time"
            open="It really depends on the type of service. Our workes are doing services 8-16h/day to assure you that your request will be finished as soon as possible."
          />
        </div>
        <div className="flex">
          <GridItem
            title="Contact"
            open="You can contact me on discord, email or directly through customer support here on the site. If you have any questions at all, don't be afraid to contact me!"
          />
          <GridItem
            title="Work"
            open="I'm always looking for new workers & feel free to contact me if you are interested."
          />
        </div>
        <div className="flex">
          <GridItem
            title="Prices"
            open="I'm trying to keep the prices down to compete with the rest of the services that are provided out there. "
          />
          <GridItem
            title="Payments"
            open="I handle secure payments through creditcard/crypto/paypal to make you as a customer assured to have a secure payment."
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
