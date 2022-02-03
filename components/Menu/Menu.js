import React from "react";
import Link from "next/link";

import styles from "./Menu.module.scss";

import CloseButton from "./CloseButton/CloseButton";

const Menu = (props) => {
  return (
    <React.Fragment>
      <nav
        id="menuDrawer"
        className={`${styles.navDrawer} ${
          props.open ? styles.openDrawer : styles.closeDrawer
        }`}
      >
        <CloseButton clicked={props.closeClick} />

        <Link href="#">Malarstwo</Link>
        <Link href="#">Bio</Link>
        <Link href="#">Kontakt</Link>
        <img src="/assets/anitkalogo.png" alt="Logo" />
        <p>Polski/Niemiecki/Angilksi</p>
      </nav>
    </React.Fragment>
  );
};

export default Menu;
