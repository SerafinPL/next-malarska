import React from "react";

import styles from "./LookArt.module.scss";

const LookArt = (props) => {
  const [lookState, setLookState] = React.useState(false);

  const changeLookStateHandler = (state) => {
    setLookState(state);
  };

  return (
    <div className={`${styles.LookArt} ${lookState ? styles.moved : " "}`}>
      <div
        className={`${styles.firstLook} ${
          lookState ? styles.secondOpen : " "
        }`}
      >
        <img
          src={`assets/${props.fileName}.png`}
          alt={props.alt}
          onClick={() => changeLookStateHandler(!lookState)}
        />
      </div>
      <div
        className={`${styles.secondLook} ${
          lookState ? styles.secondOpen : " "
        }`}
      ></div>
    </div>
  );
};

export default LookArt;
