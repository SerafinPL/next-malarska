import React from "react";

import styles from "./Footer.module.scss";

const Footer = (props) => {
  return (
    <div className={styles.firstBox}>
      <div className={styles.secondBox}>
        <h3>
          <a href="https://kubakoder.pl">Powered by KubaKoder</a>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
