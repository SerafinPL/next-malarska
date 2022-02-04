import React from "react";

import styles from './LookArt.module.scss'


const LookArt = (props) => {

  return (
    <div className={styles.LookArt}>
      <img src={`assets/${props.fileName}.png`} alt={props.alt} />
    </div>
  );
};

export default LookArt;
