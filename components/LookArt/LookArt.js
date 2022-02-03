import React from "react";

/


const LookArt = (props) => {

  return (
    <React.Fragment>
      <img src={`/assets/${props.fileName}.png`} alt="Logo Anita Machura, Anity Machury" />
    </React.Fragment>
  );
};

export default LookArt;
