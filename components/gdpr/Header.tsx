import React from "react";
import styles from "../../style/modules/gdpr/Header.module.scss";

//Assets components
import H1 from "../assets/H1";
import GridItem from "../assets/GridItem";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.commonQuestions}>
        <H1 title="GDPR QUESTIONS" />
        <div className="flex">
          <GridItem
            title="Privacy Policy"
            open="This privacy policy (policy) will help you understand how RSBoosts uses and protects the data you provide to us when you visit and use RSBoosts.com.
            We reserve the right to change this policy at any given time, of which you will be promptly updated. If you want to make sure that you are up to date with the latest changes, we advise you to frequently visit this page.
            "
          />
          <GridItem
            title="Privacy Policy"
            open="By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to leave the website accordingly. RSBoosts only grants use and access of this website, its products, and its services to those who have accepted its terms."
          />
        </div>
        <div className="flex">
          <GridItem
            title="Refund Policy"
            open="Once we receive your item, we will inspect it and notify you that we have received your returned
            item. We will immediately notify you on the status of your refund after inspecting the item.
            If your return is approved, we will initiate a refund to your credit card (or original method of
            payment).
            You will receive the credit within a certain amount of days, depending on your card issuer's policies.
            "
          />
          <GridItem
            title="In-game policy"
            open="Once your order is completed, you can request for us to remove your personal data by contacting us directly so we never will have access to your account again. If you don't contact us, we will keep the data for 30 days after a completed order."
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
