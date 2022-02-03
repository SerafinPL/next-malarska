import React from "react";

import styles from './LookArt.module.scss'


const LookArt = (props) => {

  return (
    <div className={styles.LookArt}>
      <img src={`assets/${props.fileName}.png`} alt="Logo Anita Machura, Anity Machury" />
    </div>
  );
};

export default LookArt;
