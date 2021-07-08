import React, { useState } from "react";
import styles from "../../style/modules/assets/Footer.module.scss";
import "react-responsive-modal/styles.css";
import Fade from "./Fade";
import Link from "next/link";
import { Modal } from "react-responsive-modal";

const About = () => {
  const [openKopvillkor, setOpenKopvillkor] = useState(false);
  const kopvillkorOpen = () => setOpenKopvillkor(true);
  const kopvillkorClose = () => setOpenKopvillkor(false);

  const [openPersonuppgifter, setOpenPersonuppgifter] = useState(false);
  const personuppgifterOpen = () => setOpenPersonuppgifter(true);
  const personuppgifterClose = () => setOpenPersonuppgifter(false);

  const [openFragarSvar, setOpenFragarSvar] = useState(false);
  const fragarSvarOpen = () => setOpenFragarSvar(true);
  const fragarSvarClose = () => setOpenFragarSvar(false);

  return (
    <>
      <Modal open={openKopvillkor} onClose={kopvillkorClose} center>
        <h2>Köpvillkor</h2>
      </Modal>
      <Modal open={openPersonuppgifter} onClose={personuppgifterClose} center>
        <h2>Behandling av personuppgifter</h2>
      </Modal>
      <Modal open={openFragarSvar} onClose={fragarSvarClose} center>
        <h2>Vanliga frågor & svar</h2>
      </Modal>

      <div className={styles.footer}>
        <div className="flex">
          <div className={styles.footerItem}>
            <h1>INFORMATION</h1>
            <p>
              <Link href="/">
                <a>Hem</a>
              </Link>
            </p>
            <p>
              <Link href="/kontakt">
                <a>Kontakta mig</a>
              </Link>
            </p>
          </div>
          <div className={styles.footerItem}>
            <h1>KATEGORIER</h1>
            <p>
              <Link href="/">
                <a>Hem</a>
              </Link>
            </p>
            <p>
              <Link href="/information">
                <a>Information</a>
              </Link>
            </p>
            <p>
              <Link href="/kunder">
                <a>Urval av kunder</a>
              </Link>
            </p>
            <p>
              <Link href="/shop">
                <a>Beställ böcker</a>
              </Link>
            </p>
            <p>
              <Link href="/kontakt">
                <a>Kontakt</a>
              </Link>
            </p>
          </div>
          <div className={styles.footerItem}>
            <h1>KUNDSERVICE</h1>
            <p>
              <Link href="/kontakt">
                <a>Kontakt</a>
              </Link>
            </p>
            <p>
              <a onClick={() => kopvillkorOpen()}>Köpvillkor</a>
            </p>
            <p>
              <a onClick={() => personuppgifterOpen()}>
                Behandling av personuppgifter
              </a>
            </p>
            <p>
              <a onClick={() => fragarSvarOpen()}>Vanliga frågor & svar</a>
            </p>
          </div>
        </div>
        <div className={styles.blueBg}>
          <p>Copyright 2021 Gustav Walter ©</p>
        </div>
      </div>
    </>
  );
};

export default About;
